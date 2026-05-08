import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="text-sm text-muted-foreground font-mono">
          © {new Date().getFullYear()} Gowrisaravanan S — built with care.
        </div>
        <div className="flex items-center gap-3">
          {[
            { Icon: Github, href: "https://github.com/gs-freeko", label: "GitHub" },
            { Icon: Linkedin, href: "#", label: "LinkedIn" },
            { Icon: Mail, href: "mailto:gowrisaravanan@example.com", label: "Email" },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="h-10 w-10 grid place-items-center rounded-lg glass hover:text-primary transition-colors"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
