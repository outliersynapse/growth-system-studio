import { createFileRoute } from "@tanstack/react-router";
import { FinalCta, PageIntro, PortraitPlaceholder, SectionLabel } from "@/components/site";

export const Route = createFileRoute("/team")({ head: () => ({ meta: [
  { title: "Our Team — Outlier Synapse" }, { name: "description", content: "Meet the people behind Outlier Synapse. Official profiles and roles will be added once confirmed." },
  { property: "og:title", content: "Our Team — Outlier Synapse" }, { property: "og:description", content: "The people designing and building connected growth systems at Outlier Synapse." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: TeamPage });

function TeamPage(){return <><PageIntro index="01" eyebrow="Our Team" title="The people behind the system." description="A multidisciplinary team structure spanning strategy, acquisition, automation, and conversion design. Official details will be added when confirmed."/><section><div className="site-container py-16 lg:py-20"><SectionLabel>02 — Team Directory</SectionLabel><div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">{Array.from({length:6},(_,i)=><article key={i}><PortraitPlaceholder label={`Team member ${i+1} portrait placeholder`}/><div className="mt-4 flex items-start justify-between gap-4"><div><h2 className="font-serif text-xl">Name placeholder</h2><p className="mt-1 text-xs uppercase text-smoke">Official role placeholder</p></div><span className="text-xs text-ice">Social</span></div><p className="mt-4 text-sm leading-relaxed text-muted-foreground">Short official biography will be added after the team profile is confirmed.</p></article>)}</div></div></section><FinalCta/></>}