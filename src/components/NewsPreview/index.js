import React from 'react'
import { Link } from '@reach/router'
import NewsData from '../NewsCard/newsData'
import Icon from '../Icon'

const NewsPreview = ({ src, label, date, author, title, descr, cta }) => {
  return (
    <div className="news-preview">
      <div className="news-preview__img">
        <img src={src} alt={title} />
      </div>
      <div className="news-preview__main">
        <div className="news-preview__label">
          <span className="news-label">{label}</span>
        </div>
        <div className="news-preview__data">
          <NewsData date={date} author={author} />
        </div>
        <h2 className="news-preview__title">{title}</h2>
        <div className="news-preview__descr">
          <div dangerouslySetInnerHTML={{ __html: descr }}></div>
        </div>
        <div className="news-preview__cta">
          <Link className="cta-more" {...cta.attr}>
            {cta.name}
            <Icon name="arrow-right" size={[13, 8]} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NewsPreview
