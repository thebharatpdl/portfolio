import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { ExternalLink, BookOpen, Award } from 'lucide-react'

export default function Research() {
  const { ref, inView } = useInView('-80px')
  const { ref: cref, inView: cinView } = useInView('-60px')
  return (
    <section id="research" style={{ padding: '100px 24px' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <motion.div ref={ref} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} style={{ marginBottom: 56 }}>
          <p style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--a3)', fontFamily: 'Syne,sans-serif', marginBottom: 12 }}>Published Work</p>
          <h2 style={{ fontSize: 'clamp(1.9rem,4.5vw,2.9rem)', fontWeight: 800, letterSpacing: '-0.025em', color: '#fff' }}>Research <span className="gradient-text">Paper</span></h2>
        </motion.div>

        <motion.div ref={cref}
          initial={{ opacity: 0, y: 40 }} animate={cinView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="glass"
          style={{ borderRadius: 24, padding: '40px 40px', position: 'relative', overflow: 'hidden', border: '1px solid rgba(52,211,153,0.18)', boxShadow: '0 0 60px rgba(52,211,153,0.05)' }}>
          <div style={{ position: 'absolute', top: 0, right: 0, width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle,rgba(52,211,153,0.07) 0%,transparent 70%)', transform: 'translate(30%,-30%)', pointerEvents: 'none' }} />

          <div id="paper-flex" style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            <style>{`@media(min-width:640px){#paper-flex{flex-direction:row!important;align-items:flex-start!important;}}`}</style>

            <div style={{ width: 56, height: 56, borderRadius: 18, background: 'rgba(52,211,153,0.12)', border: '1px solid rgba(52,211,153,0.22)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <BookOpen size={24} style={{ color: 'var(--a3)' }} />
            </div>

            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                <span style={{ fontSize: 11, padding: '4px 12px', borderRadius: 999, background: 'rgba(52,211,153,0.12)', color: 'var(--a3)', border: '1px solid rgba(52,211,153,0.22)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6 }}>
                  <Award size={11} /> Published
                </span>
                <span style={{ fontSize: 12, color: '#aaa', fontFamily: 'DM Sans,sans-serif' }}>INJET · Volume 2, Issue 2</span>
              </div>

              {/* 👇 Title - changed to white */}
              <h3 style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: 22, color: '#fff', marginBottom: 16, lineHeight: 1.3 }}>
                Human Emotion Detection and Face Recognition System
              </h3>

              {/* 👇 Description - changed to white */}
              <p style={{ fontSize: 14, color: '#fff', lineHeight: 1.8, marginBottom: 22 }}>
                A real-time system combining facial recognition and emotion classification using a custom CNN trained on the FER-2013 dataset, Haar Cascade-based face detection, and SVM/KNN classifiers for identity matching — achieving high accuracy in live video environments with automatic trend analytics.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginBottom: 28 }}>
                {['CNN', 'OpenCV', 'Emotion Detection', 'Face Recognition', 'TensorFlow', 'SVM/KNN', 'FER-2013'].map(t => (
                  // 👇 Tags - changed to white
                  <span key={t} style={{ fontSize: 11, padding: '5px 11px', borderRadius: 8, background: 'rgba(52,211,153,0.08)', border: '1px solid rgba(52,211,153,0.15)', color: '#fff' }}>{t}</span>
                ))}
              </div>

              <a href="https://doi.org/10.3126/injet.v2i2.78596" target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 24px', borderRadius: 14, fontSize: 13, fontWeight: 700, fontFamily: 'Syne,sans-serif', background: 'rgba(52,211,153,0.12)', border: '1px solid rgba(52,211,153,0.28)', color: 'var(--a3)', transition: 'all 0.25s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(52,211,153,0.2)'; (e.currentTarget as HTMLElement).style.transform = 'scale(1.03)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(52,211,153,0.12)'; (e.currentTarget as HTMLElement).style.transform = 'scale(1)' }}>
                <ExternalLink size={14} /> Read Paper — DOI: 10.3126/injet.v2i2.78596
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}