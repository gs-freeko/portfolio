import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative py-24 sm:py-32 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-14"
        >
          {eyebrow && (
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-mono text-primary mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {eyebrow}
            </div>
          )}
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
            {title.split("|").map((part, i) =>
              i % 2 === 1 ? (
                <span key={i} className="text-gradient">{part}</span>
              ) : (
                <span key={i}>{part}</span>
              )
            )}
          </h2>
          {subtitle && (
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
