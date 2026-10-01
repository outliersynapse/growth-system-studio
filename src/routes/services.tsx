import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Bot, ChartNoAxesCombined, MousePointerClick, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FinalCta, PageIntro, SectionLabel } from "@/components/site";

export const Route = createFileRoute("/services")({
  head: () => ({ meta: [
    { title: "Services — Outlier Synapse" }, { name: "description", content: "Lead generation, marketing automation, conversion websites, and growth consulting built as one system." },
    { property: "og:title", content: "Growth System Services — Outlier Synapse" }, { property: "og:description", content: "Four connected services designed to create predictable customer acquisition." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: ServicesPage,
});

const entries = [
  { icon: ChartNoAxesCombined, title: "AI-Powered Lead Generation", summary: "Build a qualified, measurable flow of demand across paid channels and focused landing pages.", deliverables: ["Meta and Google Ads structure", "Landing page direction", "Conversion optimization", "Measurement framework"], uses: "For businesses that need a repeatable source of qualified conversations." },
  { icon: Bot, title: "Marketing Automation", summary: "Turn interest into timely follow-up with connected tools and intelligent sequences.", deliverables: ["CRM setup", "WhatsApp automation", "Lead nurturing systems", "AI chatbot workflows"], uses: "For teams losing leads to slow, inconsistent, or manual follow-up." },
  { icon: MousePointerClick, title: "High-Conversion Websites", summary: "Design focused digital journeys that clarify the offer and move visitors toward action.", deliverables: ["Conversion-focused website design", "Landing pages", "Booking funnels", "Message hierarchy"], uses: "For businesses whose current website does not consistently generate enquiries." },
  { icon: Workflow, title: "Growth Consulting", summary: "Connect offer, audience, channel, and operations into an accountable growth model.", deliverables: ["Marketing strategy", "Offer design", "Acquisition system planning", "Optimization roadmap"], uses: "For leaders who need strategic clarity before investing more in execution." },
];

function ServicesPage() { return <>
  <PageIntro index="01" eyebrow="Services" title="Four disciplines. One connected growth system." description="We align acquisition, automation, conversion, and strategy so every part of your marketing supports the next." />
  <section><div className="site-container py-16 lg:py-20"><SectionLabel>02 — Service Architecture</SectionLabel><div className="divide-y divide-border border-y border-border">{entries.map((item,i)=><article key={item.title} className="grid grid-cols-12 gap-8 py-12"><div className="col-span-12 md:col-span-1"><item.icon className="size-6 text-ice"/></div><div className="col-span-12 md:col-span-5"><span className="text-[10px] uppercase text-smoke">S.0{i+1}</span><h2 className="mt-3 font-serif text-3xl">{item.title}</h2><p className="mt-4 max-w-[44ch] text-sm leading-relaxed text-muted-foreground">{item.summary}</p></div><div className="col-span-12 md:col-span-3"><h3 className="text-xs font-semibold uppercase">Deliverables</h3><ul className="mt-4 space-y-2 text-sm text-muted-foreground">{item.deliverables.map(x=><li key={x}>— {x}</li>)}</ul></div><div className="col-span-12 md:col-span-3"><h3 className="text-xs font-semibold uppercase">Best used when</h3><p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.uses}</p></div></article>)}</div><div className="mt-12"><Button asChild variant="outline"><Link to="/contact">Discuss your growth system <ArrowRight/></Link></Button></div></div></section>
  <FinalCta />
  </>; }