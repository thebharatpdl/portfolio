import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'

const GH = () => <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
const LI = () => <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>

const CONTACTS = [
  { icon: <Mail size={16} />, label: 'Email', value: 'bharatpaudel1010@gmail.com', href: 'mailto:bharatpaudel1010@gmail.com', color: 'var(--a1)' },
  { icon: <MapPin size={16} />, label: 'Location', value: 'Kathmandu, Nepal', href: null, color: 'var(--a3)' },
  { icon: <GH />, label: 'GitHub', value: 'github.com/thebharatpdl', href: 'https://github.com/thebharatpdl', color: '#67e8f9' },
  { icon: <LI />, label: 'LinkedIn', value: 'linkedin.com/in/bharat-paudel', href: 'https://linkedin.com/in/bharat-paudel', color: '#818cf8' },
]

function Field({ label, id, type = 'text', value, onChange, placeholder, rows }:
  { label: string; id: string; type?: string; value: string; onChange: (v: string) => void; placeholder: string; rows?: number }) {
  const [focused, setFocused] = useState(false)
  const base: React.CSSProperties = {
    width: '100%', padding: '13px 16px', borderRadius: 12, fontSize: 14,
    background: 'rgba(255,255,255,0.04)', color: '#fff',
    border: focused ? '1px solid rgba(108,143,255,0.45)' : '1px solid var(--card-border)',
    outline: 'none', transition: 'border-color 0.2s', fontFamily: 'DM Sans,sans-serif',
    boxShadow: focused ? '0 0 0 3px rgba(108,143,255,0.08)' : 'none',
    resize: rows ? 'none' as const : undefined,
  }
  return (
    <div>
      <label style={{ display: 'block', fontSize: 11, color: '#aaa', fontFamily: 'Syne,sans-serif', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>{label}</label>
      {rows
        ? <textarea id={id} rows={rows} value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} style={base} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} />
        : <input id={id} type={type} value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} style={base} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} />
      }
    </div>
  )
}

export default function Contact() {
  const { ref, inView } = useInView('-80px')
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handle = (e: React.FormEvent) => {
    e.preventDefault()
    window.location.href = `mailto:bharatpaudel1010@gmail.com?subject=Hello from ${form.name}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${form.email}`
    setSent(true)
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <section id="contact" style={{ padding: '100px 24px', background: 'rgba(255,255,255,0.01)' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <motion.div ref={ref} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} style={{ marginBottom: 56 }}>
          <p style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--a1)', fontFamily: 'Syne,sans-serif', marginBottom: 12 }}>Let's connect</p>
          {/* 👇 Heading - changed to white */}
          <h2 style={{ fontSize: 'clamp(1.9rem,4.5vw,2.9rem)', fontWeight: 800, letterSpacing: '-0.025em', color: '#fff' }}>Get in <span className="gradient-text">Touch</span></h2>
        </motion.div>

        <div id="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 40 }}>
          <style>{`@media(min-width:700px){#contact-grid{grid-template-columns:1fr 1.3fr!important;}}`}</style>

          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -36 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }}>
            {/* 👇 Description - changed to white */}
            <p style={{ fontSize: 14, color: '#fff', lineHeight: 1.8, marginBottom: 32 }}>
              Open to freelance projects, collaborations, and full-time opportunities. Whether you have an app idea or just want to say hi — reach out any time.
            </p>

            {/* Availability badge */}
            <div className="glass" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '10px 18px', borderRadius: 14, marginBottom: 28, border: '1px solid rgba(52,211,153,0.22)' }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--a3)', animation: 'pulseGlow 2s ease-in-out infinite', display: 'block' }} />
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--a3)' }}>Currently Available</div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {CONTACTS.map(({ icon, label, value, href, color }) => {
                const inner = (
                  <div className="glass"
                    style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 16px', borderRadius: 14, transition: 'all 0.25s', cursor: href ? 'pointer' : 'default' }}
                    onMouseEnter={e => { if (href) { const el = e.currentTarget as HTMLElement; el.style.borderColor = `${color}35`; el.style.transform = 'translateY(-1px)' } }}
                    onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'var(--card-border)'; el.style.transform = 'translateY(0)' }}>
                    <div style={{ width: 38, height: 38, borderRadius: 11, background: `${color}18`, border: `1px solid ${color}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', color, flexShrink: 0 }}>{icon}</div>
                    <div>
                      <div style={{ fontSize: 10, color: '#aaa', fontFamily: 'Syne,sans-serif', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 2 }}>{label}</div>
                      {/* 👇 Contact value - changed to white */}
                      <div style={{ fontSize: 13, color: '#fff', fontWeight: 500 }}>{value}</div>
                    </div>
                  </div>
                )
                return href ? <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">{inner}</a> : <div key={label}>{inner}</div>
              })}
            </div>
          </motion.div>

         
        </div>
      </div>
    </section>
  )
}