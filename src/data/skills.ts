import { SiNextdotjs, SiFlask } from "react-icons/si";
import {
  FramerMotionIcon,
  ReactRouterDomIcon,
  VitePwaIcon,
} from "@/components/icons";
import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";

// Languages
import HtmlSvg from "@/public/icons/html.svg";
import CsssSvg from "@/public/icons/css.svg";
import JavascriptSvg from "@/public/icons/javascript.svg";
import TypescriptSvg from "@/public/icons/typescript.svg";
import PythonSvg from "@/public/icons/python.svg";

// Libraries
import ReactjsSvg from "@/public/icons/reactjs.svg";
import TailwindcssSvg from "@/public/icons/tailwindcss.svg";
import MuiSvg from "@/public/icons/mui.svg";
import ViteSvg from "@/public/icons/vite.svg";

// Backend
import NodejsSvg from "@/public/icons/nodejs.svg";

// Database and ORMs
import MongoDBSvg from "@/public/icons/Mysql.svg";
import PostgressSvg from "@/public/icons/postgresql.svg";

// Tools and Tech
import GitSvg from "@/public/icons/git.svg";
import AwsSvg from "@/public/icons/aws.svg";
import PostmanSvg from "@/public/icons/postman.svg";

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Languages",
    skills: [
      { name: "HTML", icon: HtmlSvg },
      { name: "CSS", icon: CsssSvg },
      { name: "Javascript", icon: JavascriptSvg },
      { name: "Typescript", icon: TypescriptSvg },
      { name: "Python", icon: PythonSvg },
    ],
  },
  {
    sectionName: "Libraries and Frameworks",
    skills: [
      { name: "Reactjs", icon: ReactjsSvg },
      { name: "Nextjs", icon: SiNextdotjs },
      { name: "React Router Dom", icon: ReactRouterDomIcon },
      { name: "Tailwindcss", icon: TailwindcssSvg },
      { name: "MUI", icon: MuiSvg },
      { name: "Framer motion", icon: FramerMotionIcon },
      { name: "Vite", icon: ViteSvg },
      { name: "Vite PWA", icon: VitePwaIcon },
    ],
  },
  {
    sectionName: "Backend",
    skills: [
      { name: "Nodejs", icon: NodejsSvg },
      { name: "Flask", icon: SiFlask },
    ],
  },
  {
    sectionName: "Databases and ORMs",
    skills: [
      { name: "Mysql", icon: MongoDBSvg },
      { name: "Postgress", icon: PostgressSvg },
    ],
  },
  {
    sectionName: "Tools and Technologies",
    skills: [
      { name: "Git", icon: GitSvg },
      { name: "AWS", icon: AwsSvg },
      { name: "Postman", icon: PostmanSvg },
    ],
  },
];
