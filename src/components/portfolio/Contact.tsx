import { motion } from "framer-motion";
import { useState } from "react";
import { z } from "zod";
import { Mail, Github, Linkedin, Send, Code2, CheckCircle2 } from "lucide-react";
import { Section } from "./Section";

const schema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(80),
  email: z.string().trim().email("Invalid email").max(160),
  message: z.string().trim().min(10, "Message must be at least 10 chars").max(1000),
});

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) {
      const errs: Record<string, string> = {};
      r.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    const subject = encodeURIComponent(`Portfolio inquiry from ${r.data.name}`);
    const body = encodeURIComponent(`${r.data.message}\n\n— ${r.data.name} (${r.data.email})`);
    window.location.href = `mailto:gowrisaravanan@example.com?subject=${subject}&body=${body}`;
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  const links = [
    { Icon: Mail, label: "Email", value: "gowrisaravanan@example.com", href: "mailto:gowrisaravanan@example.com" },
    { Icon: Github, label: "GitHub", value: "@gs-freeko", href: "https://github.com/gs-freeko" },
    { Icon: Linkedin, label: "LinkedIn", value: "Gowrisaravanan S", href: "#" },
    { Icon: Code2, label: "LeetCode", value: "@gowrisaravanan", href: "#" },
  ];

  return (
    <Section
      id="contact"
      eyebrow="// contact"
      title="Let's |build| something"
      subtitle="Open to internships, collaborations and conversations about AI engineering."
    >
      <div className="grid lg:grid-cols-5 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 rounded-2xl glass p-6 sm:p-7 shadow-card flex flex-col gap-3"
        >
          <h3 className="font-display text-lg font-semibold">Reach out</h3>
          <p className="text-sm text-muted-foreground">Pick the channel you prefer — I usually respond within a day.</p>
          <div className="mt-3 flex flex-col gap-2">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-xl p-3 hover:bg-secondary/40 transition-colors"
              >
                <div className="h-10 w-10 grid place-items-center rounded-lg bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary/20 transition-colors">
                  <l.Icon className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-mono text-muted-foreground">{l.label}</div>
                  <div className="text-sm truncate">{l.value}</div>
                </div>
              </a>
            ))}
          </div>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-3 rounded-2xl glass-strong p-6 sm:p-8 shadow-card space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Name" error={errors.name}>
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                className="w-full bg-input/60 rounded-lg px-4 py-3 text-sm border border-border focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/20 transition"
              />
            </Field>
            <Field label="Email" error={errors.email}>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@email.com"
                className="w-full bg-input/60 rounded-lg px-4 py-3 text-sm border border-border focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/20 transition"
              />
            </Field>
          </div>
          <Field label="Message" error={errors.message}>
            <textarea
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Tell me about the opportunity or idea…"
              className="w-full bg-input/60 rounded-lg px-4 py-3 text-sm border border-border focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/20 transition resize-none"
            />
          </Field>

          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-glow hover:scale-[1.02] transition-transform"
          >
            {sent ? <CheckCircle2 className="h-4 w-4" /> : <Send className="h-4 w-4" />}
            {sent ? "Opening your mail app…" : "Send message"}
          </button>
        </motion.form>
      </div>
    </Section>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-xs font-mono text-muted-foreground">{label}</span>
        {error && <span className="text-xs text-destructive">{error}</span>}
      </div>
      {children}
    </label>
  );
}
