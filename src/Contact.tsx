import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Camera, Instagram, Mail, MapPin, Send } from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', type: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="relative z-20 pt-32 md:pt-40 pb-24 px-6 md:px-12 bg-ink min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={0}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24 md:mb-32"
        >
          <div className="md:col-span-4">
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-accent">04 / Contact</p>
          </div>
          <div className="md:col-span-6 md:col-start-6">
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-tight text-balance">
              Let's make something quiet.
            </h1>
            <p className="mt-8 text-muted leading-relaxed max-w-lg">
              Available for editorial commissions, brand projects, and limited print licensing. Tell me what you're building.
            </p>
          </div>
        </motion.div>

        {/* Form + contact info */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            custom={0.1}
            className="md:col-span-6 md:col-start-2"
          >
            {submitted ? (
              <div className="py-16 border border-white/10 px-8 text-center">
                <Send className="w-8 h-8 text-accent mx-auto mb-4" />
                <p className="font-display text-2xl mb-2">Message received.</p>
                <p className="text-muted text-sm">I'll respond within two business days.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block font-mono text-xs tracking-widest uppercase text-muted mb-3">Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-transparent border-b border-white/20 py-3 text-paper focus:border-accent outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs tracking-widest uppercase text-muted mb-3">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-transparent border-b border-white/20 py-3 text-paper focus:border-accent outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-xs tracking-widest uppercase text-muted mb-3">Project type</label>
                  <select
                    value={form.type}
                    onChange={(e) => setForm({ ...form, type: e.target.value })}
                    className="w-full bg-transparent border-b border-white/20 py-3 text-paper focus:border-accent outline-none transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-ink">Select a project type</option>
                    <option value="editorial" className="bg-ink">Editorial commission</option>
                    <option value="brand" className="bg-ink">Brand project</option>
                    <option value="portrait" className="bg-ink">Portrait session</option>
                    <option value="print" className="bg-ink">Print licensing</option>
                    <option value="other" className="bg-ink">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block font-mono text-xs tracking-widest uppercase text-muted mb-3">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-transparent border-b border-white/20 py-3 text-paper focus:border-accent outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-paper font-mono text-xs tracking-widest uppercase hover:bg-accent/90 transition-colors"
                >
                  <span>Send message</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            custom={0.2}
            className="md:col-span-4 md:col-start-9 flex flex-col gap-10"
          >
            <div>
              <p className="font-mono text-xs tracking-widest uppercase text-muted mb-3">Email</p>
              <a href="mailto:hello@linchen.studio" className="font-display text-2xl hover:text-accent transition-colors">
                hello@linchen.studio
              </a>
            </div>

            <div>
              <p className="font-mono text-xs tracking-widest uppercase text-muted mb-3">Studio</p>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent" />
                <span>Chengdu, China</span>
              </p>
            </div>

            <div>
              <p className="font-mono text-xs tracking-widest uppercase text-muted mb-4">Social</p>
              <div className="flex items-center gap-6">
                <a href="#" className="hover:text-accent transition-colors"><Camera className="w-5 h-5" /></a>
                <a href="#" className="hover:text-accent transition-colors"><Instagram className="w-5 h-5" /></a>
                <a href="#" className="hover:text-accent transition-colors"><Mail className="w-5 h-5" /></a>
              </div>
            </div>

            <div>
              <p className="font-mono text-xs tracking-widest uppercase text-muted mb-3">Response time</p>
              <p className="text-muted">Within 2 business days for new commissions.</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom navigation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={0}
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mt-32 pt-12 border-t border-white/10"
        >
          <div className="flex items-center gap-8 font-mono text-xs tracking-widest uppercase">
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            <Link to="/work" className="hover:text-accent transition-colors">Work</Link>
            <Link to="/about" className="hover:text-accent transition-colors">About</Link>
          </div>
          <p className="font-mono text-xs text-muted/60">© 2026 Lin Chen</p>
        </motion.div>
      </div>
    </main>
  )
}
