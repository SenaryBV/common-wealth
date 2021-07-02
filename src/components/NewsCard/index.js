import React from 'react'
import { Link } from '@reach/router'
import NewsData from './newsData'

const NewsCard = ({ article }) => {
  return (
    <>
      {article ? (
        <Link className="news-card" to={`/content/${article.id}`}>
          {/* {label && <span className="news-label">{label}</span>} */}
          <div className="news-card__img">
            {article.image.url ? <img src={article.image.url} alt={article.title} /> : ''}
          </div>
          <div className="news-card__info">
            <div className="news-card__title">{article.title}</div>
            <NewsData date={article.date} author={article.author} />
          </div>
        </Link>
      ) : (
        ''
      )}
    </>
  )
}

export default NewsCard
