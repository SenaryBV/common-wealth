import { useMediaQuery } from 'react-responsive'

export const desktopBreakpoint = 1024
export const tabletBreakpoint = 1023
export const mobileBreakpoint = 576

export const useMediaQueries = () => {
  const isDesktop = useMediaQuery({ query: `(min-width: ${desktopBreakpoint}px)` })
  const isTabletOrMobile = useMediaQuery({ query: `(max-width: ${tabletBreakpoint}px)` })
  const isMobile = useMediaQuery({ query: `(max-width: ${mobileBreakpoint}px)` })

  return {
    isDesktop,
    isTabletOrMobile,
    isMobile,
  }
}
