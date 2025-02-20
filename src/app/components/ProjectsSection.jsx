"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import { title } from "process";

const projectsData = [
   {
    id: 7,
    title: "Money Mundo",
    description: "Integrated an API and trained a model using supervised learning to help immigrants improve their financial literacy by providing personalized guidance on building credit, managing debt, and making informed financial decisions.",
    image: "/images/projects/7.png",
    tag: [ "All", "Web"],
    gitUrl: "https://github.com/salimaduen/Shellhack2024",
    previewUrl: "https://devpost.com/software/money-mundo?ref_content=user-portfolio&ref_feature=in_progress",
  },

  
  {
    id: 3,
    title: "FitMate",
    description: "Developed a virtual gym trainer that utilizes computer vision and machine learning to detect exercise poses and provide real-time feedback. Created to enhance workout experiences, Fitmate offers various exercise routines and actively tracks your sets and performance, helping you achieve your fitness goals efficiently.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/xizzxy/fitmate",
    previewUrl: "https://github.com/xizzxy/fitmate",
  },
  {
    id: 4,
    title: "BudgetBuddy",
    description: "Engineered a user-friendly money management app that helps users track expenses, set savings goals, and maintain financial health through automated expense categorization and personalized budget insights.",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/xizzxy/ruby",
    previewUrl: "https://budgetbudds.netlify.app/",
  },

  {
    id: 5,
    title: "Who's that Pokemon?",
    description: "My first project, 'Who's that Pokémon,' a beginner-friendly website using CSS, HTML, and JavaScript. The game features a timed, five-question Pokémon guessing quiz with multiple-choice options and scores for user performance.",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/xizzxy/who-is-that-pokemon/tree/main",
    previewUrl: "https://golden-ganache-ddd52b.netlify.app/",
  },
  {
    id: 6,
    title: "Pantry Tracker",
    description: "Developed a Pantry Tracker app with Firebase for user authentication and real-time database management, allowing users to efficiently organize their pantry by adding, removing, and searching for items. For a demo, login as guest@project2.com with password Guest123. ",
    image: "/images/projects/6.png",
    tag: [ "All", "Web"],
    gitUrl: "https://github.com/xizzxy/pantryAPP",
    previewUrl: "https://pantry-app-olive.vercel.app/",
  },
 
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
