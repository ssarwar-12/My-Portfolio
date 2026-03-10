import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoDocker,
  BiLogoTailwindCss,
  BiLogoNodejs,
  BiLogoCPlusPlus,
  BiLogoPython,
  BiLogoGit,
  BiLogoReact,
} from "react-icons/bi";
import {
  SiTensorflow,
  SiPytorch,
  SiKubernetes,
  SiFastapi,
  SiLinux,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiR,
} from "react-icons/si";

const Tech = () => {
  const [activeCategory, setActiveCategory] = useState("Overview");

  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const categories = [
    "Overview",
    "Languages",
    "AI/ML",
    "Web",
    "DevOps",
  ];

  const technologies = [
    // Languages
    {
      name: "C++",
      category: "Languages",
      icon: BiLogoCPlusPlus,
      color: "text-sky-300",
    },
    {
      name: "Python",
      category: "Languages",
      icon: BiLogoPython,
      color: "text-yellow-400",
    },
    {
      name: "JavaScript",
      category: "Languages",
      icon: BiLogoJavascript,
      color: "text-yellow-300",
    },
    {
      name: "TypeScript",
      category: "Languages",
      icon: BiLogoTypescript,
      color: "text-sky-500",
    },
    {
      name: "R",
      category: "Languages",
      icon: SiR,
      color: "text-blue-400",
    },

    // AI / ML
    {
      name: "PyTorch",
      category: "AI/ML",
      icon: SiPytorch,
      color: "text-orange-400",
    },
    {
      name: "TensorFlow",
      category: "AI/ML",
      icon: SiTensorflow,
      color: "text-orange-500",
    },
    {
      name: "NumPy",
      category: "AI/ML",
      icon: SiNumpy,
      color: "text-blue-300",
    },
    {
      name: "Pandas",
      category: "AI/ML",
      icon: SiPandas,
      color: "text-white",
    },
    {
      name: "Scikit-Learn",
      category: "AI/ML",
      icon: SiScikitlearn,
      color: "text-orange-300",
    },

    // Web
    {
      name: "React",
      category: "Web",
      icon: BiLogoReact,
      color: "text-cyan-400",
    },
    {
      name: "TailwindCSS",
      category: "Web",
      icon: BiLogoTailwindCss,
      color: "text-sky-400",
    },
    {
      name: "Node.js",
      category: "Web",
      icon: BiLogoNodejs,
      color: "text-green-500",
    },
    {
      name: "FastAPI",
      category: "Web",
      icon: SiFastapi,
      color: "text-green-400",
    },

    // DevOps
    {
      name: "Docker",
      category: "DevOps",
      icon: BiLogoDocker,
      color: "text-blue-500",
    },
    {
      name: "Kubernetes",
      category: "DevOps",
      icon: SiKubernetes,
      color: "text-blue-400",
    },
    {
      name: "Git",
      category: "DevOps",
      icon: BiLogoGit,
      color: "text-red-500",
    },
    {
      name: "Linux",
      category: "DevOps",
      icon: SiLinux,
      color: "text-yellow-400",
    },
  ];

  const filteredTechnologies = useMemo(() => {
    if (activeCategory === "Overview") return technologies;
    return technologies.filter((tech) => tech.category === activeCategory);
  }, [activeCategory]);

  return (
    <div
      id="tech"
      className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-12 px-4 py-16 md:gap-20"
    >
      <motion.h1
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center text-4xl font-light text-white md:text-6xl"
      >
        Technologies
      </motion.h1>

      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="flex flex-wrap items-center justify-center gap-3"
      >
        {categories.map((category) => {
          const isActive = activeCategory === category;

          return (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-5 py-2 text-sm transition-all duration-300 ${
                isActive
                  ? "border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.25)]"
                  : "border-gray-700 text-gray-300 hover:border-gray-500 hover:text-white"
              }`}
            >
              {category}
            </button>
          );
        })}
      </motion.div>

      <motion.div
        key={activeCategory}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="flex max-w-6xl flex-wrap items-center justify-center gap-10 p-5"
      >
        {filteredTechnologies.map((tech, index) => {
          const Icon = tech.icon;

          return (
            <motion.div
              key={tech.name}
              variants={variants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.4, delay: index * 0.03 }}
              viewport={{ once: true }}
              whileHover={{
                y: -14,
                scale: 1.06,
                transition: { type: "spring", stiffness: 260, damping: 18 },
              }}
              className="flex flex-col items-center gap-3"
            >
              <Icon
                className={`cursor-pointer text-[80px] transition-all sm:text-[100px] md:text-[120px] ${tech.color}`}
              />
              <span className="text-sm text-gray-300">{tech.name}</span>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Tech;