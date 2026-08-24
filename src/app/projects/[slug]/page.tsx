import { notFound } from "next/navigation";
import { ProjectDetail } from "@/components/project-detail";
import { projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.filter((project) => project.featured).map(({ slug }) => ({ slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug && item.featured);
  if (!project) notFound();
  return <ProjectDetail project={project} />;
}
