import { motion } from "framer-motion";
import { Award, ShieldCheck } from "lucide-react";
import { Section } from "./Section";

const certs = [
  {
    Icon: ShieldCheck,
    title: "RHCSA — Red Hat Certified System Administrator",
    issuer: "Red Hat",
    year: "2025",
  },
  {
    Icon: Award,
    title: "NASSCOM Certified Linux Administrator for Datacenter",
    issuer: "NASSCOM",
    year: "2025",
  },
];

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="// certifications"
      title="|Verified| credentials"
      subtitle="Industry recognized certifications backing my Linux & systems work."
    >
      <div className="grid sm:grid-cols-2 gap-5">
        {certs.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group rounded-2xl glass p-6 sm:p-7 shadow-card hover:shadow-glow transition-all hover:-translate-y-1"
          >
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary/25 to-accent/25 grid place-items-center border border-primary/20">
                <c.Icon className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-display font-semibold leading-snug">{c.title}</h3>
                <div className="mt-2 flex items-center gap-3 text-xs font-mono text-muted-foreground">
                  <span>{c.issuer}</span>
                  <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
                  <span>{c.year}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
