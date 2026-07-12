'use client';

import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { education } from '@/lib/data';

export default function Education() {
  return (
    <section id="education" className="section-pad bg-graphite-800/40">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="eyebrow mb-3">Timeline</p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Education</h2>
        </motion.div>

        <div className="relative border-l border-white/10 pl-8 sm:pl-10">
          {education.map((entry, i) => (
            <motion.div
              key={entry.level}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative mb-12 last:mb-0"
            >
              <span className="glass absolute -left-[2.85rem] flex h-8 w-8 items-center justify-center rounded-full text-trace sm:-left-[3.35rem]">
                <GraduationCap size={16} />
              </span>
              <div className="glass rounded-2xl p-6 transition-colors hover:border-trace/30">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold text-ink sm:text-xl">
                    {entry.level}
                  </h3>
                  <span className="font-mono text-xs text-solder">{entry.year}</span>
                </div>
                <p className="mt-1 text-sm text-ink-muted">{entry.board}</p>
                <div className="mt-4 flex items-center gap-3">
                  <span className="font-mono text-2xl font-semibold text-gradient">
                    {entry.score}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-widest text-ink-faint">
                    score
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{entry.note}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
