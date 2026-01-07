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
  hotelBooking,
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
    title: "Associate Software Developer",
    company_name: "Shiwansh Solutions",
    icon: frontend,
    iconBg: "#383E56",
    date: "July 2025 - Present",
    points: [
      "Developed the official Shiwansh Solutions website, including the user interface, admin panel, and backend APIs.",
      "Built responsive and modern UI components using React.js, improving usability and overall user experience.",
      "Designed and implemented secure and scalable RESTful APIs using Node.js and Express.js.",
      "Integrated MongoDB for efficient data management, schema design, and query optimization.",
      "Created an admin panel for managing content, analytics, and internal operations.",
      "Enhanced website performance, reduced load time, and ensured cross-browser compatibility.",
      "Collaborated with team members to deliver high-quality features following industry best practices.",
      "Improved overall workflow by reusing components, modularizing code, and following clean architecture principles.",
    ],
  },
];

const testimonials = [];

const projects = [
  {
    name: "NewsPulse",
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
    live_link: "https://portfolio-three-mu-32.vercel.app/",
  },
  {
    name: "Hotel Booking System",
    description:
      "A full-stack hotel booking platform with user and admin roles. Users can register, login, update profiles, manage bookings, and maintain wishlists. Admins can manage hotels, bookings, users, and content through a secure admin panel.",
    tags: [
      { name: "MERN", color: "blue-text-gradient" },
      { name: "JWT Auth", color: "green-text-gradient" },
      { name: "Admin Panel", color: "pink-text-gradient" },
      { name: "MongoDB", color: "orange-text-gradient" },
    ],
    image: hotelBooking,
    alt: "Hotel Booking System",
    source_code_link: "https://github.com/imran333s/hotel-booking-system",
    live_link: "https://YOUR-VERCEL-LINK.vercel.app",
  },

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
