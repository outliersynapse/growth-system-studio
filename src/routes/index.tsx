import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Bot, ChartNoAxesCombined, MousePointerClick, Workflow } from "lucide-react";

import caseBlueprint from "@/assets/case-growth-blueprint.jpg";
import caseDashboard from "@/assets/case-dashboard.jpg";
import caseEditorial from "@/assets/case-editorial.jpg";
import { Button } from "@/components/ui/button";
import { FinalCta, PortraitPlaceholder, SectionLabel } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Outlier Synapse — Predictable Customer Acquisition Systems" },
    { name: "description", content: "AI-powered lead generation, marketing automation, and conversion-focused websites for growing businesses." },
    { property: "og:title", content: "Outlier Synapse — Predictable Customer Acquisition Systems" },
    { property: "og:description", content: "Build a measurable growth system with AI-powered acquisition, automation, and conversion design." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: HomePage,
});

const services = [
  { icon: ChartNoAxesCombined, title: "AI-Powered Lead Generation", copy: "Meta Ads, Google Ads, landing pages, and conversion optimization." },
  { icon: Bot, title: "Marketing Automation", copy: "CRM setup, WhatsApp automation, lead nurturing systems, and AI chatbots." },
  { icon: MousePointerClick, title: "High-Conversion Websites", copy: "Conversion-focused design, landing pages, and booking funnels." },
  { icon: Workflow, title: "Growth Consulting", copy: "Marketing strategy, offer design, and customer acquisition systems." },
];

function SystemDiagram() {
  return (
    <div className="flex min-h-[360px] flex-col rounded-md border border-border p-6">
      <div className="flex items-center justify-between text-[10px] uppercase text-smoke"><span>Fig. 01 · System Diagram</span><span className="text-ice">Active</span></div>
      <div className="my-auto grid grid-cols-3 gap-3">
        {["Acquire", "Nurture", "Convert"].map((item, index) => (
          <div key={item} className="rounded-md border border-border py-5 text-center">
            <span className="text-[10px] uppercase text-smoke">0{index + 1}</span><p className="mt-2 font-serif text-lg">{item}</p>
          </div>
        ))}
        <div className="col-span-3 rounded-md border border-dashed border-input px-4 py-8">
          <div className="flex items-center justify-center gap-2" aria-hidden="true">
            <span className="size-3 rounded-full bg-ice"/><span className="h-px flex-1 bg-border"/><span className="size-3 rounded-full border border-foreground/40"/><span className="h-px flex-1 bg-border"/><span className="size-3 rounded-full bg-ice"/>
          </div>
          <p className="mt-4 text-center text-[10px] uppercase text-smoke">Signal → Sequence → Conversion</p>
        </div>
      </div>
      <div className="flex justify-between border-t border-border pt-4 text-[10px] text-smoke"><span>OS–ENGINE / 01</span><span className="text-ice">AI-assisted</span></div>
    </div>
  );
}

