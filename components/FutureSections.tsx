'use client';

import { motion } from 'framer-motion';
import { FolderGit2, Trophy, Award, Clock } from 'lucide-react';
import { projects, achievements, certificates } from '@/lib/data';

function ComingSoon({ label }: { label: string }) {
  return (
    <div className="glass flex flex-col items-center justify-center rounded-2xl px-6 py-14 text-center">
      <span className="glass mb-4 flex h-11 w-11 items-center justify-center rounded-full text-solder">
        <Clock size={18} />
      </span>
      <p className="font-mono text-xs uppercase tracking-widest text-ink-faint">Coming soon</p>
      <p className="mt-2 max-w-xs text-sm text-ink-muted">
        {label} will appear here as soon as they're ready — this space is reserved and wired up
        in <code className="font-mono text-trace">lib/data.ts</code>.
      </p>
    </div>
  );
}

function SectionShell({
  id,
  eyebrow,
  title,
  icon,
  children,
  tint,
}: {
  id: string;
  eyebrow: string;
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  tint?: boolean;
}) {
  return (
    <section id={id} className={`section-pad ${tint ? 'bg-graphite-800/40' : ''}`}>
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col items-center text-center"
        >
          <span className="glass mb-4 flex h-11 w-11 items-center justify-center rounded-full text-trace">
            {icon}
          </span>
          <p className="eyebrow mb-2">{eyebrow}</p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">{title}</h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <SectionShell id="projects" eyebrow="Build log" title="Projects" icon={<FolderGit2 size={18} />}>
      {projects.length === 0 ? (
        <ComingSoon label="Projects" />
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.link ?? '#'}
              className="glass block rounded-2xl p-6 transition-colors hover:border-trace/40"
            >
              <h3 className="font-display text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-ink-muted">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-trace"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      )}
    </SectionShell>
  );
}

export function Achievements() {
  return (
    <SectionShell
      id="achievements"
      eyebrow="Milestones"
      title="Achievements"
      icon={<Trophy size={18} />}
      tint
    >
      {achievements.length === 0 ? (
        <ComingSoon label="Achievements" />
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((a) => (
            <div key={a.title} className="glass rounded-2xl p-6">
              <h3 className="font-display text-lg font-semibold">{a.title}</h3>
              {a.date && <p className="mt-1 font-mono text-xs text-solder">{a.date}</p>}
              <p className="mt-2 text-sm text-ink-muted">{a.description}</p>
            </div>
          ))}
        </div>
      )}
    </SectionShell>
  );
}

export function Certificates() {
  return (
    <SectionShell id="certificates" eyebrow="Credentials" title="Certificates" icon={<Award size={18} />}>
      {certificates.length === 0 ? (
        <ComingSoon label="Certificates" />
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((c) => (
            <a
              key={c.title}
              href={c.link ?? '#'}
              className="glass block rounded-2xl p-6 transition-colors hover:border-trace/40"
            >
              <h3 className="font-display text-lg font-semibold">{c.title}</h3>
              <p className="mt-1 text-sm text-ink-muted">{c.issuer}</p>
              {c.date && <p className="mt-2 font-mono text-xs text-solder">{c.date}</p>}
            </a>
          ))}
        </div>
      )}
    </SectionShell>
  );
}
