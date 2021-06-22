import React from 'react'
import { Link } from '@reach/router'

const NewsCard = ({ to, title, date, author, label, url }) => {
  return (
    <Link className="news-card" to={to}>
      {label && <span className="news-card__label">{label}</span>}
      <div className="news-card__img">
        <img src={url} alt={title} />
      </div>
      <div className="news-card__info">
        <div className="news-card__title">{title}</div>
        <div className="news-card__data">
          <span className="news-card__date">{date}</span>
          {author && (
            <>
              <span className="news-card__divider"></span>
              <span className="news-card__author">{author}</span>
            </>
          )}
        </div>
      </div>
    </Link>
  )
}

export default NewsCard
