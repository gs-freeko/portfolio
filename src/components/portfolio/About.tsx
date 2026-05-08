import { motion } from "framer-motion";
import { Brain, Rocket, Layers, Target } from "lucide-react";
import { Section } from "./Section";

const pillars = [
  { Icon: Brain, title: "AI & ML", text: "Designing predictive models, pipelines and production-ready ML systems." },
  { Icon: Layers, title: "Full Stack", text: "Building reliable APIs and clean UIs from data layer to interface." },
  { Icon: Rocket, title: "Shipping", text: "From notebook to FastAPI to deployment — focused on real outcomes." },
  { Icon: Target, title: "Problem-First", text: "Engineering with curiosity, rigor and an obsession for clarity." },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="// about"
      title="Engineer focused on |intelligent systems|"
      subtitle="I'm a Computer Science Engineering student passionate about Machine Learning, Deep Learning and Full Stack Development. I love translating messy real-world data into useful predictions, and shipping them as APIs people can actually use."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {pillars.map(({ Icon, title, text }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group relative rounded-2xl glass p-6 hover:-translate-y-1 transition-all duration-500 shadow-card hover:shadow-glow"
          >
            <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 grid place-items-center mb-4 group-hover:from-primary/30 group-hover:to-accent/30 transition-colors">
              <Icon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-display text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{text}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
