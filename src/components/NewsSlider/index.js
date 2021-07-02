import React, { useState, useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import { Link } from '@reach/router'
import NewsCard from '../NewsCard'

const NewsSlider = ({ title, cta, visibleCount, data }) => {
  // const [newData, setNewData] = useState([])

  const query = useStaticQuery(graphql`
    query smallQuery {
      allDatoCmsArticle {
        nodes {
          id
          date
          title
          image {
            url
          }
        }
      }
    }
  `)

  // useEffect(() => {
  //   fetch('https://graphql.datocms.com/', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Accept: 'application/json',
  //       Authorization: 'Bearer 18d7ede18f2607bebe88cadb522b0a',
  //     },
  //     body: JSON.stringify({
  //       query: '{ allArticles { articleSlug author date title body(markdown: true) featureImage { url } } }',
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setNewData(res.data.allArticles)
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  // }, [])

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
        {query.allDatoCmsArticle.nodes.slice(0, 3).map((article) => (
          <NewsCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  )
}

export default NewsSlider
