import { motion } from "framer-motion"

const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  )
}

const Projects = () => {
  const featuredProject = {
    title: "Semantic Image Segmentation ML Service",
    subtitle: "End-to-end ML deployment with FastAPI + Kubernetes",
    description:
      "Developed an end-to-end semantic image segmentation service using TensorFlow/Keras, featuring a U-Net-style model with a pretrained MobileNetV2 encoder, FastAPI-based inference, a browser upload interface, Docker containerization, and Kubernetes deployment.",
    tech: [
      "Python",
      "TensorFlow",
      "Keras",
      "FastAPI",
      "Docker",
      "Kubernetes",
    ],
    link: "https://github.com/ssarwar-12/image-segmentation-ml-service",
    buttonText: "View Repo",
    featured: true,
  }

  const otherProjects = [
    {
      title: "Satellite Signal Strength Predictor",
      subtitle: "ML regression from scratch",
      description:
        "Trained a regression model to predict satellite signal strength using engineered features, preprocessing, grid search tuning, and MSE-based validation.",
      tech: ["Python", "ML", "Regression", "Feature Eng.", "Grid Search", "MSE"],
      link: "https://github.com/ssarwar-12/sat_sig_pred",
      buttonText: "View Repo",
    },
    {
      title: "Embedded Reservoir Control System",
      subtitle: "Real-time embedded control on STM32",
      description:
        "Built real-time STM32 firmware for a multi-mode reservoir system with ISR-based RPM tracking, ultrasonic depth sensing, PWM motor/servo control, and UART telemetry.",
      tech: ["C", "STM32", "Interrupts", "UART", "PWM", "Proteus", "PCB"],
      link: "#",
      buttonText: "Course Project",
    },
    {
      title: "AI-Based Equipment Fault Predictor",
      subtitle: "Supervised fault detection + explainability",
      description:
        "Built a scikit-learn pipeline to predict hardware faults from sensor logs with strong precision, SHAP explainability, and automated nightly inference on Linux.",
      tech: ["Python", "scikit-learn", "SHAP", "Linux", "Automation", "ML"],
      link: "#",
      buttonText: "Private Project",
    },
  ]

  const renderButton = (project) => {
    const isLink = project.link !== "#"

    if (isLink) {
      return (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-indigo-500/40 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-100 transition-all duration-300 hover:border-indigo-400/70 hover:bg-indigo-500/20"
        >
          {project.buttonText}
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>
      )
    }

    return (
      <span className="inline-flex items-center gap-2 rounded-xl border border-indigo-500/40 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-100">
        {project.buttonText}
      </span>
    )
  }

  return (
    <section id="projects" className="w-full px-6 py-24 md:px-16 lg:px-32">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <h1 className="text-center text-4xl font-light text-white md:text-6xl">
            My Projects
          </h1>
          <p className="mt-3 text-center text-sm text-gray-300 md:text-base">
            Selected projects showcasing embedded systems, machine learning, and
            deployment-focused engineering.
          </p>
        </ScrollReveal>

        {/* Featured project on its own centered row */}
        <div className="mt-12 flex justify-center">
          <ScrollReveal>
            <div className="group w-full max-w-4xl rounded-2xl border border-indigo-500/30 bg-gradient-to-br from-indigo-500/10 via-white/5 to-purple-500/10 p-7 shadow-lg shadow-indigo-900/30 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-indigo-400/50 hover:shadow-indigo-600/30">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white md:text-3xl">
                    {featuredProject.title}
                  </h3>
                  <p className="mt-2 text-sm text-indigo-200/80 md:text-base">
                    {featuredProject.subtitle}
                  </p>
                </div>

                <span className="shrink-0 rounded-full border border-indigo-400/40 bg-indigo-500/15 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-indigo-100">
                  New
                </span>
              </div>

              <p className="mt-5 max-w-3xl text-sm leading-relaxed text-gray-300 md:text-base">
                {featuredProject.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {featuredProject.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs text-indigo-100"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-7">
                {renderButton(featuredProject)}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Remaining projects */}
        <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {otherProjects.map((p) => (
            <ScrollReveal key={p.title}>
              <div className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-indigo-900/20 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500/40 hover:shadow-indigo-600/20">
                <div>
                  <h3 className="text-xl font-semibold text-white">{p.title}</h3>
                  <p className="mt-1 text-sm text-indigo-200/80">{p.subtitle}</p>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-gray-300">
                  {p.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs text-indigo-100"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 pt-2">
                  {renderButton(p)}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects