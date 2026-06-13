import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Mail, Phone } from 'lucide-react'
import profileImage from    '../profile.jpeg'

function TypingText({ texts }: { texts: string[] }) {
  const [displayed, setDisplayed] = useState('')
  const [ri, setRi] = useState(0)
  const [ci, setCi] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const cur = texts[ri]
    const delay = deleting ? 35 : 75
    const t = setTimeout(() => {
      if (!deleting) {
        setDisplayed(cur.slice(0, ci + 1))
        if (ci + 1 === cur.length) setTimeout(() => setDeleting(true), 2000)
        else setCi(c => c + 1)
      } else {
        setDisplayed(cur.slice(0, ci - 1))
        if (ci - 1 === 0) { setDeleting(false); setCi(0); setRi(i => (i + 1) % texts.length) }
        else setCi(c => c - 1)
      }
    }, delay)
    return () => clearTimeout(t)
  }, [ci, deleting, ri, texts])

  return (
    <span style={{ fontFamily:'Syne,sans-serif', fontWeight:700 }}>
      <span className="gradient-text">{displayed}</span>
      <span style={{ animation:'blink 1s step-end infinite', color:'var(--a1)', marginLeft:2 }}>|</span>
    </span>
  )
}

const SOCIALS = [
  { 
    label:'GitHub', 
    href:'https://github.com/thebharatpdl', 
    color: '#ffffff',
    icon:(
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
    )
  },
  { 
    label:'LinkedIn', 
    href:'https://linkedin.com/in/bharat-paudel', 
    color: '#0A66C2',
    icon:(
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
    )
  },
  { 
    label:'Email', 
    href:'mailto:bharatpaudel1010@gmail.com', 
    color: '#EA4335',
    icon:<Mail size={17}/>
  },
]

