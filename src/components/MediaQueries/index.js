import { useMediaQuery } from 'react-responsive'

const desktopBreakpoint = 1024
const tabletBreakpoint = 1023
const mobileBreakpoint = 576

const MediaQueries = () => {
  const isDesktop = useMediaQuery({ query: `(min-width: ${desktopBreakpoint}px)` })
  const isTabletOrMobile = useMediaQuery({ query: `(max-width: ${tabletBreakpoint}px)` })
  const isMobile = useMediaQuery({ query: `(max-width: ${mobileBreakpoint}px)` })

  return {
    isDesktop,
    isTabletOrMobile,
    isMobile,
  }
}

export default MediaQueries
