"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDownRight, ArrowUpRight, ArrowUp, Briefcase, EnvelopeSimple,
  GithubLogo, LinkedinLogo, List, MapPin, Moon, Phone, Sun, WhatsappLogo, X,
} from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { SiElementor, SiGit, SiHtml5, SiJavascript, SiPhp, SiSass, SiTypescript, SiWoocommerce, SiWordpress } from "react-icons/si";
import { featuredProjects, type Locale, type Project } from "@/lib/projects";
import { ProjectImage } from "@/components/project-image";

const copy = {
  es: {
    nav: ["Mi Perfil", "Proyectos", "Contacto"], eyebrow: "Front End Developer · Lima, Perú",
    title: "Diseño y desarrollo interfaces web con intención.",
    intro: "Soy Sofia Neyra. Desarrollo experiencias web claras, funcionales y cuidadas en cada detalle.",
    viewWork: "Ver proyectos", contact: "Contactar", profile: "Mi Perfil",
    profileTitle: "Una desarrolladora que disfruta convertir ideas en productos web.",
    profileText: "Trabajo con responsabilidad, curiosidad y una mirada práctica para resolver problemas. Me gusta colaborar, aprender y construir interfaces que se sientan tan bien como funcionan.",
    skills: "Herramientas y tecnologías", projects: "Proyectos seleccionados",
    projectsText: "Una selección de sitios publicados. Cada ficha conserva el contexto esencial y enlaza al resultado final.",
    allWork: "Más trabajos", email: "Escribir correo", linkedin: "LinkedIn", whatsapp: "WhatsApp", download: "Descargar CV",
    contactTitle: "¿Hablamos de tu próximo equipo?", contactText: "Estoy disponible para oportunidades en front end y equipos que valoran el detalle.",
    available: "Disponible para oportunidades", footer: "© Sofia Neyra. Todos los derechos reservados", level: "nivel", viewSite: "Ver sitio", moreProjects: "Más proyectos",
  },
  en: {
    nav: ["Profile", "Projects", "Contact"], eyebrow: "Front End Developer · Lima, Peru",
    title: "I design and build web interfaces with intention.",
    intro: "I’m Sofia Neyra. I build clear, functional web experiences with care for every detail.",
    viewWork: "View work", contact: "Get in touch", profile: "Profile",
    profileTitle: "A developer who enjoys turning ideas into web products.",
    profileText: "I work with responsibility, curiosity, and a practical perspective to solve problems. I enjoy collaboration, learning, and building interfaces that feel as good as they work.",
    skills: "Tools and technologies", projects: "Selected projects",
    projectsText: "A selection of published websites. Each page keeps the essential context and links to the final result.",
    allWork: "More work", email: "Send email", linkedin: "LinkedIn", whatsapp: "WhatsApp", download: "Download CV",
    contactTitle: "Shall we talk about your next team?", contactText: "I’m available for front-end opportunities and teams that value the details.",
    available: "Available for opportunities", footer: "Designed and developed by Sofia Neyra.", level: "level", viewSite: "View site", moreProjects: "More projects",
  },
};

type SkillCategory = "all" | "frontend" | "cms" | "styling";

const skillFilters: SkillCategory[] = ["all", "frontend", "cms", "styling"];
const skills = [
  { name: "JavaScript", Icon: SiJavascript, level: 80, category: "frontend" },
  { name: "WordPress", Icon: SiWordpress, level: 80, category: "cms" },
  { name: "TypeScript", Icon: SiTypescript, level: 75, category: "frontend" },
  { name: "CSS / Sass", Icon: SiSass, level: 75, category: "styling" },
  { name: "HTML", Icon: SiHtml5, level: 80, category: "frontend" },
  { name: "PHP", Icon: SiPhp, level: 75, category: "cms" },
  { name: "WooCommerce", Icon: SiWoocommerce, level: 70, category: "cms" },
  { name: "Elementor", Icon: SiElementor, level: 70, category: "styling" },
  { name: "Git", Icon: SiGit, level: 100, category: "frontend" },
] as const;

const fadeUp = { hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } };

function usePreferences() {
  const [locale, setLocale] = useState<Locale>("es");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  useEffect(() => {
    const savedLocale = localStorage.getItem("sofia-locale") as Locale | null;
    const savedTheme = localStorage.getItem("sofia-theme") as "light" | "dark" | null;
    queueMicrotask(() => {
      setLocale(savedLocale ?? "es");
      setTheme(savedTheme ?? (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
    });
  }, []);
  useEffect(() => { document.documentElement.dataset.theme = theme; localStorage.setItem("sofia-theme", theme); }, [theme]);
  useEffect(() => { document.documentElement.lang = locale; localStorage.setItem("sofia-locale", locale); }, [locale]);
  return { locale, setLocale, theme, setTheme };
}

function ProjectPreview({ project, index, viewSite }: { project: Project; index: number; viewSite: string }) {
  const palettes = ["from-[#dcd5e5] to-[#f4f0f7]", "from-[#cfd8dc] to-[#edf0f1]", "from-[#ddd2cb] to-[#f4eeea]", "from-[#ccd7d5] to-[#edf2f1]"];
  return <motion.article variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.5, delay: index * 0.06 }} className="group">
    <a href={project.url} target="_blank" rel="noreferrer" className="block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]">
      <div className={`relative h-[280px] overflow-hidden rounded-[2rem] border bg-gradient-to-br ${palettes[index % palettes.length]} p-5 shadow-[0_20px_45px_-30px_rgba(52,38,70,0.4)] transition duration-500 group-hover:-translate-y-1 md:h-[350px]`}>
        <div className="absolute inset-0 transition duration-500 group-hover:scale-105 group-hover:blur-sm"><div className="absolute inset-x-5 top-5 h-7 rounded-full border bg-white/55" /><div className="absolute left-5 top-16 bottom-5 w-[30%] rounded-2xl bg-white/45" /><div className="absolute right-5 top-16 h-[48%] w-[59%] rounded-2xl border border-white/45 bg-white/50" /><div className="absolute bottom-5 right-5 h-[28%] w-[59%] rounded-2xl bg-[var(--foreground)]/10" /></div>
        <ProjectImage src={project.image} alt={`Captura del proyecto ${project.title}`} priority={index < 2} className="absolute inset-0 object-cover transition duration-500 group-hover:scale-105 group-hover:blur-sm" />
        <div className="absolute inset-0 grid place-items-center bg-[#24212b]/0 opacity-0 transition duration-300 group-hover:bg-[#24212b]/40 group-hover:opacity-100"><span className="rounded-full bg-[var(--surface)] px-5 py-3 text-sm font-medium text-[var(--foreground)] shadow-lg">{viewSite}<ArrowUpRight className="ml-2 inline" size={17} weight="light" /></span></div>
      </div>
      <h3 className="px-1 pt-4 text-xl font-medium tracking-tight">{project.title}</h3>
    </a>
  </motion.article>;
}