function HomePage() {
  return <>
    <section className="border-b border-border">
      <div className="site-container grid grid-cols-12 gap-x-8 gap-y-12 py-16 lg:py-24">
        <div className="col-span-12 lg:col-span-7">
          <SectionLabel>01 — Acquisition Engine</SectionLabel>
          <h1 className="max-w-[16ch] font-serif text-5xl leading-[1.05] text-balance sm:text-6xl lg:text-7xl">Build a Predictable Customer Acquisition System</h1>
          <p className="mt-8 max-w-[48ch] text-base leading-relaxed text-muted-foreground sm:text-lg">AI-powered lead generation, marketing automation, and conversion-focused websites for growing businesses.</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg"><Link to="/contact" search={{ channel: undefined }}>Book Strategy Call <ArrowRight /></Link></Button>
            <Button asChild size="lg" variant="outline"><Link to="/contact" search={{ channel: "whatsapp" }}>WhatsApp Consultation</Link></Button>
          </div>
          <div className="mt-12 grid max-w-md grid-cols-3 gap-4 border-t border-border pt-6">
            <div><div className="font-serif text-2xl">04</div><div className="mt-1 text-[10px] uppercase text-smoke">Services</div></div>
            <div><div className="font-serif text-2xl">04</div><div className="mt-1 text-[10px] uppercase text-smoke">Process steps</div></div>
            <div><div className="font-serif text-2xl text-ice">AI</div><div className="mt-1 text-[10px] uppercase text-smoke">Powered</div></div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-5"><SystemDiagram /></div>
      </div>
    </section>

    <section className="border-b border-border">
      <div className="site-container py-16 lg:py-20">
        <SectionLabel>02 — The Diagnostic</SectionLabel>
        <div className="grid grid-cols-12 gap-x-8 gap-y-8">
          <div className="col-span-12 lg:col-span-6"><h2 className="max-w-[20ch] font-serif text-3xl leading-tight sm:text-4xl">Why Most Businesses Struggle to Grow Online</h2><p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">Outlier Synapse replaces fragmented activity with a coordinated growth system powered by AI and automation.</p></div>
          <ol className="col-span-12 divide-y divide-border lg:col-span-6 lg:border-l lg:border-border lg:pl-8">
            {["No structured lead generation system.","Marketing done randomly without strategy.","Poor website conversions.","Manual follow-ups leading to lost leads.","Wasted advertising budget."].map((problem, i) => <li key={problem} className="flex gap-4 py-4"><span className="font-serif text-sm text-ice">0{i+1}</span><span className="text-sm">{problem}</span></li>)}
          </ol>
        </div>
      </div>
    </section>

    <section className="border-b border-border">
      <div className="site-container py-16 lg:py-20">
        <SectionLabel>03 — Capabilities</SectionLabel>
        <div className="mb-10 grid grid-cols-12"><h2 className="col-span-12 max-w-[22ch] font-serif text-3xl leading-tight sm:text-4xl lg:col-span-7">Everything You Need to Build a Growth System</h2></div>
        <div className="grid overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => <article key={service.title} className="group bg-background p-6 transition-colors hover:bg-secondary"><div className="flex items-center justify-between"><service.icon className="size-5 text-ice"/><span className="text-[10px] text-smoke">S.0{i+1}</span></div><h3 className="mt-8 font-serif text-xl leading-snug">{service.title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.copy}</p></article>)}
        </div>
      </div>
    </section>

    <section className="border-b border-border">
      <div className="site-container py-16 lg:py-20"><SectionLabel>04 — Method</SectionLabel><h2 className="font-serif text-3xl sm:text-4xl">A Clear Path From Strategy to Growth</h2><div className="relative mt-12 grid gap-8 md:grid-cols-4 md:gap-6">
        <div className="absolute left-0 right-0 top-6 hidden h-px bg-border md:block" />
        {["Strategy call and business analysis.","Design your growth system.","Launch campaigns and automation.","Optimize and scale."].map((step,i)=><div key={step} className="relative border-l border-border pl-5 md:border-l-0 md:pl-0"><div className="relative z-10 grid size-12 place-items-center rounded-full border border-border bg-background font-serif text-ice">0{i+1}</div><p className="mt-5 max-w-[20ch] text-sm leading-relaxed">{step}</p></div>)}
      </div></div>
    </section>

    <section className="border-b border-border">
      <div className="site-container py-16 lg:py-20"><SectionLabel>05 — Selected Work</SectionLabel><div className="mb-10 flex items-end justify-between gap-6"><h2 className="font-serif text-3xl sm:text-4xl">Systems in practice</h2><Link to="/work" className="hidden text-sm text-muted-foreground hover:text-foreground sm:block">View all work →</Link></div>
        <div className="grid grid-cols-12 gap-6">
          <article className="col-span-12 overflow-hidden rounded-md border border-border transition-transform hover:-translate-y-1 lg:col-span-7"><img src={caseBlueprint} alt="Abstract growth funnel blueprint" width={1408} height={912} loading="lazy" className="aspect-[16/10] w-full object-cover"/><div className="p-6"><span className="text-[10px] uppercase text-smoke">Case study placeholder · 01</span><h3 className="mt-2 font-serif text-xl">Client project title</h3><p className="mt-2 text-sm text-muted-foreground">Problem, approach, solution, and verified results to be added.</p></div></article>
          <div className="col-span-12 grid gap-6 lg:col-span-5"><WorkCard image={caseDashboard} index="02"/><WorkCard image={caseEditorial} index="03"/></div>
        </div>
      </div>
    </section>

    <section className="border-b border-border">
      <div className="site-container grid grid-cols-12 gap-10 py-16 lg:py-20">
        <div className="col-span-12 lg:col-span-5"><SectionLabel>06 — Founder</SectionLabel><div className="grid grid-cols-[8rem_minmax(0,1fr)] gap-5"><PortraitPlaceholder label="Vineeth portrait placeholder"/><div><h2 className="font-serif text-2xl">Vineeth</h2><p className="mt-1 text-[10px] uppercase text-smoke">Founder · biography placeholder</p><p className="mt-4 text-sm leading-relaxed text-muted-foreground">Founder biography will be added after the official profile is confirmed.</p><span className="mt-4 inline-block text-sm text-ice">LinkedIn — placeholder</span></div></div></div>
        <div className="col-span-12 lg:col-span-7 lg:border-l lg:border-border lg:pl-8"><div className="mb-6 flex items-baseline justify-between"><h2 className="font-serif text-2xl">The team</h2><Link to="/team" className="text-xs text-muted-foreground">Meet the team →</Link></div><div className="grid grid-cols-2 gap-4 sm:grid-cols-3">{[1,2,3].map(n=><div key={n}><PortraitPlaceholder/><p className="mt-2 text-sm">Name placeholder</p><p className="text-xs text-smoke">Official role</p></div>)}</div></div>
      </div>
    </section>
    <FinalCta />
  </>;
}

function WorkCard({ image, index }: { image: string; index: string }) {
  return <article className="overflow-hidden rounded-md border border-border transition-transform hover:-translate-y-1"><img src={image} alt="Abstract case study visual" width={1056} height={640} loading="lazy" className="aspect-[16/8] w-full object-cover"/><div className="p-5"><span className="text-[10px] uppercase text-smoke">Case study placeholder · {index}</span><h3 className="mt-2 font-serif text-lg">Client project title</h3></div></article>;
}