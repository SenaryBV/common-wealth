import React from 'react'

const NewsData = ({ date, author }) => {
  return (
    <div className="news-data">
      <span className="news-date__data">{date}</span>
      {author && (
        <>
          <span className="news-data__divider"></span>
          <span className="news-data__author">{author}</span>
        </>
      )}
    </div>
  )
}

export default NewsData
