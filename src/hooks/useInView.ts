import { useEffect, useRef, useState } from 'react'

export function useInView(margin = '0px') {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    if (!ref.current) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { rootMargin: margin })
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [margin])
  return { ref, inView }
}
