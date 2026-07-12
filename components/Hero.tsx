'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download } from 'lucide-react';
import { profile } from '@/lib/data';

function useTypedLines(lines: string[], speed = 32, lineDelay = 350) {
  const [output, setOutput] = useState<string[]>([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let lineIndex = 0;
    let charIndex = 0;
    let current = '';
    const buffer: string[] = [];

    function tick() {
      if (cancelled) return;
      if (lineIndex >= lines.length) {
        setDone(true);
        return;
      }
      const targetLine = lines[lineIndex];
      if (charIndex <= targetLine.length) {
        current = targetLine.slice(0, charIndex);
        setOutput([...buffer, current]);
        charIndex++;
        setTimeout(tick, speed);
      } else {
        buffer.push(current);
        lineIndex++;
        charIndex = 0;
        setTimeout(tick, lineDelay);
      }
    }
    tick();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { output, done };
}

export default function Hero() {
  const { output, done } = useTypedLines(profile.bootLines);

  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-28 text-center"
    >
      {/* Ambient circuit-trace backdrop */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-40"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="traceGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#4DD9C7" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#F2A65A" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.path
          d="M -50 120 L 200 120 L 240 160 L 600 160 L 640 120 L 1000 120"
          stroke="url(#traceGrad)"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="1000"
          initial={{ strokeDashoffset: 1000 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 2.4, ease: 'easeOut', delay: 0.3 }}
        />
        <motion.path
          d="M -50 480 L 260 480 L 300 440 L 720 440 L 760 480 L 1000 480"
          stroke="url(#traceGrad)"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="1000"
          initial={{ strokeDashoffset: 1000 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 2.4, ease: 'easeOut', delay: 0.6 }}
        />
      </svg>

      <div className="relative z-10 flex flex-col items-center">
        {/* Terminal boot sequence */}
        <div className="glass mb-10 w-full max-w-md rounded-xl px-5 py-4 text-left font-mono text-xs text-trace sm:text-sm">
          {output.map((line, i) => (
            <div key={i} className="whitespace-pre">
              <span className="text-ink-faint">{'>'} </span>
              {line}
              {i === output.length - 1 && !done && (
                <span className="ml-0.5 inline-block w-2 animate-blink">▍</span>
              )}
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={done ? { opacity: 1 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="eyebrow mb-4">Portfolio · v1.0</p>
          <h1 className="font-display text-4xl font-bold leading-tight sm:text-6xl md:text-7xl">
            <span className="text-ink">Mayank</span>{' '}
            <span className="text-gradient">Raj</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-sm text-ink-muted sm:text-base">
            {profile.role}
          </p>
          <p className="mt-3 font-mono text-sm text-solder sm:text-base">{profile.tagline}</p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="group relative overflow-hidden rounded-full bg-trace px-7 py-3 text-sm font-semibold text-graphite-900 transition-transform hover:scale-105"
            >
              <span className="relative z-10">Get in touch</span>
              <span className="absolute inset-0 -translate-x-full bg-trace-bright transition-transform duration-300 group-hover:translate-x-0" />
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="glass flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-ink transition-colors hover:text-trace"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-8 z-10 text-ink-faint"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown size={22} />
      </motion.a>
    </section>
  );
}
