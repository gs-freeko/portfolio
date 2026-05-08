import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Loader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1400);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] grid place-items-center bg-background"
        >
          <div className="flex flex-col items-center gap-5">
            <div className="relative h-16 w-16">
              <div className="absolute inset-0 rounded-full border-2 border-primary/20" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1.1, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary border-r-accent"
              />
              <div className="absolute inset-0 grid place-items-center font-display font-bold text-gradient">GS</div>
            </div>
            <div className="font-mono text-xs text-muted-foreground tracking-widest">INITIALIZING…</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
