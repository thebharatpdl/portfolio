import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const GROUPS = [
  { title:'Mobile', color:'#6c8fff', glow:'rgba(108,143,255,0.15)',
    skills:['React Native (CLI & Expo)','TypeScript','JavaScript (ES6+)','React Navigation','Redux Toolkit','AsyncStorage','WatermelonDB','Push Notifications'] },
  { title:'Backend', color:'#a78bfa', glow:'rgba(167,139,250,0.15)',
    skills:['Node.js','Express.js','REST APIs','JWT Authentication','Firebase','WebSocket (Socket.IO)','API Integration'] },
  { title:'Databases', color:'#34d399', glow:'rgba(52,211,153,0.15)',
    skills:['MongoDB','Firestore','MySQL','PostgreSQL'] },
  { title:'Frontend & UI/UX', color:'#f59e0b', glow:'rgba(245,158,11,0.12)',
    skills:['React.js','Next.js','HTML / CSS','Tailwind CSS','Styled Components','Flexbox','Lottie','Figma'] },
  { title:'AI / ML', color:'#f472b6', glow:'rgba(244,114,182,0.12)',
    skills:['Python','TensorFlow / Keras','OpenCV','CNN','SVM / KNN','Haar Cascades'] },
  { title:'Tools & DevOps', color:'#67e8f9', glow:'rgba(103,232,249,0.12)',
    skills:['Git & GitHub','VS Code','Jest','React Native Testing Library'] },
]

// Remove this if not used, or keep it for later
// const PROFICIENCY = [
//   { name:'React Native', pct:92, color:'#6c8fff' },
//   { name:'TypeScript', pct:88, color:'#a78bfa' },
//   { name:'JavaScript', pct:90, color:'#6c8fff' },
//   { name:'Node.js', pct:82, color:'#34d399' },
//   { name:'Firebase', pct:80, color:'#f59e0b' },
//   { name:'Python / ML', pct:75, color:'#f472b6' },
// ]

// Remove Bar component if not used
// function Bar({ name, pct, color, delay }: { name:string; pct:number; color:string; delay:number }) {
//   const { ref, inView } = useInView('-60px')
//   return (
//     <div ref={ref} style={{ marginBottom:20 }}>
//       <div style={{ display:'flex', justifyContent:'space-between', marginBottom:8 }}>
//         <span style={{ fontSize:13, color:'#fff', fontFamily:'DM Sans,sans-serif' }}>{name}</span>
//         <span style={{ fontSize:12, color, fontFamily:'Syne,sans-serif', fontWeight:600 }}>{pct}%</span>
//       </div>
//       <div style={{ height:5, borderRadius:99, background:'rgba(255,255,255,0.06)', overflow:'hidden' }}>
//         <motion.div
//           initial={{ width:0 }} animate={inView ? { width:`${pct}%` } : {}}
//           transition={{ duration:1.1, delay, ease:[0.25,0.46,0.45,0.94] }}
//           style={{ height:'100%', borderRadius:99, background:`linear-gradient(90deg,${color},${color}88)`, boxShadow:`0 0 8px ${color}60` }}
//         />
//       </div>
//     </div>
//   )
// }

function SkillCard({ g, i }: { g: typeof GROUPS[0]; i:number }) {
  const { ref, inView } = useInView('-60px')
  return (
    <motion.div ref={ref}
      initial={{ opacity:0, y:38 }} animate={inView ? { opacity:1, y:0 } : {}}
      transition={{ duration:0.6, delay:i*0.07, ease:[0.22,1,0.36,1] }}
      className="glass"
      style={{ borderRadius:20, padding:'24px 22px', transition:'all 0.3s', boxShadow: inView ? `0 0 35px ${g.glow}` : 'none' }}
      onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.borderColor=`${g.color}40`;(e.currentTarget as HTMLElement).style.transform='translateY(-3px)'}}
      onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.borderColor='var(--card-border)';(e.currentTarget as HTMLElement).style.transform='translateY(0)'}}>
      <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:18 }}>
        <div style={{ width:34, height:34, borderRadius:10, background:`${g.color}20`, display:'flex', alignItems:'center', justifyContent:'center' }}>
          <div style={{ width:9, height:9, borderRadius:'50%', background:g.color }}/>
        </div>
        <h3 style={{ fontFamily:'Syne,sans-serif', fontWeight:700, fontSize:14, color:g.color }}>{g.title}</h3>
      </div>
      <div style={{ display:'flex', flexWrap:'wrap', gap:7 }}>
        {g.skills.map(s => (
          <span key={s} style={{ fontSize:11, padding:'5px 11px', borderRadius:7, background:`${g.color}10`, border:`1px solid ${g.color}22`, color:'#fff' }}>{s}</span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const { ref, inView } = useInView('-80px')
  return (
    <section id="skills" style={{ padding:'100px 24px' }}>
      <div style={{ maxWidth:960, margin:'0 auto' }}>
        <motion.div ref={ref} initial={{ opacity:0, y:28 }} animate={inView ? { opacity:1, y:0 } : {}} transition={{ duration:0.7 }} style={{ marginBottom:56 }}>
          <p style={{ fontSize:11, textTransform:'uppercase', letterSpacing:'0.15em', color:'var(--a1)', fontFamily:'Syne,sans-serif', marginBottom:12 }}>What I work with</p>
          <h2 style={{ fontSize:'clamp(1.9rem,4.5vw,2.9rem)', fontWeight:800, letterSpacing:'-0.025em', color:'#fff' }}>Technical <span className="gradient-text">Skills</span></h2>
        </motion.div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(270px,1fr))', gap:18, marginBottom:60 }}>
          {GROUPS.map((g,i) => <SkillCard key={g.title} g={g} i={i}/>)}
        </div>
      </div>
    </section>
  )
}