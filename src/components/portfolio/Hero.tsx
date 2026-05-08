import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowDown, Download, Github, Linkedin, Mail, Code2 } from "lucide-react";

const rotating = [
  "Aspiring Machine Learning Engineer",
  "AI & Full Stack Developer",
  "Building Intelligent Solutions",
  "Passionate About Real-World AI",
];

function useTyping(words: string[], speed = 70, pause = 1600) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    const t = setTimeout(
      () => {
        if (!del) {
          const next = word.slice(0, text.length + 1);
          setText(next);
          if (next === word) setTimeout(() => setDel(true), pause);
        } else {
          const next = word.slice(0, text.length - 1);
          setText(next);
          if (next === "") {
            setDel(false);
            setI((v) => v + 1);
          }
        }
      },
      del ? speed / 2 : speed
    );
    return () => clearTimeout(t);
  }, [text, del, i, words, speed, pause]);

  return text;
}

export function Hero() {
  const text = useTyping(rotating);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-hero pointer-events-none" />
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl animate-blob" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-accent/20 blur-3xl animate-blob" style={{ animationDelay: "4s" }} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 w-full">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-mono text-muted-foreground mb-6"
            >
              Available for internships & opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
            >
              Gowrisaravanan{" "}
              <span className="text-gradient">S.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-5 h-9 sm:h-10 text-lg sm:text-2xl font-display text-foreground/90"
            >
              <span className="text-muted-foreground">{">"} </span>
              <span>{text}</span>
              <span className="inline-block w-0.5 h-5 sm:h-6 bg-primary ml-1 align-middle animate-pulse" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed"
            >
              Computer Science Engineering student crafting end-to-end AI systems —
              from data pipelines and model training to FastAPI deployment.
              Focused on shipping intelligent, real-world solutions that scale.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}
                className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-glow hover:scale-[1.03] transition-transform"
              >
                <Code2 className="h-4 w-4" /> View Projects
              </a>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
                className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium glass gradient-border hover:bg-secondary/40 transition-colors"
              >
                <Mail className="h-4 w-4" /> Contact Me
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                <Download className="h-4 w-4" /> Resume
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-10 flex items-center gap-3"
            >
              {[
                { Icon: Github, href: "https://github.com/gs-freeko", label: "GitHub" },
                { Icon: Linkedin, href: "#", label: "LinkedIn" },
                { Icon: Mail, href: "mailto:gowrisaravanan@example.com", label: "Email" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="h-11 w-11 grid place-items-center rounded-xl glass hover:text-primary hover:border-primary/50 transition-all hover:-translate-y-0.5"
                >
                  <Icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/40 to-accent/40 blur-3xl" />
              <div className="absolute inset-6 rounded-full glass-strong gradient-border shadow-elegant grid place-items-center animate-float">
                <div className="text-center p-8">
                  <div className="font-mono text-xs text-muted-foreground">~/portfolio</div>
                  <div className="mt-3 text-7xl font-display font-bold text-gradient">GS</div>
                  <div className="mt-3 font-mono text-xs text-muted-foreground">ML.engineer()</div>
                </div>
              </div>
              {/* orbit rings */}
              <div className="absolute inset-0 rounded-full border border-primary/20" />
              <div className="absolute inset-4 rounded-full border border-accent/15" />
              <div className="absolute inset-10 rounded-full border border-primary/10" />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground"
        >
          <ArrowDown className="h-5 w-5 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
