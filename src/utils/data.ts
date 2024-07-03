export const data: {
  id: number;
  title: string;
  description: string;
  img: string;
  github: string;
  type: string;
  live: string;
  technologies: string[];
}[] = [
  {
    id: 1,
    title: "CodMath",
    description: "A portfolio website built with React.",
    img: "/images/aiprompts.jpg",
    type: "Mobile App",
    github: "https://github.com/kayla-tech/portfolio",
    live: "https://kayla-tech.github.io/portfolio/",
    technologies: ["React", "Typescript", "TailwindCSS"],
  },
  {
    id: 2,
    title: "AiPrompts",
    description:
      "AiPrompts is a collaborative platform designed for sharing insightful AI prompts among users. Built with Next.js, the website offers a seamless and interactive user experience. Featuring Google authentication for secure login and MongoDB for robust data storage, AiPrompts empowers users to discover and exchange innovative AI ideas effortlessly",
    img: "/images/aiprompts.png",
    type: "website",
    github:
      "https://github.com/eghosajoshua/AiPrompts-create-and-share-ai-prompts",
    live: "https://aiprompts-eight.vercel.app/",
    technologies: ["NextJs", "Typescript", "TailwindCSS"],
  },
  {
    id: 3,
    title: "Personal Portfolio",
    description: `This portfolio website, built using React.js and Tailwind CSS, showcases a variety of projects and designs. The site leverages React.js to create a dynamic and interactive user experience, while Tailwind CSS is used to craft a sleek, responsive design with a utility-first approach. It features a gallery of projects.`,
    img: "/images/portfolio.png",
    type: "Website",
    github: "https://github.com/eghosajoshua/eghosa-portfolio",
    live: "https://www.eghosajoshua.com",
    technologies: ["ReactJs", "Typescript", "TailwindCSS"],
  },
];
