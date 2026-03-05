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
  const projects = [
    {
      title: "Embedded Reservoir Control System",
      subtitle: "Real-time embedded control on STM32",
      description:
        "Built real-time STM32 firmware for a multi-mode reservoir system with ISR-based RPM tracking, ultrasonic depth sensing, PWM motor/servo control, and UART telemetry.",
      tech: ["C", "STM32", "Interrupts", "UART", "PWM", "Proteus", "PCB"],
      link: "#",
    },
    {
      title: "Satellite Signal Strength Predictor",
      subtitle: "ML regression from scratch",
      description:
        "Trained a regression model to predict satellite signal strength using engineered features, preprocessing, grid search tuning, and MSE-based validation.",
      tech: ["Python", "ML", "Regression", "Feature Eng.", "Grid Search", "MSE"],
      link: "#",
    },
    {
      title: "AI-Based Equipment Fault Predictor",
      subtitle: "Supervised fault detection + explainability",
      description:
        "Built a scikit-learn pipeline to predict hardware faults from sensor logs (88% precision) with SHAP explainability and automated nightly inference on Linux.",
      tech: ["Python", "scikit-learn", "SHAP", "Linux", "Automation", "ML"],
      link: "#",
    },
  ]

  return (
    <section id="projects" className="w-full px-16 py-24 md:px-32">
      <div className="mx-auto max-w-6xl">
        {/* Title reveal like the tutorial */}
        <ScrollReveal>
          <h1 className="text-center text-4xl font-light text-white md:text-6xl">
            My Projects
          </h1>
          <p className="mt-3 text-center text-sm text-gray-300 md:text-base">
            Selected projects — more coming soon.
          </p>
        </ScrollReveal>

        {/* Cards */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ScrollReveal key={p.title}>
              <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-indigo-900/20 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500/40 hover:shadow-indigo-600/30">
                <h3 className="text-xl font-semibold text-white">{p.title}</h3>
                <p className="mt-1 text-sm text-indigo-200/80">{p.subtitle}</p>

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

                <div className="mt-6">
                  <a
                    href={p.link}
                    className="inline-flex items-center gap-2 rounded-xl border border-indigo-500/40 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-100 transition-all duration-300 hover:border-indigo-400/70 hover:bg-indigo-500/20"
                  >
                    View Project
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
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