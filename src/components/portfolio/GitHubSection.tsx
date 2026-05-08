import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { Section } from "./Section";

const USER = "gs-freeko";

export function GitHubSection() {
  return (
    <Section
      id="github"
      eyebrow="// github"
      title="Code |in motion|"
      subtitle="Live stats and contribution activity straight from GitHub."
    >
      <div className="grid lg:grid-cols-3 gap-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl glass p-5 shadow-card overflow-hidden flex items-center justify-center"
        >
          <img
            alt="GitHub stats"
            loading="lazy"
            className="w-full max-w-sm"
            src={`https://github-readme-stats.vercel.app/api?username=${USER}&show_icons=true&hide_border=true&bg_color=00000000&title_color=63E6E2&icon_color=A78BFA&text_color=C9D1D9`}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl glass p-5 shadow-card overflow-hidden flex items-center justify-center"
        >
          <img
            alt="Top languages"
            loading="lazy"
            className="w-full max-w-sm"
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${USER}&layout=compact&hide_border=true&bg_color=00000000&title_color=63E6E2&text_color=C9D1D9`}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-2xl glass p-5 shadow-card overflow-hidden flex items-center justify-center"
        >
          <img
            alt="GitHub streak"
            loading="lazy"
            className="w-full max-w-sm"
            src={`https://streak-stats.demolab.com?user=${USER}&hide_border=true&background=00000000&stroke=63E6E2&ring=A78BFA&fire=A78BFA&currStreakLabel=63E6E2&sideLabels=C9D1D9&currStreakNum=C9D1D9&sideNums=C9D1D9&dates=C9D1D9`}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="lg:col-span-3 rounded-2xl glass p-5 shadow-card overflow-x-auto"
        >
          <img
            alt="Contribution graph"
            loading="lazy"
            className="w-full min-w-[600px]"
            src={`https://github-readme-activity-graph.vercel.app/graph?username=${USER}&bg_color=00000000&color=63E6E2&line=A78BFA&point=63E6E2&hide_border=true&area=true`}
          />
        </motion.div>
      </div>

      <div className="mt-8 flex justify-center">
        <a
          href={`https://github.com/${USER}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium glass gradient-border hover:text-primary transition-colors"
        >
          <Github className="h-4 w-4" /> Visit @{USER}
        </a>
      </div>
    </Section>
  );
}
