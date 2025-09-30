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
    title: "Frontend Development",
    company_name: "React.js, Redux, Formik with Yup",
    icon: frontend,
    iconBg: "#383E56",
    date: "July 2024 - Present",
    points: [
      "Advanced skills in React.js for building dynamic web applications.",
      "Expertise in Redux for efficient state management.",
      "Experience with Formik and Yup for seamless form handling and validation.",
      "Applied Flux architecture to enhance data flow and maintainability.",
      "Implemented advanced architectural patterns for scalable applications.",
      "These are just a few of the many libraries",
    ],
  },
  // {
  //   title: "UI Designing",
  //   company_name: "Material UI, Framer motion, Tailwind CSS, SCSS",
  //   icon: design,
  //   iconBg: "white",
  //   date: "Sep 2022 - Present",
  //   points: [
  //     "Proficient in Material UI for creating modern and responsive user interfaces.",
  //     "Expertise in Framer Motion for crafting smooth and interactive animations.",
  //     "Skillful use of Tailwind CSS to streamline and enhance UI styling.",
  //     "Leveraged SCSS to seamlessly integrate Tailwind CSS utility classes, optimizing code and enabling custom class creation when required.",
  //     "Ability to create responsive layouts for diverse screen sizes and devices.",
  //     "Prioritizing user experience and usability in UI design projects.",
  //   ],
  // },
  {
    title: "Backend Development",
    company_name: "Node js, Express js, Mongoose, S3",
    icon: backend,
    iconBg: "#383E56",
    date: "July2024 - Present",
    points: [
      "Proficient in Node.js for building robust and scalable server-side applications.",
      "Strong command of Express.js for creating RESTful APIs and routing.",
      "Experience in using MongoDB and Mongoose, including the strategic use of indexing, for efficient data modeling, storage, and retrieval.",
      "Strategies for optimizing application performance and scalability.",
      "Skillful use of Postman for API testing, validation, and documentation",
      "Familiarity with the Model-View-Controller (MVC) pattern for structured and maintainable code",
      "Application of Clean Architecture principles for modular and testable codebases",
      "Implementation of security measures, including authorization, and authentication mechanisms to protect data.",
      "Expertise in error handling, debugging, and performance optimization.",
    ],
  },
  // {
  //   title: "AWS and other ",
  //   company_name: "EC2, S3, IAM, DSA",
  //   icon: cloud,
  //   iconBg: "black",
  //   date: "Jun 2023 - Present",
  //   points: [
  //     "Proficiency in managing AWS Elastic Compute Cloud (EC2) instances for scalable computing.",
  //     "Skillful use of AWS S3 for secure and scalable object storage.",
  //     "Experience in configuring AWS Identity and Access Management (IAM) for user and resource access control.",
  //     "Strong understanding of fundamental data structures and algorithms for efficient problem-solving. Knowledge of Big O notation for analyzing algorithmic complexity and performance.",
  //     "Eager to expand cloud service expertise and contribute to cloud-based solutions.",
  //   ],
  // },
];

const testimonials = [
  // {
  //   testimonial:
  //     "I thought it was impossible to make a website as beautiful as our product, but Rajesh proved me wrong.",
  //   name: "Sara Lee",
  //   designation: "CFO",
  //   company: "Acme Co",
  //   image: "https://randomuser.me/api/portraits/women/4.jpg",
  // },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients success like Rajesh does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  // {
  //   testimonial:
  //     "After Rajesh optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

 

const projects = [
  {
    name: "Blog",
    description:
      "Admin-exclusive blog platform where the admin can create, edit, and delete posts. Users can browse posts by categories like Politics, Sports, Business, and Entertainment.",
    tags: [
      { name: "MERN", color: "blue-text-gradient" },
      { name: "Redux", color: "green-text-gradient" },
      { name: "Material UI", color: "pink-text-gradient" },
    ],
    image: e_commerce, // ✅ Use local image
    alt: "E-Commerce",
    source_code_link: "https://github.com/imran333s/my-blog",
    live_link: "https://my-blog-s.netlify.app/",
  },
  // {
  //   name: "Pro Connect Up",
  //   description:
  //     "A web application that enables users to find people with the same interest in their career, find a person for freelance work, and search for jobs.",
  //   tags: [
  //     { name: "MERN", color: "blue-text-gradient" },
  //     { name: "restapi", color: "green-text-gradient" },
  //     { name: "tailwind", color: "pink-text-gradient" },
  //   ],
  //   image: proConnectup, // ✅ Use local image
  //   alt: "Pro Connect Up",
  //   source_code_link: "https://github.com/Rajeshesh/ProConnectUp",
  //   live_link: "https://github.com/Rajeshesh/ProConnectUp",
  // },
  {
    name: "My Portfolio",
    description:
      "My portfolio features a collection of projects that reflect my commitment to delivering top-tier web solutions.",
    tags: [
      { name: "react.js", color: "blue-text-gradient" },
      { name: "tailwind CSS", color: "green-text-gradient" },
      { name: "framer-motion", color: "pink-text-gradient" },
    ],
    image: portfolio, // ✅ Use local image
    alt: "Portfolio",
    source_code_link: "https://github.com/Rajeshesh/portfolio",
    live_link: "https://mern-rajesh-portfolio.web.app/",
  },
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  tools,
};
