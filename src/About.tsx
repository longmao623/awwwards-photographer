import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Camera, Aperture, Film, MapPin, Mail, Instagram } from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

const gear = [
  { icon: Camera, label: 'Camera', value: 'Fujifilm GFX 100S' },
  { icon: Aperture, label: 'Lenses', value: 'GF 45mm f/2.8 / GF 110mm f/2' },
  { icon: Film, label: 'Film', value: 'Kodak Portra 400 / Ilford HP5' },
]

const clients = [
  'Cereal Magazine',
  'Kinfolk',
  'Wallpaper*',
  'Aesop',
  'Muji',
  'The Local Project',
]

export default function About() {
  return (
    <main className="relative z-20 pt-32 md:pt-40 pb-24 px-6 md:px-12 bg-ink min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Hero text */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={0}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24 md:mb-32"
        >
          <div className="md:col-span-4">
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-accent">03 / About</p>
          </div>
          <div className="md:col-span-6 md:col-start-6">
            <h1 className="font-display text-4xl md:text-6xl leading-tight text-balance">
              I work where stillness and attention meet.
            </h1>
          </div>
        </motion.div>

        {/* Story + portrait */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-32 md:mb-48">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            custom={0.1}
            className="md:col-span-5 md:col-start-2"
          >
            <div className="aspect-[3/4] overflow-hidden bg-[#1a1a1a]">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
                alt="Lin Chen portrait"
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-700"
              />
            </div>
            <p className="font-mono text-xs text-muted mt-4 tracking-widest uppercase">Chengdu, 2025</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            custom={0.2}
            className="md:col-span-5 md:col-start-8 flex flex-col justify-center"
          >
            <p className="font-display text-2xl md:text-3xl leading-snug mb-8">
              Photography, for me, is not about capturing everything. It is about waiting until the scene offers only what matters.
            </p>
            <div className="space-y-6 text-muted leading-relaxed">
              <p>
                I started with landscapes, drawn to the patience required by mountain light. Over time, that same slowness moved indoors — to rooms, faces, and the quiet architecture of everyday life.
              </p>
              <p>
                My work sits between documentary and editorial: real spaces, real people, shaped by attention to composition and natural light. I prefer film when possible, and digital when the moment demands it.
              </p>
              <p>
                Based in Chengdu, I take on a limited number of commissions each year so that every project receives the time it deserves.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Gear */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          custom={0}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-32 md:mb-48 border-t border-white/10 pt-16"
        >
          <div className="md:col-span-4">
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-accent">Equipment</p>
          </div>
          <div className="md:col-span-6 md:col-start-6">
            <div className="space-y-8">
              {gear.map((item) => (
                <div key={item.label} className="flex items-start gap-6 group">
                  <item.icon className="w-5 h-5 text-accent mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-mono text-xs tracking-widest uppercase text-muted mb-1">{item.label}</p>
                    <p className="text-lg">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Clients */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          custom={0}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24 border-t border-white/10 pt-16"
        >
          <div className="md:col-span-4">
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-accent">Clients & Press</p>
          </div>
          <div className="md:col-span-6 md:col-start-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {clients.map((client) => (
                <div key={client} className="py-4 border-b border-white/10">
                  <p className="font-display text-xl">{client}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Navigation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={0}
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-12 border-t border-white/10"
        >
          <Link
            to="/work"
            className="inline-flex items-center gap-3 hover:text-accent transition-colors group"
          >
            <span className="font-mono text-xs tracking-widest uppercase">View work</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <div className="flex items-center gap-6 text-muted">
            <a href="#" className="hover:text-accent transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="hover:text-accent transition-colors"><Mail className="w-5 h-5" /></a>
            <span className="flex items-center gap-2 text-sm"><MapPin className="w-4 h-4" /> Chengdu, China</span>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
