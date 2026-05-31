"use client";
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Footer() {
  const [year] = useState(new Date().getFullYear())

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      style={{
        position: 'relative',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '32px 24px',
        overflow: 'hidden',
        background: '#020617',
      }}
    >
      {/* Animated gradient background */}
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 50% 0%, rgba(99, 102, 241, 0.05), transparent 70%)',
          pointerEvents: 'none'
        }}
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Top decorative line */}
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 1,
          background: 'linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.5), rgba(139, 92, 246, 0.5), rgba(6, 182, 212, 0.5), transparent)'
        }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
      />

      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 2 }}>

        {/* Tech stack row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10,
            marginBottom: 24
          }}
        >
          <span style={{
            fontSize: 11,
            color: '#ffffff',
            fontFamily: "'DM Sans', sans-serif",
            letterSpacing: '0.05em',
            opacity: 0.7
          }}>
            Built with
          </span>
          {['React', 'TypeScript', 'Framer Motion', 'Node.js'].map((tech, idx) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.3 + idx * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, borderColor: 'rgba(255, 255, 255, 0.4)' }}
              style={{
                fontSize: 11,
                padding: '4px 12px',
                borderRadius: 20,
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#ffffff',
                fontFamily: "'DM Sans', sans-serif",
                cursor: 'default',
                transition: 'all 0.2s ease',
                opacity: 0.9
              }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          paddingTop: 20,
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 12
        }}>
          
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            style={{
              fontSize: 12,
              color: '#ffffff',
              fontFamily: "'Syne', sans-serif",
              fontWeight: 500,
              opacity: 0.7
            }}
          >
            © {year} Bharat Paudel
          </motion.p>

          {/* Location */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            viewport={{ once: true }}
            style={{
              fontSize: 12,
              color: '#ffffff',
              fontFamily: "'DM Sans', sans-serif",
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              opacity: 0.7
            }}
          >
            <motion.span
              animate={{ rotate: [0, 6, -6, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 4 }}
              style={{ fontSize: 14 }}
            >
              🇳🇵
            </motion.span>
            Designed & Built from Kathmandu, Nepal
          </motion.p>

          {/* Back to Top Button */}
          <motion.a
            href="#hero"
            onClick={e => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{
              y: -3,
              borderColor: 'rgba(255, 255, 255, 0.5)',
              background: 'rgba(99, 102, 241, 0.2)',
              boxShadow: '0 10px 25px -5px rgba(99, 102, 241, 0.3)'
            }}
            whileTap={{ scale: 0.98 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '8px 20px',
              borderRadius: 40,
              fontSize: 12,
              fontFamily: "'Syne', sans-serif",
              fontWeight: 500,
              color: '#ffffff',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textDecoration: 'none',
              opacity: 0.9
            }}
          >
            <motion.span
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
              style={{ fontSize: 14 }}
            >
              ↑
            </motion.span>
            Back to Top
          </motion.a>
        </div>

      </div>
    </motion.footer>
  )
}