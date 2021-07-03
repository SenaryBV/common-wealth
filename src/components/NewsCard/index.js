import React from 'react'
import { Link } from '@reach/router'
import NewsData from './newsData'

function truncate(source, size) {
  return source.length > size ? source.slice(0, size - 1) + '…' : source
}

const NewsCard = ({ article }) => {
  return (
    <>
      {article ? (
        <Link className="news-card" to={`/content/${article.articleSlug}`}>
          {/* {label && <span className="news-label">{label}</span>} */}
          <div className="news-card__img">
            {article.featureImage.url ? <img src={article.featureImage.url} alt={article.title} /> : ''}
          </div>
          <div className="news-card__info">
            <div className="news-card__title">{truncate(article.title, 38)}</div>
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
