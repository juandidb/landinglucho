import { useEffect } from 'react'

export default function useReveal() {
  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const target = entry.target as HTMLElement

          if (target.classList.contains('reveal-group')) {
            const children = Array.from(target.querySelectorAll('.reveal')) as HTMLElement[]
            /* increase stagger to 300ms per child for a more relaxed entrance */
            children.forEach((el, i) => {
              el.style.transitionDelay = `${i * 300}ms`
              el.classList.add('revealed')
            })
            observer.unobserve(target)
            return
          }

          // Individual reveal
          target.classList.add('revealed')
          observer.unobserve(target)
        })
      },
      {
        root: null,
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.08,
      }
    )

    const els = Array.from(document.querySelectorAll('.reveal, .reveal-group'))
    els.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}
