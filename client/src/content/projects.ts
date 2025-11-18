import devImage from "@assets/generated_images/Developer_coding_visualization_387e85f4.png";
import designImage from "@assets/generated_images/Graphic_design_workspace_a6e46fef.png";

export type ProjectCategory = "dev" | "design" | "support";

export type Project = {
  id: number;
  title: string;
  description: string;
  category: ProjectCategory;
  tags: string[];
  image: string;
  link?: string;
  github?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Front Experience",
    description: "Interface React animée avec panier en temps réel et personnalisation produit côté client.",
    category: "dev",
    tags: ["React", "TypeScript", "Framer Motion"],
    image: devImage,
    link: "#",
    github: "#",
  },
  {
    id: 2,
    title: "Brand Identity Design",
    description: "Identité visuelle complète pour une startup créative : logo, palette et système typographique.",
    category: "design",
    tags: ["Illustrator", "Branding", "Logo Design"],
    image: designImage,
    link: "#",
    github: "#",
  },
  {
    id: 3,
    title: "Landing Page Interactive",
    description: "Page d'atterrissage 100% front-end avec storytelling, interactions et intégration du logo.",
    category: "dev",
    tags: ["Vite", "Animations", "Responsive"],
    image: devImage,
    link: "#",
    github: "#",
  },
  {
    id: 4,
    title: "Mobile App UI/UX",
    description: "Design complet d'une application de fitness avec prototypes haute fidélité et motion UI.",
    category: "design",
    tags: ["Figma", "UI/UX", "Mobile"],
    image: designImage,
    link: "#",
    github: "#",
  },
  {
    id: 5,
    title: "Dashboard Créateur",
    description: "Dashboard front-end pour créateurs de contenu avec graphiques live et mode sombre.",
    category: "dev",
    tags: ["React", "Recharts", "UI System"],
    image: devImage,
    link: "#",
    github: "#",
  },
  {
    id: 6,
    title: "Support Digital & Coaching",
    description: "Mise en ligne, optimisation SEO léger et formation client pour une marque lifestyle.",
    category: "support",
    tags: ["CMS", "No-Code", "Coaching"],
    image: designImage,
    link: "#",
    github: "#",
  },
];