export default function Hero() {
  return (
    <section id="about" style={{ position:'relative', minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center', padding:'96px 24px 80px', overflow:'hidden' }}>
      {/* BG blobs */}
      <div style={{ position:'absolute', inset:0, pointerEvents:'none', overflow:'hidden' }}>
        <div className="pulse-glow" style={{ position:'absolute', width:700, height:700, borderRadius:'50%', background:'radial-gradient(circle,rgba(108,143,255,0.11) 0%,transparent 70%)', top:'-15%', left:'-12%' }}/>
        <div className="pulse-glow" style={{ position:'absolute', width:550, height:550, borderRadius:'50%', background:'radial-gradient(circle,rgba(167,139,250,0.09) 0%,transparent 70%)', bottom:'-5%', right:'-8%', animationDelay:'2s' }}/>
        <div style={{ position:'absolute', width:350, height:350, borderRadius:'50%', background:'radial-gradient(circle,rgba(52,211,153,0.07) 0%,transparent 70%)', top:'45%', left:'50%', transform:'translate(-50%,-50%)' }}/>
        {/* Grid */}
        <svg style={{ position:'absolute', inset:0, width:'100%', height:'100%', opacity:0.04 }}>
          <defs>
            <pattern id="g" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M60 0L0 0 0 60" fill="none" stroke="rgba(108,143,255,0.8)" strokeWidth="0.6"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#g)"/>
        </svg>
      </div>

      <div style={{ position:'relative', zIndex:10, maxWidth:960, width:'100%', margin:'0 auto' }}>
        <div id="hero-flex" style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:60 }}>
          <style>{`@media(min-width:860px){#hero-flex{flex-direction:row!important;align-items:center!important;}#hero-text{text-align:left!important;}#meta-r,#btn-r,#soc-r{justify-content:flex-start!important;}}`}</style>

          {/* Avatar with Image */}
         {/* Avatar with Image */}
<motion.div 
  initial={{ opacity: 0, scale: 0.8 }} 
  animate={{ opacity: 1, scale: 1 }} 
  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
  className="float" 
  style={{ flexShrink: 0 }}
>
  <div style={{ position: 'relative', width: 220, height: 220 }}>
    {/* Animated gradient ring */}
    <div className="spin-slow" style={{
      position: 'absolute', 
      inset: -14, 
      borderRadius: '50%',
      background: 'conic-gradient(from 0deg, var(--a1), var(--a2), var(--a3), var(--a1))',
      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
      WebkitMaskComposite: 'xor', 
      maskComposite: 'exclude', 
      padding: 2,
    }}/>
    
    {/* Glow effect */}
    <div style={{ 
      position: 'absolute', 
      inset: -10, 
      borderRadius: '50%', 
      background: 'linear-gradient(135deg, var(--a1), var(--a2))', 
      filter: 'blur(18px)', 
      opacity: 0.25 
    }}/>
    
    {/* Image Container */}
    <div style={{
      width: '100%', 
      height: '100%', 
      borderRadius: '50%', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      background: 'linear-gradient(150deg, #0c1220, #111827)',
      border: '2px solid rgba(108, 143, 255, 0.25)',
      overflow: 'hidden',
    }}>
      <img 
        src={profileImage}
        alt="Bharat Paudel" 
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />
    </div>
  </div>
</motion.div>

          {/* Text */}
          <div id="hero-text" style={{ flex:1, textAlign:'center' }}>
            <motion.h1 initial={{opacity:0,y:28}} animate={{opacity:1,y:0}} transition={{delay:0.25,duration:0.7}}
              style={{ fontSize:'clamp(2.6rem,6vw,4.2rem)', fontWeight:800, letterSpacing:'-0.03em', marginBottom:12 }}>
              Bharat <span className="gradient-text">Paudel</span>
            </motion.h1>

            <motion.div initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{delay:0.32,duration:0.6}}
              style={{ fontSize:'clamp(1rem,2.5vw,1.3rem)', marginBottom:20, minHeight:36 }}>
              <TypingText texts={["Electronics, Communication and Information Engineer"]}/>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              style={{ fontSize: 15, lineHeight: 1.8, color: '#fff', maxWidth: 520, marginBottom: 24 }}
            >
              ECE graduate building performant cross-platform mobile apps and intelligent systems.
              Skilled in{' '}
              <span style={{ color: 'var(--a1)' }}>React Native</span>,{' '}
              <span style={{ color: 'var(--a2)' }}>TypeScript</span>,{' '}
              <span style={{ color: 'var(--a3)' }}>Node.js</span>, and{' '}
              <span style={{ color: 'var(--a1)' }}>ML</span> (TensorFlow, OpenCV, CNN) — focused on scalable architecture, user-centric design, and real-time intelligent features.
            </motion.p>

            <motion.div id="meta-r" initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{delay:0.48,duration:0.6}}
              style={{ display:'flex', flexWrap:'wrap', gap:16, justifyContent:'center', marginBottom:28, fontSize:13, color:'#ccc' }}>
              <span style={{display:'flex',alignItems:'center',gap:6}}><MapPin size={13} style={{color:'var(--a1)'}}/> Kathmandu, Nepal</span>
              <a href="mailto:bharatpaudel1010@gmail.com" style={{display:'flex',alignItems:'center',gap:6,transition:'color 0.2s', color:'#ccc'}}
                onMouseEnter={e=>(e.currentTarget.style.color='#fff')} onMouseLeave={e=>(e.currentTarget.style.color='#ccc')}>
                <Mail size={13} style={{color:'var(--a2)'}}/>
              </a>
              <span style={{display:'flex',alignItems:'center',gap:6, color:'#ccc'}}><Phone size={13} style={{color:'var(--a3)'}}/></span>
            </motion.div>

            <motion.div id="btn-r" initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{delay:0.55,duration:0.6}}
              style={{ display:'flex', flexWrap:'wrap', gap:14, justifyContent:'center', marginBottom:28 }}>
              <a href="#contact" style={{
                padding:'12px 28px', borderRadius:14, fontSize:14, fontWeight:700, fontFamily:'Syne,sans-serif',
                background:'linear-gradient(135deg,var(--a1),var(--a2))', color:'#fff',
                boxShadow:'0 8px 30px rgba(108,143,255,0.28)', transition:'transform 0.2s,box-shadow 0.2s',
              }} onMouseEnter={e=>{e.currentTarget.style.transform='scale(1.05)';e.currentTarget.style.boxShadow='0 12px 40px rgba(108,143,255,0.38)'}}
                onMouseLeave={e=>{e.currentTarget.style.transform='scale(1)';e.currentTarget.style.boxShadow='0 8px 30px rgba(108,143,255,0.28)'}}>
                Get in touch
              </a>
              {/* <a href="/resume.pdf" download className="glass"
                style={{ padding:'12px 28px', borderRadius:14, fontSize:14, fontWeight:700, fontFamily:'Syne,sans-serif', color:'#fff', display:'flex', alignItems:'center', gap:8, transition:'all 0.2s' }}
                onMouseEnter={e=>{e.currentTarget.style.borderColor='rgba(108,143,255,0.35)';e.currentTarget.style.transform='scale(1.04)';e.currentTarget.style.backgroundColor='rgba(255,255,255,0.1)'}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor='var(--card-border)';e.currentTarget.style.transform='scale(1)';e.currentTarget.style.backgroundColor='transparent'}}>
                <Download size={15}/> Resume
              </a> */}
            </motion.div>

            {/* Social icons with glowing white border animation */}
            <motion.div id="soc-r" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.65,duration:0.6}}
              style={{ display:'flex', gap:12, justifyContent:'center' }}>
              {SOCIALS.map(({label,href,icon,color}) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass"
                  style={{ 
                    width:42, height:42, borderRadius:12, display:'flex', alignItems:'center', 
                    justifyContent:'center', color: color,
                    transition:'all 0.2s', backgroundColor:'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.3)',
                    position: 'relative'
                  }}
                  aria-label={label}
                  whileHover={{
                    scale: 1.08,
                    transition: { duration: 0.2 }
                  }}
                  onMouseEnter={e=>{
                    e.currentTarget.style.backgroundColor='rgba(255,255,255,0.12)';
                    e.currentTarget.style.borderColor='rgba(255,255,255,0.6)';
                  }}
                  onMouseLeave={e=>{
                    e.currentTarget.style.backgroundColor='rgba(255,255,255,0.05)';
                    e.currentTarget.style.borderColor='rgba(255,255,255,0.3)';
                  }}>
                  {/* Pulsing white ring animation around the icon */}
                  <motion.span
                    style={{
                      position: 'absolute',
                      inset: -3,
                      borderRadius: 14,
                      border: '1.5px solid rgba(255,255,255,0.5)',
                      pointerEvents: 'none'
                    }}
                    animate={{
                      scale: [1, 1.15, 1],
                      opacity: [0.6, 0.2, 0.6]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  {icon}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
