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
    id: 2,
    title: "Personal Portfolio",
    description: `This portfolio website, built using React.js and Tailwind CSS, showcases a variety of projects and designs. The site leverages React.js to create a dynamic and interactive user experience, while Tailwind CSS is used to craft a sleek, responsive design with a utility-first approach. It features a gallery of projects.`,
    img: "/images/portfolio.png",
    type: "Website",
    github: "https://github.com/eghosajoshua/eghosa-portfolio",
    live: "https://www.eghosajoshua.com",
    technologies: ["ReactJs", "Typescript", "TailwindCSS"],
  },
  {
    id: 3,
    title: "Ai Text to Voice",
    description: `Ai Text to Voice is an innovative web application designed to convert text into natural-sounding speech using the powerful 11 Labs API. Built with Vite and React.js, this application offers a seamless and efficient user experience. The intuitive interface allows users to easily input text and generate high-quality voice outputs, making it an ideal tool for various applications such as creating voiceovers, accessibility solutions, and more. `,
    img: "/images/aitexttovoice.png",
    type: "Website",
    github: "https://github.com/eghosajoshua/Ai-text-to-voice",
    live: "https://ai-text-to-voice.vercel.app/",
    technologies: ["ReactJs", "Javascript", "TailwindCSS"],
  },
];
