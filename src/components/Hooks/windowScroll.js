import { useState, useEffect } from 'react'

export const useWindowScroll = () => {
  const [scrolled, setScrolled] = useState(false)
  const scrollListener = () => {
    setScrolled(window.pageYOffset > 0)
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollListener)

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])

  return {
    scrolled,
  }
}
