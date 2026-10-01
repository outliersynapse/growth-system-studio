import { Link } from "@tanstack/react-router";
import { ArrowRight, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Our Work", to: "/work" },
  { label: "About", to: "/about" },
  { label: "Team", to: "/team" },
] as const;

export function Wordmark() {
  return (
    <Link to="/" className="flex items-baseline gap-1.5" aria-label="Outlier Synapse home">
      <span className="font-serif text-lg font-bold">Outlier</span>
      <span className="font-serif text-lg italic text-ice">Synapse</span>
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
      <div className="site-container grid h-16 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 md:grid-cols-[auto_minmax(0,1fr)_auto]">
        <div className="min-w-0"><Wordmark /></div>
        <nav className="hidden items-center justify-center gap-7 text-[13px] text-muted-foreground md:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link key={item.to} to={item.to} activeProps={{ className: "text-foreground" }} className="transition-colors hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>
        <Button asChild variant="outline" size="sm" className="hidden md:inline-flex">
          <Link to="/contact" search={{}}>Book a Strategy Call</Link>
        </Button>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="shrink-0 md:hidden" aria-label="Open navigation">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-full sm:max-w-sm">
            <SheetHeader className="text-left">
              <SheetTitle className="font-serif">Outlier Synapse</SheetTitle>
              <SheetDescription>AI-powered growth systems.</SheetDescription>
            </SheetHeader>
            <nav className="mt-10 flex flex-col border-t border-border" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <SheetClose asChild key={item.to}>
                  <Link to={item.to} className="border-b border-border py-4 font-serif text-2xl">{item.label}</Link>
                </SheetClose>
              ))}
              <SheetClose asChild>
                <Button asChild className="mt-8 h-12"><Link to="/contact" search={{}}>Book a Strategy Call</Link></Button>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="site-container grid gap-10 py-12 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <Wordmark />
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">AI-powered lead generation, automation, conversion websites, and growth consulting.</p>
          <p className="mt-5 text-xs text-smoke">Contact details and social links — placeholders</p>
        </div>
        <div className="md:text-right">
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-muted-foreground md:justify-end">
            {navItems.slice(1).map((item) => <Link key={item.to} to={item.to} className="hover:text-foreground">{item.label}</Link>)}
            <Link to="/contact" search={{}} className="hover:text-foreground">Contact</Link>
          </nav>
          <p className="mt-5 text-xs text-smoke">© 2026 Outlier Synapse</p>
        </div>
      </div>
    </footer>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-8 flex items-center gap-3">
      <span className="shrink-0 text-[11px] font-medium uppercase text-ice">{children}</span>
      <span className="h-px flex-1 bg-border" aria-hidden="true" />
    </div>
  );
}

export function PageIntro({ index, eyebrow, title, description }: { index: string; eyebrow: string; title: string; description: string }) {
  return (
    <section className="border-b border-border">
      <div className="site-container grid grid-cols-12 gap-x-8 gap-y-8 py-16 lg:py-24">
        <div className="col-span-12 lg:col-span-8">
          <SectionLabel>{index} — {eyebrow}</SectionLabel>
          <h1 className="max-w-[18ch] font-serif text-5xl leading-[1.06] text-balance sm:text-6xl lg:text-7xl">{title}</h1>
        </div>
        <p className="col-span-12 max-w-[46ch] self-end text-base leading-relaxed text-muted-foreground lg:col-span-4 lg:text-lg">{description}</p>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section>
      <div className="site-container py-16 lg:py-24">
        <div className="grid grid-cols-12 items-center gap-8 rounded-md border border-border p-8 lg:p-14">
          <div className="col-span-12 lg:col-span-8">
            <p className="text-[11px] font-medium uppercase text-ice">Begin — Strategy Call</p>
            <h2 className="mt-4 max-w-[18ch] font-serif text-4xl leading-tight lg:text-5xl">Ready to Build a Predictable Growth System?</h2>
            <p className="mt-5 max-w-[48ch] text-muted-foreground">Let&apos;s discuss your business goals and design a growth system around them.</p>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <Button asChild size="lg" className="w-full"><Link to="/contact" search={{}}>Book a Strategy Call <ArrowRight /></Link></Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PortraitPlaceholder({ label = "Portrait placeholder" }: { label?: string }) {
  return (
    <div className="portrait-grid relative aspect-[4/5] overflow-hidden rounded-md border border-border bg-secondary" aria-label={label}>
      <div className="absolute left-1/2 top-[30%] size-[24%] -translate-x-1/2 rounded-full border border-smoke/70 bg-background" />
      <div className="absolute bottom-[12%] left-1/2 h-[38%] w-[55%] -translate-x-1/2 rounded-t-full border border-smoke/70 bg-background" />
      <span className="absolute bottom-3 left-3 text-[10px] uppercase text-smoke">Editable portrait</span>
    </div>
  );
}