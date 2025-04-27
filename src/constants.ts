import type { Project } from "@/types";

export const PROJECT_FILE_NAMES = [
  "catto.webp",
  "delvfox.webp",
  "mega-foxy.webp",
  "nix-services.webp",
  "shop.webp",
];

export const FILTERS = [
  "Featured",
  "Open source",
  "Demo available",
  "Show NSFW",
];

export const TAGS = [
  "JavaScript",
  "TypeScript",
  "MySQL",
  "Next.js",
  "NextAuth.js",
  "Node.js",
  "Prisma",
  "Redis",
  "Sellix",
  "ShadCN/UI",
  "TailwindCSS",
];

export const PROJECTS: Project[] = [
  {
    title: "Delvfox",
    description:
      "DelvFox is a dynamic platform dedicated to uncovering vulnerabilities in various services and developing tools that exploit these weaknesses.",
    imageURL: "project-images/delvfox.webp",
    featured: true,
    demoLink: null,
    sourceLink: null,
    tags: [
      "Next.js",
      "TailwindCSS",
      "JavaScript",
      "MySQL",
      "Prisma",
      "NextAuth.js",
    ],
  },
  {
    title: "VirtualizorJS",
    description:
      "VirtualizorJS simplifies the management of Virtualizor servers with a streamlined and developer-friendly API for Node.js. Perform actions such as creating, starting, stopping, and restarting virtual servers effortlessly",
    imageURL: "project-images/virtualizor-js.webp",
    featured: true,
    demoLink: null,
    sourceLink: "https://github.com/kkMihai/virtualizorjs",
    tags: ["JavaScript", "Node.js"],
  },
  {
    title: "MegaFoxy",
    description:
      "MegaFoxy is a landing page for a product from delvfox with a Sellix embed integration.",
    imageURL: "project-images/mega-foxy.webp",
    featured: false,
    demoLink: null,
    sourceLink: null,
    tags: ["JavaScript", "Next.js", "TailwindCSS", "ShadCN/UI"],
  },
  {
    title: "Catto.to",
    description:
      "Catto.to is a shop with a variety of products, from accounts to upgrades for the cheapest prices.",
    imageURL: "project-images/catto.webp",
    featured: false,
    demoLink: null,
    sourceLink: null,
    tags: ["JavaScript", "Next.js", "TailwindCSS", "ShadCN/UI"],
  },
  {
    title: "Delvfox Shop",
    description:
      "Delvfox Shop is a shop for the main delvfox website, its a simple shop with a few products integrated with sellix.",
    imageURL: "project-images/shop.webp",
    featured: false,
    demoLink: null,
    sourceLink: null,
    tags: ["JavaScript", "Next.js", "TailwindCSS"],
  },
  {
    title: "NixServices",
    description:
      "NixServices is a platform that offers a wide range of services, including web development, web design, and digital marketing, i made it a long time ago for a client and i m planning a redesign soon.",
    imageURL: "project-images/nix-services.webp",
    featured: false,
    demoLink: null,
    sourceLink: null,
    tags: ["JavaScript", "Next.js", "TailwindCSS"],
  },
];
