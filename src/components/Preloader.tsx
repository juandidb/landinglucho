import { useEffect, useRef, useState } from 'react'

export default function Preloader() {
  const [visible, setVisible] = useState(true)
  const overlayRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    // Lock scroll while preloader visible
    if (visible) document.body.style.overflow = 'hidden'

    const finish = () => {
      // Start fade-out
      setVisible(false)
    }

    const onLoad = () => {
      // show for a short minimum time for perception
      setTimeout(() => finish(), 320)
    }

    if (document.readyState === 'complete') {
      onLoad()
    } else {
      window.addEventListener('load', onLoad)
    }

    const node = overlayRef.current
    const onTransitionEnd = (e: TransitionEvent) => {
      if (e.propertyName === 'opacity') {
        // remove overlay from DOM flow and restore scroll
        if (document.body) document.body.style.overflow = ''
        if (node) node.style.display = 'none'
      }
    }

    node?.addEventListener('transitionend', onTransitionEnd)

    return () => {
      window.removeEventListener('load', onLoad)
      node?.removeEventListener('transitionend', onTransitionEnd)
      document.body.style.overflow = ''
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div
      ref={overlayRef}
      className={`preloader-overlay ${visible ? 'preloader-visible' : 'preloader-hidden'}`}
      aria-hidden={visible ? 'false' : 'true'}
      role="status"
      aria-live="polite"
    >
      <div className="preloader-inner">
        <div className="preloader-logo" aria-hidden>
          {/* Logo animated */}
          <img src={import.meta.env.BASE_URL + 'assets/logo-navbar.svg'} alt="" className="preloader-logo-img" />
        </div>
        <p className="mt-3 text-sm text-slate-300">Cargando…</p>
      </div>
    </div>
  )
}
