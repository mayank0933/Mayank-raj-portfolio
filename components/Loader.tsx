'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="status"
          aria-label="Loading"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-graphite-900"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <div className="font-mono text-trace text-sm tracking-widest">
            <span>{'>'} mounting_portfolio</span>
            <span className="inline-block w-2 animate-blink">_</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
