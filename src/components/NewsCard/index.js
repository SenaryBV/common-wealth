import React from 'react'
import { Link } from '@reach/router'
import NewsData from './newsData'

const NewsCard = ({ to, title, date, author, label, url }) => {
  return (
    <Link className="news-card" to={to}>
      {label && <span className="news-label">{label}</span>}
      <div className="news-card__img">
        <img src={url} alt={title} />
      </div>
      <div className="news-card__info">
        <div className="news-card__title">{title}</div>
        <NewsData date={date} author={author} />
      </div>
    </Link>
  )
}

export default NewsCard
