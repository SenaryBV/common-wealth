import React from 'react'
import { Link } from '@reach/router'
import NewsCard from '../NewsCard'

const NewsSlider = ({ title, cta, visibleCount, data }) => {
  const { attr, name } = cta
  const slicedData = data.length > visibleCount ? data.slice(0, visibleCount) : data

  return (
    <div className="news-slider">
      <div className="news-slider__header">
        <div className="news-slider__title h2">{title}</div>
        <div className="news-slider__cta">
          <Link {...attr}>{name}</Link>
        </div>
      </div>
      <div className="news-slider__slider news-grid">
        {slicedData.map((props) => (
          <NewsCard key={props.id} {...props} />
        ))}
      </div>
    </div>
  )
}

export default NewsSlider
