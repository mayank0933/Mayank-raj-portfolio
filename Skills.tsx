'use client';

import { motion } from 'framer-motion';
import { skills } from '@/lib/data';

export default function Skills() {
  return (
    <section id="skills" className="section-pad">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="eyebrow mb-3">Toolkit</p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Skills</h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-ink-muted">
            Skills I actively use today, and ones I'm currently building toward.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: (i % 8) * 0.05 }}
              whileHover={{ y: -4 }}
              className="glass group relative flex flex-col justify-between rounded-xl p-4 transition-colors hover:border-trace/40 sm:p-5"
            >
              <span
                className={`mb-3 h-1.5 w-1.5 rounded-full ${
                  skill.status === 'active' ? 'bg-trace' : 'bg-solder'
                }`}
              />
              <p className="text-sm font-medium text-ink sm:text-base">{skill.name}</p>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-ink-faint">
                {skill.status === 'active' ? 'in use' : 'learning'}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
