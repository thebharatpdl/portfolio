import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const GH = ({ size=14 }: { size?:number }) => (
  <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
  </svg>
)

const PROJECTS = [
  {
    num:'01', title:'Real-Time Emotion & Identity Detection',
    desc:'Real-time facial recognition and emotion detection using OpenCV for live video processing. Custom CNN trained on augmented FER-2013 dataset achieving 74.78% test accuracy across 7 human emotions.',
    stack:['Python','OpenCV','TensorFlow/Keras','CNN','SVM/KNN','Haar Cascades'],
    highlights:['74.78% accuracy — 7 emotion classes','Haar Cascade + SVM/KNN identity matching','Auto CSV generation & chart analytics'],
    github:'https://github.com/fred-system',
    color:'#f472b6', glow:'rgba(244,114,182,0.1)',
  },
  {
    num:'02', title:'Anonymous Social Feed & Chat Platform',
    desc:'Real-time social platform with live feed, 1-on-1 messaging, typing indicators, and read receipts via Socket.io. 15+ REST endpoints with Redux Toolkit state management.',
    stack:['React Native','TypeScript','Socket.io','Node.js','Express','MongoDB','Redux Toolkit'],
    highlights:['Real-time messaging with Socket.io','15+ REST API endpoints','FlatList & state optimization'],
    github:'https://github.com/anonymous-feed',
    color:'#6c8fff', glow:'rgba(108,143,255,0.1)',
  },
  {
    num:'03', title:'Expense Tracker',
    desc:'Real-time expense tracking with dynamic balance calculation. Offline-first architecture using Redux Persist and Firestore synchronisation for seamless connectivity.',
    stack:['React Native','TypeScript','Firebase','Redux Toolkit','Node.js'],
    highlights:['Offline-first with Redux Persist','Firestore real-time sync','Reusable TypeScript components'],
    github:'https://github.com/expense-tracker',
    color:'#34d399', glow:'rgba(52,211,153,0.1)',
  },
]

function Card({ p, i }: { p: typeof PROJECTS[0]; i:number }) {
  const { ref, inView } = useInView('-60px')
  return (
    <motion.div ref={ref}
      initial={{ opacity:0, y:44 }} animate={inView ? { opacity:1, y:0 } : {}}
      transition={{ duration:0.7, delay:i*0.1, ease:[0.22,1,0.36,1] }}
      className="glass"
      style={{ borderRadius:22, padding:'28px 26px', position:'relative', overflow:'hidden', transition:'all 0.3s', cursor:'default' }}
      onMouseEnter={e=>{const el=e.currentTarget as HTMLElement;el.style.borderColor=`${p.color}40`;el.style.boxShadow=`0 24px 70px ${p.glow}`;el.style.transform='translateY(-4px)'}}
      onMouseLeave={e=>{const el=e.currentTarget as HTMLElement;el.style.borderColor='var(--card-border)';el.style.boxShadow='none';el.style.transform='translateY(0)'}}>

      {/* Top accent line */}
      <div style={{ position:'absolute', top:0, left:0, right:0, height:2, background:`linear-gradient(90deg,${p.color},transparent)` }}/>

      {/* Number watermark */}
      <span style={{ position:'absolute', top:14, right:18, fontSize:72, fontFamily:'Syne,sans-serif', fontWeight:800, color:p.color, opacity:0.07, pointerEvents:'none', lineHeight:1 }}>{p.num}</span>

      {/* 👇 Title color changed to white */}
      <h3 style={{ fontFamily:'Syne,sans-serif', fontWeight:700, fontSize:18, color:'#fff', marginBottom:12, lineHeight:1.3, position:'relative' }}>{p.title}</h3>

      {/* 👇 Description color changed to #ccc */}
      <p style={{ fontSize:13.5, color:'#ccc', lineHeight:1.75, marginBottom:18 }}>{p.desc}</p>

      <ul style={{ marginBottom:20, paddingLeft:0, listStyle:'none', display:'flex', flexDirection:'column', gap:7 }}>
        {p.highlights.map(h => (
          // 👇 Highlight text color changed to #ccc
          <li key={h} style={{ display:'flex', alignItems:'flex-start', gap:8, fontSize:12.5, color:'#ccc' }}>
            <span style={{ width:6, height:6, borderRadius:'50%', background:p.color, marginTop:5, flexShrink:0 }}/>
            {h}
          </li>
        ))}
      </ul>

      <div style={{ display:'flex', flexWrap:'wrap', gap:7, marginBottom:22 }}>
        {p.stack.map(t => (
          // 👇 Stack tags text color changed to white, background slightly brighter
          <span key={t} style={{ fontSize:11, padding:'5px 11px', borderRadius:8, background:`${p.color}18`, border:`1px solid ${p.color}30`, color:'#fff' }}>{t}</span>
        ))}
      </div>

      <a href={p.github} target="_blank" rel="noopener noreferrer"
        style={{ display:'inline-flex', alignItems:'center', gap:7, fontSize:12.5, fontWeight:600, color:'#ccc', transition:'color 0.2s' }}
        onMouseEnter={e=>(e.currentTarget.style.color=p.color)}
        onMouseLeave={e=>(e.currentTarget.style.color='#ccc')}>
        <GH/> View on GitHub
      </a>
    </motion.div>
  )
}

export default function Projects() {
  const { ref, inView } = useInView('-80px')
  return (
    <section id="projects" style={{ padding:'100px 24px', background:'rgba(255,255,255,0.01)' }}>
      <div style={{ maxWidth:960, margin:'0 auto' }}>
        <motion.div ref={ref} initial={{ opacity:0, y:28 }} animate={inView ? { opacity:1, y:0 } : {}} transition={{ duration:0.7 }} style={{ marginBottom:56 }}>
          <p style={{ fontSize:11, textTransform:'uppercase', letterSpacing:'0.15em', color:'var(--a2)', fontFamily:'Syne,sans-serif', marginBottom:12 }}>What I've built</p>
          {/* 👇 Heading color changed to white */}
          <h2 style={{ fontSize:'clamp(1.9rem,4.5vw,2.9rem)', fontWeight:800, letterSpacing:'-0.025em', color:'#fff' }}>Featured <span className="gradient-text">Projects</span></h2>
        </motion.div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))', gap:22 }}>
          {PROJECTS.map((p,i) => <Card key={p.title} p={p} i={i}/>)}
        </div>
        <motion.div initial={{ opacity:0 }} animate={inView ? { opacity:1 } : {}} transition={{ delay:0.5 }}
          style={{ textAlign:'center', marginTop:44 }}>
          <a href="https://github.com/thebharatpdl" target="_blank" rel="noopener noreferrer" className="glass"
            style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'12px 28px', borderRadius:14, fontSize:13, color:'#ccc', transition:'all 0.2s' }}
            onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.color='var(--a1)';(e.currentTarget as HTMLElement).style.borderColor='rgba(108,143,255,0.35)'}}
            onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.color='#ccc';(e.currentTarget as HTMLElement).style.borderColor='var(--card-border)'}}>
            <GH size={15}/> View all on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}