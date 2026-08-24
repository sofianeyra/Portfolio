export type Locale = "es" | "en";

export type Project = {
  slug: string;
  title: string;
  url: string;
  featured: boolean;
  description: Record<Locale, string>;
  tags: string[];
};

export const projects: Project[] = [
  { slug: "imabri-central", title: "Imabri+Central", url: "https://imabricentral.com/", featured: true, description: { es: "Sitio web publicado.", en: "Published website." }, tags: ["Web"] },
  { slug: "vextrom", title: "Vextrom", url: "https://vextromcorporation.com/", featured: true, description: { es: "Sitio web publicado.", en: "Published website." }, tags: ["Web"] },
  { slug: "handh", title: "Handh", url: "https://handh.co.uk/", featured: true, description: { es: "Sitio web publicado.", en: "Published website." }, tags: ["Web"] },
  { slug: "geeks-on-wheels", title: "Geeks on Wheels", url: "https://geeks-on-wheels.com/", featured: true, description: { es: "Sitio web publicado.", en: "Published website." }, tags: ["Web"] },
  { slug: "roberts-law", title: "Roberts Law", url: "https://robertslaw.co.uk/", featured: true, description: { es: "Sitio web publicado.", en: "Published website." }, tags: ["Web"] },
  { slug: "internex-capital", title: "Internex Capital", url: "https://internexcapital.com/", featured: true, description: { es: "Sitio web publicado.", en: "Published website." }, tags: ["Web"] },
  { slug: "tokenovate", title: "Tokenovate", url: "https://www.tokenovate.com/", featured: false, description: { es: "Sitio web publicado.", en: "Published website." }, tags: ["Web"] },
];

export const featuredProjects = projects.filter((project) => project.featured);
