import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  e_commerce,
  portfolio,
  proConnectup,
  webLink,
  github,
} from "../assets";
import { fadeIn } from "../utils/motion";

// ✅ Reuse ProjectCard (unchanged)
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  alt,
  source_code_link,
  live_link,
}) => (
  <motion.div variants={fadeIn("up", "spring", index * 0.1 + 0.3, 0.7)}>
    <div className="w-full rounded-2xl bg-tertiary p-3 sm:w-[320px]">
      <div className="relative h-[160px] w-full">
        <img
          src={image}
          alt={alt}
          className="h-full w-full rounded-2xl object-cover"
        />
        <div className="card-img_hover absolute inset-0 m-3 flex justify-end">
          <div
            onClick={() => window.open(live_link, "_blank")}
            className="black-gradient mr-1 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
          >
            <img
              src={webLink}
              alt="live link"
              className="h-full w-full rounded-full object-contain"
            />
          </div>
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
          >
            <img
              src={github}
              alt="source code"
              className="h-3/4 w-3/4 object-contain"
            />
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-[24px] font-bold text-white">{name}</h3>
        <p className="mt-2 text-[14px] text-secondary">{description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <p key={i} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </div>
  </motion.div>
);

function ProjectsSection() {
  const [projects, setProjects] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:5000/api/projects")
  //     .then((res) => res.json())
  //     .then((data) => setProjects(data))
  //     .catch((err) => console.log(err));
  // }, []);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/projects`)
      .then((res) => {
        console.log("Status:", res.status);
        return res.json();
      })
      .then((data) => {
        console.log("Fetched projects:", data);
        setProjects(data);
      })
      .catch((err) => console.log("Fetch error:", err));
  }, []);

  const getImage = (imageName) => {
    switch (imageName) {
      case "e_commerce":
        return e_commerce;
      case "portfolio":
        return portfolio;
      case "proConnectup":
        return proConnectup;
      default:
        return portfolio;
    }
  };

  // ✅ Convert tech array → tags array (with color class)
  const formatTags = (techArray) =>
    techArray.map((t, i) => ({
      name: t,
      color: i % 2 === 0 ? "blue-text-gradient" : "green-text-gradient",
    }));

  return (
    <>
      {projects.map((project, index) => (
        <ProjectCard
          key={project._id}
          index={index}
          name={project.name}
          description={project.description}
          tags={formatTags(project.tech)} // 👈 transform here
          image={getImage(project.image)}
          alt={project.alt || project.name}
          source_code_link={project.github}
          live_link={project.live}
        />
      ))}
    </>
  );
}

export default ProjectsSection;
