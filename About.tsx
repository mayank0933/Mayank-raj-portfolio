'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { about, profile } from '@/lib/data';

export default function About() {
  return (
    <section id="about" className="section-pad">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 md:grid-cols-[280px_1fr]">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="mx-auto animate-floaty"
        >
          <div className="relative h-56 w-56 sm:h-64 sm:w-64">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-trace/40 to-solder/30 blur-2xl" />
            <div className="glass-strong relative h-full w-full overflow-hidden rounded-full p-1.5">
              <div className="relative h-full w-full overflow-hidden rounded-full bg-graphite-800">
                <Image
                  src={profile.photo}
                  alt={`Portrait of ${profile.name}`}
                  fill
                  sizes="256px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow mb-3">About</p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Who I am</h2>
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-ink-muted sm:text-base">
            {about.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
