import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowDown, ArrowRight, Camera, Mail } from 'lucide-react'
import Work from './Work.tsx'

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

function Nav() {
  const location = useLocation()
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-5 mix-blend-difference">
      <Link to="/" className="font-mono text-xs tracking-[0.3em] uppercase hover:text-accent transition-colors">
        Lin Chen
      </Link>
      <div className="hidden md:flex items-center gap-10 font-mono text-xs tracking-widest uppercase">
        <Link to="/work" className={`hover:text-accent transition-colors ${location.pathname === '/work' ? 'text-accent' : ''}`}>Work</Link>
        <Link to="/#about" className="hover:text-accent transition-colors">About</Link>
        <Link to="/#contact" className="hover:text-accent transition-colors">Contact</Link>
      </div>
    </nav>
  )
}

function Footer() {
  return (
    <footer id="contact" className="relative z-20 px-6 md:px-12 py-24 md:py-32 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-6">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-accent mb-6">03 / Contact</p>
          <a href="mailto:hello@linchen.studio" className="font-display text-4xl md:text-6xl hover:text-accent transition-colors">
            hello@linchen.studio
          </a>
        </div>
        <div className="md:col-span-4 md:col-start-9 flex flex-col gap-6">
          <p className="text-muted">Available for editorial commissions and brand projects.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-accent transition-colors"><Camera className="w-5 h-5" /></a>
            <a href="#" className="hover:text-accent transition-colors"><Mail className="w-5 h-5" /></a>
          </div>
          <p className="font-mono text-xs text-muted/60 mt-auto">© 2026 Lin Chen</p>
        </div>
      </div>
    </footer>
  )
}

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-end pb-16 md:pb-24 px-6 md:px-12">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent z-10" />
          <img
            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1920&q=80"
            alt="Mountain landscape at golden hour"
            className="w-full h-full object-cover opacity-70"
          />
        </div>

        <div className="relative z-20 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <motion.p
              custom={0.2}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="font-mono text-xs tracking-[0.3em] uppercase text-accent mb-6"
            >
              Photographer / Based in Chengdu
            </motion.p>
            <motion.h1
              custom={0.4}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight text-balance"
            >
              Light is<br />the story.
            </motion.h1>
          </div>
          <div className="md:col-span-4 md:col-start-9 flex flex-col gap-6">
            <motion.p
              custom={0.6}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-muted text-sm leading-relaxed max-w-xs"
            >
              Editorial photography for brands and spaces that value silence over noise.
            </motion.p>
            <motion.div
              custom={0.8}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <Link
                to="/work"
                className="inline-flex items-center gap-3 text-sm font-medium hover:text-accent transition-colors group"
              >
                <span className="font-mono uppercase tracking-widest">Explore work</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section id="about" className="relative z-20 px-6 md:px-12 py-32 md:py-48 bg-ink">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-4">
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-accent">01 / About</p>
          </div>
          <div className="md:col-span-6 md:col-start-6">
            <p className="font-display text-3xl md:text-5xl leading-tight text-balance">
              I photograph the quiet moments between intention and atmosphere.
            </p>
            <p className="mt-8 text-muted leading-relaxed max-w-xl">
              Working across editorial, architecture, and landscape, my approach is rooted in patience and natural light. Every frame is a conversation between space, subject, and the time of day.
            </p>
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section id="work" className="relative z-20 px-6 md:px-12 py-24 md:py-32 bg-ink">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-16">
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-accent">02 / Selected Work</p>
            <Link to="/work" className="hidden md:inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase hover:text-accent transition-colors">
              View all <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
            <Link to="/work#altitude" className="md:col-span-7 group cursor-pointer">
              <motion.div whileHover={{ y: -8 }} className="aspect-[4/5] overflow-hidden bg-[#1a1a1a]">
                <img
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80"
                  alt="Alpine landscape"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
              </motion.div>
              <div className="mt-4 flex items-start justify-between">
                <div>
                  <h3 className="font-display text-2xl">Altitude</h3>
                  <p className="text-muted text-sm mt-1">Landscape / 2024</p>
                </div>
                <span className="font-mono text-xs text-muted">01</span>
              </div>
            </Link>

            <Link to="/work#still-rooms" className="md:col-span-5 md:mt-24 group cursor-pointer">
              <motion.div whileHover={{ y: -8 }} className="aspect-[3/4] overflow-hidden bg-[#1a1a1a]">
                <img
                  src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80"
                  alt="Minimal interior"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
              </motion.div>
              <div className="mt-4 flex items-start justify-between">
                <div>
                  <h3 className="font-display text-2xl">Still Rooms</h3>
                  <p className="text-muted text-sm mt-1">Interior / 2025</p>
                </div>
                <span className="font-mono text-xs text-muted">02</span>
              </div>
            </Link>

            <Link to="/work#quiet-faces" className="md:col-span-5 md:col-start-2 group cursor-pointer">
              <motion.div whileHover={{ y: -8 }} className="aspect-[3/4] overflow-hidden bg-[#1a1a1a]">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
                  alt="Portrait"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
              </motion.div>
              <div className="mt-4 flex items-start justify-between">
                <div>
                  <h3 className="font-display text-2xl">Quiet Faces</h3>
                  <p className="text-muted text-sm mt-1">Portrait / 2024</p>
                </div>
                <span className="font-mono text-xs text-muted">03</span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

function App() {
  const location = useLocation()
  return (
    <div className="relative min-h-screen bg-ink text-paper overflow-x-hidden">
      <div className="grain-overlay" />
      <Nav />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  )
}

export default App
