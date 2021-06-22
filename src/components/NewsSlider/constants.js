import { tabletBreakpoint } from '../Hooks/mediaQueries'
import { NEWS_DATA } from '../NewsCard/constants'

export const NEWS_SLIDER = {
  title: 'Our Writing',
  cta: {
    name: 'Show all',
    attr: {
      className: 'btn btn-sm btn-primary',
      to: '/content/',
    },
  },
  visibleCount: 3,
  sliderBreakpoint: tabletBreakpoint,
  data: NEWS_DATA,
}
