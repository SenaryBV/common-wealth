import React from 'react'
import NewsCard from '../NewsCard'

const FilterResults = ({ data }) => {
  return data.length > 0 ? (
    <div className="news-filter__results news-grid">
      {data.map((article, index) => (
        <NewsCard key={index} article={article} />
      ))}
    </div>
  ) : (
    <div className="news-filter__no-results h2">Sorry, we couldn’t find any results</div>
  )
}

export default FilterResults
