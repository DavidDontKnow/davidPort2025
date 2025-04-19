import { Project } from "../types/projectTypes";
import projectOne from "../assets/images/APlusQuiz.png";
import projectFour from "../assets/images/DaveedDev.png";

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "A+ Quiz",
    description: "A quiz application for A+ certification preparation.",
    technologies: ["React", "Typescript", "Vite", "Tailwind CSS"],
    image: projectOne,
    link: "https://aplusquiz.daveed.dev/",
    repo: "https://github.com/DavidDontKnow/viteComptiaQuiz",
  },
  {
    id: 2,
    title: "Upcoming Project",
    description: "An upcoming project description.",
    technologies: ["React", "Node.js", "MongoDB"],
    image: "https://placehold.co/600x400",
    link: "https://example.com/project2",
    repo: "https://github.com",
  },
  {
    id: 3,
    title: "Upcoming Project",
    description: "An upcoming project description.",
    technologies: ["React", "Node.js", "MongoDB"],
    image: "https://placehold.co/600x400",
    link: "https://example.com/project3",
    repo: "https://github.com",
  },
  {
    id: 4,
    title: "David's Portfolio",
    description: "This is a look into this portfolio.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    image: projectFour,
    link: "https://daveed.dev",
    repo: "https://github.com",
  },
];
