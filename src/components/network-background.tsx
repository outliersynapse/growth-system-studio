import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  phase: number;
  radius: number;
};

export function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const styles = getComputedStyle(document.documentElement);
    const lineColor = styles.getPropertyValue("--network-line").trim();
    const nodeColor = styles.getPropertyValue("--network-node").trim();
    const pulseColor = styles.getPropertyValue("--network-pulse").trim();
    let nodes: Node[] = [];
    let animationFrame = 0;
    let width = 0;
    let height = 0;

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);

      const count = Math.max(18, Math.min(44, Math.floor(width / 38)));
      nodes = Array.from({ length: count }, (_, index) => ({
        x: ((index * 83) % 101) / 101 * width,
        y: ((index * 47) % 97) / 97 * height,
        vx: ((index % 5) - 2) * 0.025,
        vy: (((index * 3) % 5) - 2) * 0.018,
        phase: index * 0.7,
        radius: index % 7 === 0 ? 2.2 : 1.35,
      }));
    };

    const draw = (time = 0) => {
      context.clearRect(0, 0, width, height);

      for (let i = 0; i < nodes.length; i += 1) {
        const node = nodes[i];
        if (!node) continue;
        if (!reducedMotion) {
          node.x += node.vx;
          node.y += node.vy;
          if (node.x < -20) node.x = width + 20;
          if (node.x > width + 20) node.x = -20;
          if (node.y < -20) node.y = height + 20;
          if (node.y > height + 20) node.y = -20;
        }

        for (let j = i + 1; j < nodes.length; j += 1) {
          const other = nodes[j];
          if (!other) continue;
          const distance = Math.hypot(node.x - other.x, node.y - other.y);
          if (distance < 170) {
            context.globalAlpha = (1 - distance / 170) * 0.42;
            context.strokeStyle = lineColor;
            context.lineWidth = 0.7;
            context.beginPath();
            context.moveTo(node.x, node.y);
            context.lineTo(other.x, other.y);
            context.stroke();
          }
        }

        const pulse = reducedMotion ? 0.68 : 0.55 + Math.sin(time * 0.0007 + node.phase) * 0.22;
        context.globalAlpha = pulse;
        context.fillStyle = nodeColor;
        context.beginPath();
        context.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        context.fill();

        if (i % 11 === 0) {
          context.globalAlpha = Math.max(0.05, pulse * 0.2);
          context.strokeStyle = pulseColor;
          context.lineWidth = 1;
          context.beginPath();
          context.arc(node.x, node.y, node.radius + 7 + pulse * 3, 0, Math.PI * 2);
          context.stroke();
        }
      }

      context.globalAlpha = 1;
      if (!reducedMotion) animationFrame = window.requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize, { passive: true });
    return () => {
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return <canvas ref={canvasRef} className="network-background" aria-hidden="true" />;
}