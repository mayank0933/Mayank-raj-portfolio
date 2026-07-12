'use client';

import { motion } from 'framer-motion';
import { Target } from 'lucide-react';
import { careerObjective } from '@/lib/data';

export default function CareerGoal() {
  return (
    <section id="goal" className="section-pad bg-graphite-800/40">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="glass-strong mx-auto max-w-3xl rounded-3xl p-8 text-center sm:p-12"
      >
        <span className="glass mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full text-trace">
          <Target size={20} />
        </span>
        <p className="eyebrow mb-3">Career Objective</p>
        <p className="font-display text-xl leading-relaxed text-ink sm:text-2xl">
          {careerObjective}
        </p>
      </motion.div>
    </section>
  );
}
