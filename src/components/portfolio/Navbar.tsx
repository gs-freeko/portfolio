import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "github", label: "GitHub" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = links.map((l) => document.getElementById(l.id));
      const y = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const s = sections[i];
        if (s && s.offsetTop <= y) {
          setActive(links[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-500 ${
            scrolled ? "glass-strong shadow-elegant" : "bg-transparent"
          }`}
        >
          <button onClick={() => go("home")} className="flex items-center gap-2 group">
            <div className="relative">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-primary to-accent grid place-items-center shadow-glow">
                <Sparkles className="h-4 w-4 text-primary-foreground" />
              </div>
            </div>
            <span className="font-display font-semibold text-base sm:text-lg tracking-tight">
              Gowri<span className="text-gradient">.S</span>
            </span>
          </button>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className="relative px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {active === l.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-lg bg-primary/10 border border-primary/30"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className={`relative ${active === l.id ? "text-foreground" : ""}`}>
                  {l.label}
                </span>
              </button>
            ))}
          </nav>

          <button
            onClick={() => go("contact")}
            className="hidden lg:inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-glow hover:scale-[1.03] transition-transform"
          >
            Let's talk
          </button>

          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden h-10 w-10 grid place-items-center rounded-lg glass"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="lg:hidden mt-2 glass-strong rounded-2xl p-3 shadow-elegant"
            >
              <div className="flex flex-col">
                {links.map((l) => (
                  <button
                    key={l.id}
                    onClick={() => go(l.id)}
                    className={`text-left px-4 py-3 rounded-lg text-sm transition-colors ${
                      active === l.id
                        ? "bg-primary/10 text-foreground border border-primary/30"
                        : "text-muted-foreground hover:bg-secondary/50"
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
