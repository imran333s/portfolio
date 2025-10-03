import {
  web,
  frontend,
  design,
  backend,
  fullStack,
  cloud,
  html,
  css,
  javascript,
  reactjs,
  formik,
  redux,
  mui,
  tailwind,
  scss,
  nodejs,
  expressjs,
  mongodb,
  mongoose,
  git,
  github,
  EC2,
  S3,
  vscode,
  ChatGPT,
  chrome,
  mongodbCompass,
  postman,
  ubuntu,
  Impress,
  e_commerce,
  proConnectup,
  portfolio,
} from "../assets";

const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

const services = [
  { title: "Web Developer", icon: web },
  { title: "React Developer", icon: frontend },
  { title: "Backend Developer", icon: backend },
  { title: "Full Stack Developer", icon: fullStack },
];

const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "React JS", icon: reactjs },
  { name: "Node JS", icon: nodejs },
  { name: "Express JS", icon: expressjs },
  { name: "MongoDB", icon: mongodb },
  { name: "Mongoose", icon: mongoose },
  { name: "Git", icon: git },
  { name: "GitHub", icon: github },
];

const tools = [
  { name: "VS Code", icon: vscode },
  { name: "ChatGPT", icon: ChatGPT },
  { name: "Chrome", icon: chrome },
  { name: "Mongodb Compass", icon: mongodbCompass },
  { name: "Postman", icon: postman },
];

const experiences = [
  {
    title: "Junior Software Developer",
    company_name: "Shiwansh Solutions",
    icon: frontend,
    iconBg: "#383E56",
    date: "August 2024 - Present",
    points: [
      "Hands-on expertise in React.js for building responsive and dynamic user interfaces.",
      "Developed and maintained scalable RESTful APIs with Node.js and Express.js.",
      "Worked with MongoDB for designing and optimizing database schemas.",
      "Implemented reusable UI components to improve development speed and maintainability.",
      "Optimized application performance and ensured cross-browser compatibility.",
      "Contributed to deployment and hosting workflows using Netlify and other cloud platforms.",
      "Actively collaborated with senior developers to learn and implement industry best practices.",
      "Continuously improving skills in MERN stack and exploring modern libraries & tools for full-stack development.",
    ],
  },
  
];

const testimonials = [
 
];

// const projects = [
//   {
//     name: "Blog",
//     description:
//       "Admin-exclusive blog platform where the admin can create, edit, and delete posts. Users can browse posts by categories like Politics, Sports, Business, and Entertainment.",
//     tags: [
//       { name: "MERN", color: "blue-text-gradient" },
//       { name: "Redux", color: "green-text-gradient" },
//       { name: "Material UI", color: "pink-text-gradient" },
//     ],
//     image: e_commerce, // ✅ Use local image
//     alt: "E-Commerce",
//     source_code_link: "https://github.com/imran333s/my-blog",
//     live_link: "https://my-blog-s.netlify.app/",
//   },
//   // {
//   //   name: "Pro Connect Up",
//   //   description:
//   //     "A web application that enables users to find people with the same interest in their career, find a person for freelance work, and search for jobs.",
//   //   tags: [
//   //     { name: "MERN", color: "blue-text-gradient" },
//   //     { name: "restapi", color: "green-text-gradient" },
//   //     { name: "tailwind", color: "pink-text-gradient" },
//   //   ],
//   //   image: proConnectup, // ✅ Use local image
//   //   alt: "Pro Connect Up",
//   //   source_code_link: "https://github.com/Rajeshesh/ProConnectUp",
//   //   live_link: "https://github.com/Rajeshesh/ProConnectUp",
//   // },
//   {
//     name: "My Portfolio",
//     description:
//       "My portfolio features a collection of projects that reflect my commitment to delivering top-tier web solutions.",
//     tags: [
//       { name: "react.js", color: "blue-text-gradient" },
//       { name: "tailwind CSS", color: "green-text-gradient" },
//       { name: "framer-motion", color: "pink-text-gradient" },
//     ],
//     image: portfolio, // ✅ Use local image
//     alt: "Portfolio",
//     source_code_link: "https://github.com/imran333s/portfolio",
//     live_link: "https://imran-portfolio-s.netlify.app/",
//   },
// ];

export {
  navLinks,
  services,
  technologies,
  experiences,
  testimonials,
  // projects,
  tools,
};
