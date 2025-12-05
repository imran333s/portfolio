import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
// import { projects } from "../constants"; // ✅ projects
import { webLink, github } from "../assets"; // ✅ icons
import { fadeIn, textVariant } from "../utils/motion";
import ProjectsSection from "./ProjectsSection";
import { InlineWidget } from "react-calendly";
import { trackEvent } from "../utils/analytics";
import useCalendlyTracking from "../hooks/useCalendlyTracking";

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
    <div className="w-full rounded-2xl bg-tertiary p-5 sm:w-[360px]">
      <div className="relative h-[230px] w-full">
        <img
          src={image}
          alt={alt}
          className="h-full w-full rounded-2xl object-cover"
        />
        <div className="card-img_hover absolute inset-0 m-3 flex justify-end">
          {/* Live link */}
          <div
            onClick={() => {
              trackEvent("project_live_click", { project_name: name });
              window.open(live_link, "_blank");
            }}
            className="black-gradient mr-1 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
          >
            <img
              src={webLink}
              alt="live link"
              className="h-full w-full rounded-full object-contain"
            />
          </div>
          {/* GitHub */}
          <div
            onClick={() => {
              trackEvent("project_github_click", { project_name: name });
              window.open(source_code_link, "_blank");
            }}
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
          <p
            key={i}
            className={`text-[14px] ${tag.color}`}
            onClick={() =>
              trackEvent("project_tag_click", {
                project_name: name,
                tag: tag.name,
              })
            }
          >
            #{tag.name}
          </p>
        ))}
      </div>
    </div>
  </motion.div>
);

const Works = () => {
  // ✅ Call Calendly tracking hook here
  useCalendlyTracking();

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="flex w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-[17px] leading-[30px] text-secondary"
        >
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos. It reflects my ability to
          solve complex problems, work with different technologies, and manage
          projects effectively.
        </motion.p>
      </div>

      {/* ✅ Render ProjectsSection dynamically */}
      <div className="flex-around-center mt-20 flex-wrap gap-7">
        <ProjectsSection />
      </div>

      {/* Calendly Booking Widget */}
      <div className="mt-10 flex w-full flex-col items-center">
        <h3 className="mb-5 text-center text-2xl text-white">
          Book a 30-Minute Meeting
        </h3>
        <div className="max-w-1.5xl w-full">
          <InlineWidget
            url="https://calendly.com/imran33s786/30min"
            styles={{ minWidth: "320px", height: "500px" }}
          />
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
