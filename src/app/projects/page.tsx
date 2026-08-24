"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "@phosphor-icons/react";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
  return <main className="min-h-[100dvh]"><header className="mx-auto flex max-w-[1400px] items-center justify-between px-4 py-5 md:px-8"><Link href="/" className="inline-flex items-center gap-2 text-sm"><ArrowLeft size={18} weight="light" />Volver al portafolio</Link><span className="font-mono text-xs tracking-[0.16em] text-[var(--accent)]">SOFIA NEYRA</span></header><section className="mx-auto max-w-[1400px] px-4 pb-20 pt-12 md:px-8 md:pt-20"><p className="font-mono text-xs tracking-[0.16em] text-[var(--accent)]">ARCHIVO / 01</p><h1 className="mt-5 text-5xl font-medium tracking-[-0.055em] md:text-7xl">Mis proyectos</h1><p className="mt-6 max-w-xl leading-relaxed text-[var(--muted)]">Una selección de sitios web publicados.</p><div className="mt-14 divide-y border-y">{projects.map((project, index) => <a key={project.slug} href={project.url} target="_blank" rel="noreferrer" className="group grid gap-3 py-5 transition hover:px-3 md:grid-cols-[80px_1fr_auto] md:items-center"><span className="font-mono text-xs text-[var(--muted)]">{String(index + 1).padStart(2, "0")}</span><h2 className="text-xl font-medium tracking-tight">{project.title}</h2><span className="inline-flex items-center gap-2 text-sm text-[var(--muted)] transition group-hover:text-[var(--foreground)]">Ver sitio<ArrowUpRight size={18} weight="light" /></span></a>)}</div></section></main>;
}
