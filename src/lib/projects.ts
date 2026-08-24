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
  { slug: "cirugia-martinez", title: "Cirugía Martínez", url: "https://www.cirugiaplasticamartinez.com.pe/", featured: false, description: { es: "Sitio web publicado.", en: "Published website." }, tags: ["Web"] },
  { slug: "ap-bioprocess", title: "APBioprocess", url: "https://ap-bioprocess.com/", featured: false, description: { es: "Sitio web publicado.", en: "Published website." }, tags: ["Web"] },
  { slug: "caravedo", title: "Caravedo", url: "https://destilerialacaravedo.com/", featured: false, description: { es: "Sitio web publicado.", en: "Published website." }, tags: ["Web"] },
  { slug: "e-cloud", title: "E-Cloud", url: "https://ecloud.pe/", featured: false, description: { es: "Sitio web publicado.", en: "Published website." }, tags: ["Web"] },
  { slug: "amaca-eco-station", title: "Amaca Eco Station", url: "https://amacaecostation.com/", featured: false, description: { es: "Sitio web publicado.", en: "Published website." }, tags: ["Web"] },
  { slug: "conector", title: "Conector", url: "https://conectorperu.com/", featured: false, description: { es: "Sitio web publicado.", en: "Published website." }, tags: ["Web"] },
  { slug: "puro-gourmet", title: "PuroGourmet", url: "https://purogourmet.pe/", featured: false, description: { es: "Sitio web publicado.", en: "Published website." }, tags: ["Web"] },
  { slug: "pronte", title: "Pronte", url: "https://www.pronte.com.pe/", featured: false, description: { es: "Sitio web publicado.", en: "Published website." }, tags: ["Web"] },
  { slug: "bronzage", title: "Bronzage", url: "https://bikinisbronzage.com/", featured: false, description: { es: "Sitio web publicado.", en: "Published website." }, tags: ["Web"] },
  { slug: "vanguardia", title: "Vanguardia", url: "https://vanguardiaqhse.com/", featured: false, description: { es: "Sitio web publicado.", en: "Published website." }, tags: ["Web"] },
];

export const featuredProjects = projects.filter((project) => project.featured);
