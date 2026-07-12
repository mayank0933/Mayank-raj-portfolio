import { Github, Linkedin, Twitter } from 'lucide-react';
import { profile, socials } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-10 sm:px-10 lg:px-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <p className="font-mono text-xs text-ink-faint">
          © {new Date().getFullYear()} {profile.name}. Built with intent.
        </p>

        <div className="flex items-center gap-4">
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="glass flex h-9 w-9 items-center justify-center rounded-full text-ink-muted transition-colors hover:text-trace"
          >
            <Github size={16} />
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="glass flex h-9 w-9 items-center justify-center rounded-full text-ink-muted transition-colors hover:text-trace"
          >
            <Linkedin size={16} />
          </a>
          <a
            href={socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className="glass flex h-9 w-9 items-center justify-center rounded-full text-ink-muted transition-colors hover:text-trace"
          >
            <Twitter size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
