import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { Section } from "./Section";

const items = [
  {
    role: "Full Stack Intern",
    company: "Tita Technologies",
    period: "Apr 2025 – Jun 2025",
    location: "On-site",
    points: [
      "Built dynamic frontend components using React with reusable design patterns.",
      "Integrated REST APIs with Node.js and Express to power data flows.",
      "Implemented CRUD operations across MongoDB and MySQL databases.",
      "Improved backend maintainability and overall application structure.",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "MySQL"],
  },
];

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="// experience"
      title="Where I've |shipped|"
      subtitle="Hands-on engineering across full-stack development and ML workflows."
    >
      <div className="relative">
        <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-accent/40 to-transparent" />
        {items.map((it, i) => (
          <motion.div
            key={it.role}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="relative pl-14 sm:pl-20 pb-10"
          >
            <div className="absolute left-2 sm:left-4 top-2 h-5 w-5 rounded-full bg-gradient-to-br from-primary to-accent shadow-glow" />
            <div className="rounded-2xl glass p-6 sm:p-8 shadow-card hover:shadow-glow transition-shadow">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 text-primary font-mono text-xs">
                    <Briefcase className="h-3.5 w-3.5" /> {it.company}
                  </div>
                  <h3 className="mt-1 text-xl sm:text-2xl font-display font-semibold">{it.role}</h3>
                </div>
                <div className="flex flex-col sm:items-end text-xs text-muted-foreground gap-1">
                  <span className="inline-flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> {it.period}</span>
                  <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> {it.location}</span>
                </div>
              </div>

              <ul className="mt-5 space-y-2.5">
                {it.points.map((p) => (
                  <li key={p} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {it.stack.map((s) => (
                  <span key={s} className="rounded-md px-2.5 py-1 text-xs font-mono text-primary bg-primary/10 border border-primary/20">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
