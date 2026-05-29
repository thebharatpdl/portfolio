import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Research', href: '#research' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [activeSection, setActiveSection] = useState('about')
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    const onResize = () => setIsMobile(window.innerWidth < 768)
    
    const handleActiveSection = () => {
      const sections = LINKS.map(link => link.href.substring(1))
      const scrollPosition = window.scrollY + 120
      
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    
    const handleMouseMove = (e: MouseEvent) => {
      if (navRef.current) {
        const rect = navRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }
    }
    
    onScroll()
    onResize()
    handleActiveSection()
    
    window.addEventListener('scroll', onScroll)
    window.addEventListener('scroll', handleActiveSection)
    window.addEventListener('resize', onResize)
    window.addEventListener('mousemove', handleMouseMove)
    
    return () => { 
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('scroll', handleActiveSection)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const handleClick = (href: string) => {
    setOpen(false)
    const id = href.substring(1)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      <motion.nav
        ref={navRef}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{ position: 'fixed', top: 20, left: 0, right: 0, zIndex: 100, padding: '0 24px' }}
      >
        {/* Main Navbar Container */}
        <motion.div
          style={{
            maxWidth: 1100,
            margin: '0 auto',
            position: 'relative',
            borderRadius: 80,
            transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
          }}
          animate={{
            background: scrolled 
              ? 'rgba(8, 12, 20, 0.92)' 
              : 'rgba(8, 12, 20, 0.65)',
            backdropFilter: scrolled ? 'blur(24px)' : 'blur(16px)',
            border: scrolled 
              ? '1px solid rgba(108, 143, 255, 0.25)' 
              : '1px solid rgba(255, 255, 255, 0.06)',
            boxShadow: scrolled 
              ? '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(108, 143, 255, 0.08)' 
              : '0 4px 20px rgba(0, 0, 0, 0.15)',
            padding: scrolled ? '8px 12px' : '10px 16px',
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Animated gradient border on hover */}
          <motion.div
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: 80,
              padding: 1,
              background: 'linear-gradient(135deg, rgba(108,143,255,0.4), rgba(167,139,250,0.4), rgba(52,211,153,0.3))',
              opacity: 0,
              pointerEvents: 'none',
            }}
            animate={{ opacity: scrolled ? 0.4 : 0.1 }}
            transition={{ duration: 0.3 }}
          />

          {/* Glow effect following mouse - more subtle */}
          <motion.div
            style={{
              position: 'absolute',
              width: 250,
              height: 250,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(108,143,255,0.08), transparent 70%)',
              pointerEvents: 'none',
              left: mousePosition.x - 125,
              top: mousePosition.y - 125,
              opacity: 0,
            }}
            animate={{ opacity: scrolled ? 0.5 : 0.2 }}
            transition={{ duration: 0.1 }}
          />

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '4px 20px',
            position: 'relative',
            zIndex: 2,
          }}>
            {/* Logo with animation */}
            <motion.a
              href="#about"
              onClick={(e) => { e.preventDefault(); handleClick('#about') }}
              style={{
                fontFamily: 'Syne, sans-serif',
                fontWeight: 800,
                fontSize: 24,
                letterSpacing: '-0.03em',
                position: 'relative',
                textDecoration: 'none',
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="gradient-text">BP</span>
              <motion.span
                style={{
                  position: 'absolute',
                  bottom: -2,
                  left: 0,
                  right: 0,
                  height: 2,
                  background: 'linear-gradient(90deg, var(--a1), var(--a2))',
                  borderRadius: 2,
                }}
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>

            {/* Desktop Navigation */}
            {!isMobile && (
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                {LINKS.map((l, idx) => {
                  const isActive = activeSection === l.href.substring(1)
                  const isHovered = hoveredIndex === idx
                  
                  return (
                    <motion.a
                      key={l.href}
                      href={l.href}
                      onClick={(e) => { e.preventDefault(); handleClick(l.href) }}
                      style={{
                        position: 'relative',
                        fontSize: 14,
                        fontWeight: 500,
                        padding: '8px 18px',
                        borderRadius: 40,
                        color: isActive ? '#fff' : 'rgba(255,255,255,0.6)',
                        textDecoration: 'none',
                        cursor: 'pointer',
                        zIndex: 1,
                      }}
                      onMouseEnter={() => setHoveredIndex(idx)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Hover background */}
                      {isHovered && (
                        <motion.span
                          layoutId="hoverBg"
                          style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'rgba(108, 143, 255, 0.08)',
                            borderRadius: 40,
                            zIndex: -1,
                          }}
                          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                        />
                      )}
                      
                      {/* Active indicator pill */}
                      {isActive && (
                        <motion.span
                          layoutId="activePill"
                          style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'rgba(108, 143, 255, 0.12)',
                            borderRadius: 40,
                            border: '1px solid rgba(108, 143, 255, 0.25)',
                            zIndex: -2,
                          }}
                          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                        />
                      )}
                      
                      <motion.span
                        animate={{
                          color: isActive ? '#fff' : isHovered ? '#fff' : 'rgba(255,255,255,0.6)',
                          fontWeight: isActive ? 600 : 500,
                        }}
                      >
                        {l.label}
                      </motion.span>
                      
                      {/* Active dot - more subtle */}
                      {isActive && (
                        <motion.span
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 0.8 }}
                          transition={{ delay: 0.1 }}
                          style={{
                            position: 'absolute',
                            bottom: 2,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: 3,
                            height: 3,
                            borderRadius: '50%',
                            background: 'var(--a1)',
                            boxShadow: '0 0 6px var(--a1)',
                          }}
                        />
                      )}
                    </motion.a>
                  )
                })}
              </div>
            )}

            {/* Mobile Menu Button */}
            {isMobile && (
              <motion.button
                onClick={() => setOpen(o => !o)}
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: 'var(--tp)',
                  fontSize: 20,
                  padding: 8,
                  width: 42,
                  height: 42,
                  borderRadius: 12,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                whileHover={{ scale: 1.05, background: 'rgba(255,255,255,0.08)' }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{ rotate: open ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {open ? '✕' : '☰'}
                </motion.div>
              </motion.button>
            )}
          </div>
        </motion.div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && isMobile && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{
                maxWidth: 1100,
                margin: '12px auto 0',
                position: 'relative',
                borderRadius: 28,
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  background: 'rgba(8, 12, 20, 0.96)',
                  backdropFilter: 'blur(24px)',
                  border: '1px solid rgba(108, 143, 255, 0.12)',
                  borderRadius: 28,
                  padding: 20,
                }}
              >
                {LINKS.map((l, idx) => {
                  const isActive = activeSection === l.href.substring(1)
                  return (
                    <motion.a
                      key={l.href}
                      href={l.href}
                      onClick={(e) => { e.preventDefault(); handleClick(l.href) }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 12,
                        padding: '14px 16px',
                        marginBottom: idx !== LINKS.length - 1 ? 8 : 0,
                        borderRadius: 16,
                        color: isActive ? '#fff' : 'rgba(255,255,255,0.6)',
                        fontSize: 16,
                        fontWeight: isActive ? 600 : 500,
                        textDecoration: 'none',
                        transition: 'all 0.2s',
                      }}
                      whileHover={{
                        background: 'rgba(108, 143, 255, 0.08)',
                        paddingLeft: 24,
                      }}
                    >
                      <motion.div
                        style={{
                          width: 3,
                          height: isActive ? 24 : 0,
                          background: 'linear-gradient(180deg, var(--a1), var(--a2))',
                          borderRadius: 3,
                          transition: 'height 0.2s',
                        }}
                        animate={{ height: isActive ? 24 : 0 }}
                      />
                      {l.label}
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </>
  )
}