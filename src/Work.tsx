import { useState } from 'react'
import { motion } from 'framer-motion'
import { X } from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

interface Series {
  id: string
  title: string
  category: string
  year: string
  description: string
  cover: string
  images: { src: string; alt: string }[]
}

const series: Series[] = [
  {
    id: 'altitude',
    title: 'Altitude',
    category: 'Landscape',
    year: '2024',
    description: 'High-altitude landscapes where air thins and light becomes the primary subject.',
    cover: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80',
    images: [
      { src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80', alt: 'Mountain ridge at dawn' },
      { src: 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=800&q=80', alt: 'Snow peak' },
      { src: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=800&q=80', alt: 'Alpine valley' },
      { src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80', alt: 'Cloud inversion' },
    ],
  },
  {
    id: 'still-rooms',
    title: 'Still Rooms',
    category: 'Interior',
    year: '2025',
    description: 'Domestic and commercial spaces rendered as quiet portraits of inhabitation.',
    cover: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80',
    images: [
      { src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80', alt: 'Living room with natural light' },
      { src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80', alt: 'Minimal bedroom' },
      { src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80', alt: 'Kitchen detail' },
      { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80', alt: 'Studio space' },
    ],
  },
  {
    id: 'quiet-faces',
    title: 'Quiet Faces',
    category: 'Portrait',
    year: '2024',
    description: 'Portraits made in the margin between posed and observed.',
    cover: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    images: [
      { src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&q=80', alt: 'Portrait in window light' },
      { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80', alt: 'Profile portrait' },
      { src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80', alt: 'Editorial portrait' },
      { src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80', alt: 'Natural light portrait' },
    ],
  },
]

export default function Work() {
  const [lightbox, setLightbox] = useState<string | null>(null)

  return (
    <main className="relative z-20 pt-32 md:pt-40 pb-24 px-6 md:px-12 bg-ink min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={0}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24"
        >
          <div className="md:col-span-4">
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-accent">02 / Work</p>
          </div>
          <div className="md:col-span-6 md:col-start-6">
            <h1 className="font-display text-4xl md:text-6xl leading-tight text-balance">
              Three series, one question: where does the light fall?
            </h1>
          </div>
        </motion.div>

        {series.map((s, sIndex) => (
          <section key={s.id} id={s.id} className="mb-32 md:mb-48">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeInUp}
              custom={0}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-12"
            >
              <div className="md:col-span-5">
                <div className="flex items-baseline gap-4 mb-4">
                  <h2 className="font-display text-4xl md:text-5xl">{s.title}</h2>
                  <span className="font-mono text-xs text-muted">{s.category} / {s.year}</span>
                </div>
                <p className="text-muted leading-relaxed max-w-md">{s.description}</p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
              {s.images.map((img, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-50px' }}
                  variants={fadeInUp}
                  custom={i * 0.1}
                  onClick={() => setLightbox(img.src)}
                  className={`
                    cursor-pointer overflow-hidden bg-[#1a1a1a] group
                    ${i === 0 ? 'md:col-span-7 aspect-[16/10]' : ''}
                    ${i === 1 ? 'md:col-span-5 md:mt-16 aspect-[3/4]' : ''}
                    ${i === 2 ? 'md:col-span-5 md:col-start-2 aspect-[3/4]' : ''}
                    ${i === 3 ? 'md:col-span-5 md:-mt-8 aspect-[4/5]' : ''}
                  `}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                </motion.div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-ink/95 flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-paper hover:text-accent transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={lightbox}
            alt="Full size"
            className="max-w-full max-h-[90vh] object-contain"
          />
        </div>
      )}
    </main>
  )
}
