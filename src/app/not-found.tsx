import Link from "next/link";

export default function NotFound() {
  return <main className="grid min-h-[100dvh] place-items-center px-4"><div><p className="font-mono text-xs tracking-[0.16em] text-[var(--accent)]">404</p><h1 className="mt-4 text-4xl font-medium tracking-tight">Project not found.</h1><Link href="/" className="mt-7 inline-block rounded-full border px-5 py-3 text-sm">Back to portfolio</Link></div></main>;
}
