import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Footer() {
  const [year] = useState(new Date().getFullYear())
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    // Optional: Add any footer-specific effects
  }, [])

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      style={{
        position: 'relative',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '48px 24px 32px',
        marginTop: 40,
        overflow: 'hidden',
      }}
    >
      {/* Animated gradient background */}
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 50% 0%, rgba(108,143,255,0.03), transparent 70%)',
          pointerEvents: 'none',
        }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Top decorative line with gradient */}
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 1,
          background: 'linear-gradient(90deg, transparent, rgba(108,143,255,0.4), rgba(167,139,250,0.4), rgba(52,211,153,0.4), transparent)',
        }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
      />

      <div style={{
        maxWidth: 1100,
        margin: '0 auto',
        position: 'relative',
        zIndex: 2,
      }}>
        {/* Main footer content */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 20,
          marginBottom: 32,
        }}>
          {/* Left side - Logo and copyright */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              flexWrap: 'wrap',
            }}
          >
            <motion.a
              href="#about"
              style={{
                fontFamily: 'Syne, sans-serif',
                fontWeight: 800,
                fontSize: 20,
                letterSpacing: '-0.03em',
                textDecoration: 'none',
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="gradient-text">BP</span>
            </motion.a>

            <motion.div
              style={{
                width: 1,
                height: 20,
                background: 'rgba(255,255,255,0.1)',
              }}
            />

            <motion.p
              style={{
                fontSize: 12,
                color: 'rgba(255,255,255,0.5)',
                fontFamily: 'Syne, sans-serif',
                letterSpacing: '0.02em',
              }}
            >
              © {year} Bharat Paudel
            </motion.p>
          </motion.div>

          {/* Right side - Location with pulse animation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            {/* Animated flag pulse */}
            <motion.span
              style={{ fontSize: 14 }}
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
                ease: 'easeInOut',
              }}
            >
              🇳🇵
            </motion.span>
            <p style={{
              fontSize: 12,
              color: 'rgba(255,255,255,0.5)',
              fontFamily: 'DM Sans, sans-serif',
            }}>
              Designed & Built from Kathmandu, Nepal
            </p>
          </motion.div>
        </div>

        {/* Bottom section with tech stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          style={{
            paddingTop: 24,
            borderTop: '1px solid rgba(255,255,255,0.04)',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <span style={{
            fontSize: 10,
            color: 'rgba(255,255,255,0.35)',
            fontFamily: 'DM Sans, sans-serif',
            letterSpacing: '0.05em',
          }}>
            Built with
          </span>
          
          {/* Tech stack tags */}
          {['React', 'TypeScript', 'Framer Motion', 'Node.js'].map((tech, idx) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.4 + idx * 0.05 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                color: 'rgba(255,255,255,0.8)',
                borderColor: 'rgba(108,143,255,0.4)',
              }}
              style={{
                fontSize: 10,
                padding: '4px 10px',
                borderRadius: 20,
                background: 'rgba(108,143,255,0.06)',
                border: '1px solid rgba(108,143,255,0.15)',
                color: 'rgba(255,255,255,0.45)',
                fontFamily: 'DM Sans, sans-serif',
                transition: 'all 0.2s',
                cursor: 'default',
              }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        {/* Back to top button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: 32,
          }}
        >
          <motion.a
            href="#about"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '8px 20px',
              borderRadius: 40,
              fontSize: 11,
              fontFamily: 'Syne, sans-serif',
              fontWeight: 500,
              color: 'rgba(255,255,255,0.4)',
              textDecoration: 'none',
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.06)',
              transition: 'all 0.2s',
              cursor: 'pointer',
            }}
            whileHover={{
              color: 'rgba(255,255,255,0.8)',
              borderColor: 'rgba(108,143,255,0.3)',
              background: 'rgba(108,143,255,0.05)',
              y: -3,
            }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.span
              animate={{ y: [0, -3, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 2,
              }}
              style={{ fontSize: 14 }}
            >
              ↑
            </motion.span>
            Back to Top
          </motion.a>
        </motion.div>
      </div>
    </motion.footer>
  )
}