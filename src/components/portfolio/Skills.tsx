import { motion } from "framer-motion";
import { Section } from "./Section";

const groups = [
  {
    title: "Languages",
    items: ["Python", "Java", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "AI / ML",
    items: ["TensorFlow", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "OpenCV"],
  },
  {
    title: "Backend & APIs",
    items: ["FastAPI", "Node.js", "Express.js"],
  },
  {
    title: "Database & DevOps",
    items: ["SQL", "MongoDB", "MySQL", "Docker", "GitHub", "Linux"],
  },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="// skills"
      title="The |stack| I build with"
      subtitle="A pragmatic toolkit spanning ML, backend engineering and the developer infrastructure that ties them together."
    >
      <div className="grid md:grid-cols-2 gap-5">
        {groups.map((g, gi) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: gi * 0.08 }}
            className="rounded-2xl glass p-6 sm:p-7 shadow-card"
          >
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-display text-lg font-semibold">{g.title}</h3>
              <span className="font-mono text-xs text-muted-foreground">{String(gi + 1).padStart(2, "0")}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {g.items.map((s, i) => (
                <motion.span
                  key={s}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  className="group relative rounded-xl px-3.5 py-2 text-sm glass gradient-border hover:text-primary hover:-translate-y-0.5 transition-all cursor-default"
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
