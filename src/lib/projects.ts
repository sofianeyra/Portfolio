export type Locale = "es" | "en";

export type Project = {
  slug: string;
  title: string;
  url: string;
  image?: string;
  featured: boolean;
  description: Record<Locale, string>;
  tags: string[];
};

export const projects: Project[] = [
  { slug: "imabri-central", title: "Imabri+Central", url: "https://imabricentral.com/", image: "/images/projects/imabri-central.png", featured: true, description: { es: "Sitio web publicado.", en: "Published website." }, tags: ["Web"] },
  { slug: "vextrom", title: "Vextrom", url: "https://vextromcorporation.com/", image: "/images/projects/vextrom.png", featured: true, description: { es: "Sitio web publicado.", en: "Published website." }, tags: ["Web"] },
  { slug: "handh", title: "Handh", url: "https://handh.co.uk/", image: "/images/projects/handh.png", featured: true, description: { es: "Sitio web publicado.", en: "Published website." }, tags: ["Web"] },
  { slug: "geeks-on-wheels", title: "Geeks on Wheels", url: "https://geeks-on-wheels.com/", image: "/images/projects/geeks-on-wheels.png", featured: true, description: { es: "Sitio web publicado.", en: "Published website." }, tags: ["Web"] },
  { slug: "roberts-law", title: "Roberts Law", url: "https://robertslaw.co.uk/", image: "/images/projects/roberts-law.png", featured: true, description: { es: "Sitio web publicado.", en: "Published website." }, tags: ["Web"] },
  { slug: "internex-capital", title: "Internex Capital", url: "https://internexcapital.com/", image: "/images/projects/internex.png", featured: true, description: { es: "Sitio web publicado.", en: "Published website." }, tags: ["Web"] },
  { slug: "tokenovate", title: "Tokenovate", url: "https://www.tokenovate.com/", image: "/images/projects/tokenovate.png", featured: false, description: { es: "Sitio web publicado.", en: "Published website." }, tags: ["Web"] },
  { slug: "caravedo", title: "Caravedo", url: "https://destilerialacaravedo.com/", image: "/images/projects/la-caravedo.png", featured: false, description: { es: "Sitio web publicado.", en: "Published website." }, tags: ["Web"] },
  { slug: "e-cloud", title: "E-Cloud", url: "https://ecloud.pe/", image: "/images/projects/ecloud.png", featured: false, description: { es: "Sitio web publicado.", en: "Published website." }, tags: ["Web"] },
  { slug: "amaca-eco-station", title: "Amaca Eco Station", url: "https://amacaecostation.com/", image: "/images/projects/amaca-ecostation.png", featured: false, description: { es: "Sitio web publicado.", en: "Published website." }, tags: ["Web"] },
  { slug: "puro-gourmet", title: "PuroGourmet", url: "https://purogourmet.pe/", image: "/images/projects/puro-gourmet.png", featured: false, description: { es: "Sitio web publicado.", en: "Published website." }, tags: ["Web"] },
  { slug: "bronzage", title: "Bronzage", url: "https://bikinisbronzage.com/", image: "/images/projects/bronzage.png", featured: false, description: { es: "Sitio web publicado.", en: "Published website." }, tags: ["Web"] },
  { slug: "vanguardia", title: "Vanguardia", url: "https://vanguardiaqhse.com/", image: "/images/projects/vanguardia.png", featured: false, description: { es: "Sitio web publicado.", en: "Published website." }, tags: ["Web"] },
];

export const featuredProjects = projects.filter((project) => project.featured);
