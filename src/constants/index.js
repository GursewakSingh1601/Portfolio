import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Prompt Engineer",
    icon: mobile,
  },
  {
    title: "Web-3 Dapp",
    icon: backend,
  },
  {
    title: "AI/DL (ANN)",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Omegel",
    icon: starbucks,
    iconBg: "#383E56",
    date: "November 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with teams named TeamNull including designers, and other developers to create high-quality product.",
      "use for vedio chatting and vedio streming both at same time with two unknown stranger",
    ],
  },
  {
    title: "Prompt Engineer",
    company_name: "DAN Project",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - March 2023",
    points: [
      "DAN, short for Do Anything Now, ",
      "A specific prompt which will manipulate large language model and manilupate its chat to conwey message in unfiltered form",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "AI/DL (ANN)",
    company_name: "AI bot in punjabi",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining LLM large language model using R and python other related technologies.",
      "To train LLM the amount of words and line are taken from news..etc",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "DAPP",
    company_name: "Evault",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "oct 2023 - Present",
    points: [
      "Developing and maintaining web applications using Web3.js and other related technologies used in web 3 and Blockchain.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Mr.singh proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Mr.singh does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Mr.singh optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Youtube Command-line",
    description:
      "Listen, transcribe, and search: It captures audio from your mic, converts it to text, searches YouTube for a matching song, and plays the audio.",
    tags: [
      {
        name: "Bash",
        color: "blue-text-gradient",
      },
      {
        name: "VLC",
        color: "green-text-gradient",
      },
      {
        name: "Youtube-dl",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Web scraper",
    description:
      "Web scrapers are like automated data miners, extracting specific information from websites to make it usable for other purposes.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Bash",
        color: "green-text-gradient",
      },
      {
        name: "c",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Jailbreaking Prompt",
    description:
      "A specific prompt which will manipulate large language model and manilupate its chat to convey message in unfiltered form and it break all the restriction of the ai",
    tags: [
      {
        name: "AI",
        color: "blue-text-gradient",
      },
      {
        name: "Bard",
        color: "green-text-gradient",
      },
      {
        name: "Prompt Engineering",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
