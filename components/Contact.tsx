'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { profile } from '@/lib/data';

type Errors = { name?: string; email?: string; message?: string };

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function validate(): Errors {
    const next: Errors = {};
    if (!form.name.trim()) next.name = 'Please enter your name.';
    if (!form.email.trim()) {
      next.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'Enter a valid email address.';
    }
    if (!form.message.trim() || form.message.trim().length < 10) {
      next.message = 'Message should be at least 10 characters.';
    }
    return next;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="contact" className="section-pad bg-graphite-800/40">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow mb-3">Contact</p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Let's talk</h2>
          <p className="mt-4 max-w-sm text-sm text-ink-muted">
            Open to conversations about AI, engineering, and the road to JEE Main 2027. Reach out
            directly or send a message.
          </p>

          <ul className="mt-8 space-y-4 text-sm">
            <li className="flex items-center gap-3 text-ink-muted">
              <span className="glass flex h-9 w-9 items-center justify-center rounded-full text-trace">
                <Mail size={15} />
              </span>
              <a href={`mailto:${profile.email}`} className="hover:text-trace">
                {profile.email}
              </a>
            </li>
            <li className="flex items-center gap-3 text-ink-muted">
              <span className="glass flex h-9 w-9 items-center justify-center rounded-full text-trace">
                <Phone size={15} />
              </span>
              <a href={`tel:+91${profile.phone}`} className="hover:text-trace">
                +91 {profile.phone}
              </a>
            </li>
            <li className="flex items-center gap-3 text-ink-muted">
              <span className="glass flex h-9 w-9 items-center justify-center rounded-full text-trace">
                <MapPin size={15} />
              </span>
              {profile.location}
            </li>
          </ul>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          noValidate
          className="glass space-y-5 rounded-2xl p-6 sm:p-8"
        >
          <div>
            <label htmlFor="name" className="mb-1.5 block font-mono text-xs uppercase tracking-widest text-ink-faint">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'name-error' : undefined}
              className="w-full rounded-lg border border-white/10 bg-graphite-900/60 px-4 py-2.5 text-sm text-ink outline-none transition-colors focus:border-trace"
              placeholder="Your name"
            />
            {errors.name && (
              <p id="name-error" className="mt-1 text-xs text-solder">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="mb-1.5 block font-mono text-xs uppercase tracking-widest text-ink-faint">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
              className="w-full rounded-lg border border-white/10 bg-graphite-900/60 px-4 py-2.5 text-sm text-ink outline-none transition-colors focus:border-trace"
              placeholder="you@example.com"
            />
            {errors.email && (
              <p id="email-error" className="mt-1 text-xs text-solder">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="mb-1.5 block font-mono text-xs uppercase tracking-widest text-ink-faint">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'message-error' : undefined}
              className="w-full resize-none rounded-lg border border-white/10 bg-graphite-900/60 px-4 py-2.5 text-sm text-ink outline-none transition-colors focus:border-trace"
              placeholder="What's on your mind?"
            />
            {errors.message && (
              <p id="message-error" className="mt-1 text-xs text-solder">
                {errors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-trace py-3 text-sm font-semibold text-graphite-900 transition-transform hover:scale-[1.02]"
          >
            {sent ? <CheckCircle2 size={16} /> : <Send size={16} />}
            {sent ? 'Opening your mail app…' : 'Send message'}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