export function PortfolioHome() {
  const { locale, setLocale, theme, setTheme } = usePreferences();
  const [skillCategory, setSkillCategory] = useState<SkillCategory>("all");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = copy[locale];
  const skillFilterLabels: Record<SkillCategory, string> = locale === "es"
    ? { all: "Todas", frontend: "Front end", cms: "CMS & e-commerce", styling: "Estilos" }
    : { all: "All", frontend: "Front end", cms: "CMS & e-commerce", styling: "Styling" };
  const visibleSkills = skillCategory === "all" ? skills : skills.filter((skill) => skill.category === skillCategory);
  const headlinePrefix = locale === "es" ? "Diseño y desarrollo interfaces web con " : "I design and build web interfaces with ";
  const headlineEmphasis = locale === "es" ? "intención." : "intention.";
  const mobileLinks = locale === "es"
    ? [{ href: "#top", label: "Inicio" }, { href: "#profile", label: "Perfil" }, { href: "#profile", label: "Habilidades" }, { href: "#projects", label: "Proyectos" }, { href: "#contact", label: "Contacto" }]
    : [{ href: "#top", label: "Home" }, { href: "#profile", label: "Profile" }, { href: "#profile", label: "Skills" }, { href: "#projects", label: "Projects" }, { href: "#contact", label: "Contact" }];
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; };
  }, [mobileMenuOpen]);
  return <main className="overflow-hidden">
    <nav className="sticky top-0 z-20 border-b bg-[color:var(--background)]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-4 py-4 md:px-8">
        <Link href="#top" className="inline-flex items-center transition-opacity hover:opacity-75" aria-label="Ir al inicio">
          <Image src="/images/logo.svg" alt="Sofia Neyra" width={57} height={43} priority className="h-auto w-[46px]" />
        </Link>
      <div className="hidden gap-6 text-sm md:flex">
        <a href="#profile" className="transition-colors duration-300 hover:text-[var(--accent)]">{t.nav[0]}</a>
        <a href="#projects" className="transition-colors duration-300 hover:text-[var(--accent)]">{t.nav[1]}</a>
        <a href="#contact" className="transition-colors duration-300 hover:text-[var(--accent)]">{t.nav[2]}</a>
      </div>
      <div className="flex items-center gap-2">
        <button onClick={() => setLocale(locale === "es" ? "en" : "es")} className="rounded-full border px-3 py-1.5 text-xs font-medium transition hover:bg-[var(--surface-muted)] active:scale-[0.98]" aria-label="Change language">{locale.toUpperCase()}</button><button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="grid size-8 place-items-center rounded-full border transition hover:bg-[var(--surface-muted)] active:scale-[0.98]" aria-label="Toggle color theme">{theme === "dark" ? <Sun size={16} weight="light" /> : <Moon size={16} weight="light" />}</button><button onClick={() => setMobileMenuOpen(true)} className="grid size-8 place-items-center rounded-full border transition hover:bg-[var(--surface-muted)] active:scale-[0.98] md:hidden" aria-label="Open navigation menu" aria-expanded={mobileMenuOpen} aria-controls="mobile-navigation"><List size={19} weight="light" /></button></div></div></nav>
    <AnimatePresence>{mobileMenuOpen && <motion.aside id="mobile-navigation" role="dialog" aria-modal="true" aria-label="Mobile navigation" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }} className="fixed inset-0 z-30 flex min-h-[100dvh] flex-col bg-[#17151c] px-5 py-5 text-[#f5f4f8] md:hidden"><div className="flex items-center justify-between"><Link href="#top" onClick={() => setMobileMenuOpen(false)} className="inline-flex items-center" aria-label="Ir al inicio"><Image src="/images/logo.svg" alt="Sofia Neyra" width={57} height={43} className="h-auto w-[46px] " /></Link><button onClick={() => setMobileMenuOpen(false)} className="grid size-10 place-items-center rounded-full border border-white/15 text-[#bcb7c6] transition hover:border-[var(--accent)] hover:text-[var(--accent)]" aria-label="Cerrar menú"><X size={22} weight="light" /></button></div><nav className="mt-12 flex flex-col gap-7" aria-label="Navegación móvil">{mobileLinks.map((link, index) => <motion.a key={`${link.href}-${index}`} href={link.href} onClick={() => setMobileMenuOpen(false)} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.08 + index * 0.05 }} className="text-lg font-medium text-[#bcb7c6] transition hover:translate-x-1 hover:text-[var(--accent)]">{link.label}</motion.a>)}</nav><div className="mt-auto border-t border-white/10 pt-6"><div className="flex gap-5"><a href="https://github.com/sofianeyra" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-[#bcb7c6] transition hover:text-[var(--accent)]"><GithubLogo size={32} weight="light" /></a><a href="https://www.linkedin.com/in/sofianeyra/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-[#bcb7c6] transition hover:text-[var(--accent)]"><LinkedinLogo size={32} weight="light" /></a><a href="https://wa.me/51919707903" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="text-[#bcb7c6] transition hover:text-[var(--accent)]"><WhatsappLogo size={32} weight="light" /></a></div></div></motion.aside>}</AnimatePresence>
    <section id="top" className="relative mx-auto grid min-h-[calc(100dvh-65px)] max-w-[1400px] items-center gap-10 px-4 py-10 md:grid-cols-[1.08fr_.92fr] md:px-8 md:py-12"><motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }} className="max-w-3xl"><motion.p variants={fadeUp} className="font-mono text-xs tracking-[0.16em] text-[var(--accent)]">{t.eyebrow}</motion.p><motion.h1 variants={fadeUp} className="mt-6 max-w-2xl text-[43px] font-medium leading-[0.96] tracking-[-0.055em] md:text-[67px]">{headlinePrefix}<span className="text-gradient-flow inline-block whitespace-nowrap">{headlineEmphasis}</span></motion.h1><motion.p variants={fadeUp} className="mt-7 max-w-xl text-base leading-relaxed text-[var(--muted)] md:text-lg">{t.intro}</motion.p><motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-3"><a href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-[var(--foreground)] px-5 py-3 text-sm font-medium text-[var(--background)] transition hover:-translate-y-0.5 active:translate-y-px">{t.viewWork}<ArrowUpRight className="transition-transform duration-300 group-hover:rotate-45" size={18} weight="light" /></a><a href="#contact" className="group inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-medium transition hover:bg-[var(--surface-muted)] active:translate-y-px">{t.contact}<ArrowUpRight className="transition-transform duration-300 group-hover:rotate-45" size={18} weight="light" /></a></motion.div></motion.div>
      <div className="relative mx-auto grid aspect-square w-full max-w-sm place-items-center md:max-w-md md:justify-self-end"><div aria-hidden="true" className="absolute inset-1 rounded-full border border-dashed border-[var(--accent)]/70" /><motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }} className="relative size-[82%] overflow-hidden rounded-full border-[10px] border-[var(--surface)] shadow-[0_20px_45px_-25px_rgba(52,38,70,0.55)]"><Image src="/images/sofia-neyra.jpg" alt="Sofia Neyra" fill priority sizes="(min-width: 768px) 420px, 78vw" className="object-cover object-center grayscale-[0.1]" /></motion.div><div aria-hidden="true" className="absolute bottom-[8%] right-[2%] size-9 rounded-full bg-[var(--accent)]/70" /></div>
    </section>
    <section id="profile" className="border-y bg-[var(--surface)]"><div className="mx-auto max-w-[1400px] px-4 py-20 md:px-8 md:py-28"><div className="grid gap-12 md:grid-cols-[.75fr_1.25fr]"><div><p className="font-mono text-xs tracking-[0.16em] text-[var(--accent)]">{t.profile}</p></div><div><h2 className="max-w-2xl text-3xl font-medium tracking-[-0.04em] md:text-5xl">{t.profileTitle}</h2><p className="mt-7 max-w-xl leading-relaxed text-[var(--muted)]">{t.profileText}</p></div></div><div className="mt-14 border-t pt-5"><div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between"><p className="font-mono text-xs tracking-[0.16em] text-[var(--muted)]">{t.skills}</p><div className="flex flex-wrap gap-2" role="group" aria-label={t.skills}>{skillFilters.map((filter) => <button key={filter} onClick={() => setSkillCategory(filter)} className={`rounded-full border px-3.5 py-2 text-xs font-medium transition duration-300 active:scale-[0.98] ${skillCategory === filter ? "border-[var(--accent)] bg-[var(--accent)] text-[#282631]" : "hover:border-[var(--accent)] hover:text-[var(--accent)]"}`}>{skillFilterLabels[filter]}</button>)}</div></div><motion.div layout className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">{visibleSkills.map((skill, index) => <motion.div layout key={skill.name} initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.35, delay: index * 0.04 }} className="group relative min-h-44 overflow-hidden rounded-2xl border bg-[var(--background)] p-5 transition duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-[0_16px_30px_-24px_rgba(190,129,225,0.8)]"><div className="flex h-full flex-col items-center text-center"><skill.Icon size={38} aria-hidden="true" className="text-[var(--accent)] transition-transform duration-300 group-hover:scale-110" /><div className="mt-5 flex items-baseline gap-2"><span className="text-sm font-semibold">{skill.name}</span><span className="font-mono text-[10px] text-[var(--muted)]">{skill.level}%</span></div><div className="mt-auto w-full pt-5"><div className="h-1.5 overflow-hidden rounded-full bg-[var(--surface-muted)]"><motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.6, delay: index * 0.05 }} style={{ width: `${skill.level}%`, transformOrigin: "left" }} className="h-full rounded-full bg-[var(--accent)]" /></div></div></div></motion.div>)}</motion.div></div></div></section>
    <section id="projects" className="mx-auto max-w-[1400px] px-4 py-20 md:px-8 md:py-28"><div className="grid gap-8 md:grid-cols-[.75fr_1.25fr]"><p className="font-mono text-xs tracking-[0.16em] text-[var(--accent)]">{t.projects}</p><div><h2 className="text-3xl font-medium tracking-[-0.04em] md:text-5xl">{t.projects}</h2><p className="mt-4 max-w-xl text-[var(--muted)]">{t.projectsText}</p></div></div><div className="mt-14 grid gap-x-6 gap-y-12 md:grid-cols-2">{featuredProjects.map((project, index) => <ProjectPreview project={project} index={index} viewSite={t.viewSite} key={project.slug} />)}</div><div className="mt-16 border-t pt-8"><Link href="/projects" className="inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-medium transition hover:bg-[var(--surface-muted)] active:translate-y-px">{t.moreProjects}<ArrowUpRight size={18} weight="light" /></Link></div></section>
    <section id="contact" className="border-t border-white/10 bg-[#17151c] text-[#f5f4f8]"><div className="mx-auto grid max-w-[1400px] gap-14 px-4 py-20 md:grid-cols-[1.2fr_.8fr] md:px-8 md:py-28"><div><p className="font-mono text-xs font-medium tracking-[0.2em] text-[var(--accent)]">CONTACTO</p><h2 className="mt-6 max-w-3xl text-5xl font-medium leading-[0.95] tracking-[-0.055em] md:text-7xl">{locale === "es" ? <>Construyamos algo <span className="text-[var(--accent)]">con intención.</span></> : <>Let’s build something <span className="text-[var(--accent)]">with intention.</span></>}</h2><p className="mt-8 max-w-xl text-base leading-relaxed text-[#bcb7c6] md:text-lg">{t.contactText}</p><div className="mt-10 flex flex-wrap gap-3"><a href="https://wa.me/51919707903" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-3 rounded-full bg-[#f5f4f8] px-6 py-3.5 text-sm font-semibold text-[#282631] transition hover:-translate-y-1 active:translate-y-px">{locale === "es" ? "Iniciar conversación" : "Start a conversation"}<ArrowUpRight className="transition-transform duration-300 group-hover:rotate-45" size={18} weight="light" /></a><a href="/sofia-neyra-cv.pdf" download className="group inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold transition hover:border-[var(--accent)] hover:text-[var(--accent)] active:translate-y-px">{locale === "es" ? "Descargar CV" : "Download resume"}<ArrowDownRight className="transition-transform duration-300 group-hover:translate-y-0.5" size={18} weight="light" /></a></div></div><div className="flex flex-col justify-between gap-12"><div className="space-y-4"><a href="mailto:sofianeyracano@gmail.com" className="group flex items-center gap-5"><span className="grid size-14 place-items-center rounded-2xl border border-white/15 text-[var(--accent)] transition group-hover:border-[var(--accent)]"><EnvelopeSimple size={25} weight="light" /></span><span><span className="block font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[#a7a1b0]">{locale === "es" ? "Correo" : "Email"}</span><span className="mt-1 block font-medium">sofianeyracano@gmail.com</span></span></a><a href="tel:+51919707903" className="group flex items-center gap-5"><span className="grid size-14 place-items-center rounded-2xl border border-white/15 text-[var(--accent)] transition group-hover:border-[var(--accent)]"><Phone size={25} weight="light" /></span><span><span className="block font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[#a7a1b0]">{locale === "es" ? "Teléfono" : "Phone"}</span><span className="mt-1 block font-medium">+51 919 707 903</span></span></a><div className="flex items-center gap-5"><span className="grid size-14 place-items-center rounded-2xl border border-white/15 text-[var(--accent)]"><MapPin size={25} weight="light" /></span><span><span className="block font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[#a7a1b0]">{locale === "es" ? "Ubicación" : "Location"}</span><span className="mt-1 block font-medium">Lima, Peru</span></span></div></div><div><p className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-[#a7a1b0]">{locale === "es" ? "Sígueme" : "Follow me"}</p><div className="mt-4 flex gap-3"><a href="https://www.linkedin.com/in/sofianeyra/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid size-12 place-items-center rounded-2xl border border-white/15 text-[#f5f4f8] transition hover:-translate-y-1 hover:border-[var(--accent)] hover:text-[var(--accent)]"><LinkedinLogo size={22} weight="light" /></a><a href="https://github.com/sofianeyra" target="_blank" rel="noreferrer" aria-label="GitHub" className="grid size-12 place-items-center rounded-2xl border border-white/15 text-[#f5f4f8] transition hover:-translate-y-1 hover:border-[var(--accent)] hover:text-[var(--accent)]"><GithubLogo size={22} weight="light" /></a><a href="https://wa.me/51919707903" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="grid size-12 place-items-center rounded-2xl border border-white/15 text-[#f5f4f8] transition hover:-translate-y-1 hover:border-[var(--accent)] hover:text-[var(--accent)]"><WhatsappLogo size={22} weight="light" /></a></div></div></div></div></section>
    <footer className="border-t border-white/10 bg-[#17151c]"><div className="mx-auto flex max-w-[1400px] flex-col gap-4 px-4 py-6 text-sm text-[#a7a1b0] md:flex-row md:items-center md:justify-between md:px-8"><p>{t.footer}</p><span className="inline-flex items-center gap-1.5"><Briefcase size={15} weight="light" />{t.available}</span></div></footer>
    <a href="#top" aria-label="Volver al inicio" className="fixed bottom-5 right-5 z-10 grid size-12 place-items-center rounded-full bg-[var(--accent)] text-[#282631] shadow-[0_14px_30px_-16px_rgba(190,129,225,0.95)] transition duration-300 hover:-translate-y-1 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)] active:translate-y-px"><ArrowUp size={21} weight="bold" /></a>
  </main>;
}
