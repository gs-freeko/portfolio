import { motion } from "framer-motion";
import { Github, ExternalLink, Stethoscope, Map } from "lucide-react";
import { Section } from "./Section";

const projects = [
  {
    Icon: Stethoscope,
    title: "AI-Based Early Disease Risk Prediction & Patient Monitoring",
    summary:
      "An AI system that predicts disease risk using clinical and lifestyle data, surfacing actionable risk scores via a deployed API.",
    points: [
      "Models: Logistic Regression, Random Forest and K-Means clustering.",
      "End-to-end ML pipeline: preprocessing, evaluation, FastAPI integration & deployment.",
      "Risk-scoring layer translating predictions into actionable insights.",
    ],
    stack: ["Python", "TensorFlow", "Scikit-learn", "Pandas", "FastAPI"],
    repo: "https://github.com/gs-freeko",
    demo: "#",
  },
  {
    Icon: Map,
    title: "SmartTour — ML Powered Trip Planner",
    summary:
      "A travel planner that personalizes destinations and forecasts trip cost & duration using clustering and regression.",
    points: [
      "K-Means clustering for personalized destination grouping.",
      "Linear Regression for trip cost and duration forecasting.",
      "Full workflow: preprocessing, training, FastAPI integration and deployment.",
    ],
    stack: ["Python", "Machine Learning", "FastAPI", "Pandas"],
    repo: "https://github.com/gs-freeko",
    demo: "#",
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="// projects"
      title="Selected |work|"
      subtitle="A glimpse of recent ML systems built end-to-end — from data to deployed API."
    >
      <div className="grid lg:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            className="group relative rounded-3xl glass-strong p-7 sm:p-8 shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-1 overflow-hidden"
          >
            <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative">
              <div className="flex items-start justify-between gap-4">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-primary/25 to-accent/25 grid place-items-center border border-primary/20">
                  <p.Icon className="h-5 w-5 text-primary" />
                </div>
                <span className="font-mono text-xs text-muted-foreground">0{i + 1} / 0{projects.length}</span>
              </div>

              <h3 className="mt-5 text-xl sm:text-2xl font-display font-semibold leading-snug">
                {p.title}
              </h3>
              <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                {p.summary}
              </p>

              <ul className="mt-5 space-y-2">
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="rounded-md px-2.5 py-1 text-xs font-mono text-primary bg-primary/10 border border-primary/20">
                    {s}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex items-center gap-3">
                <a href={p.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm glass gradient-border hover:text-primary transition-colors">
                  <Github className="h-4 w-4" /> Code
                </a>
                <a href={p.demo} className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm bg-gradient-to-r from-primary to-accent text-primary-foreground hover:scale-[1.03] transition-transform">
                  <ExternalLink className="h-4 w-4" /> Demo
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
