import React, { useState, useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import FilterResults from './results'
import { Form } from 'react-bootstrap'
import classNames from 'classnames'

//constants
import { values } from './constants'
import { NEWS_DATA } from '../NewsCard/constants'

const NewsFilter = (props) => {
  const [value, setValue] = useState(null)
  const [newData, setNewData] = useState([])
  // const [data, setData] = useState(newData)

  const query = useStaticQuery(graphql`
    query MyQuery {
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

  console.log(query.allDatoCmsArticle.nodes)
  // setNewData(query.allDatoCmsArticle.nodes)

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

  function setStates(value) {
    const filteredData = value === null ? newData : newData.filter(({ title }) => title === value)
    setValue(value)
    setNewData(filteredData)
  }

  return (
    <div className="news-filter">
      <div className="news-filter__controls">
        <div className="news-filter__values">
          <Form.Check
            className={classNames('news-filter__value', value == null && 'show-all')}
            type="radio"
            id="filter-all"
          >
            <Form.Check.Input onChange={() => setStates(null)} name="filter-news" type="radio" />
            <Form.Check.Label className="news-label"> All Categories</Form.Check.Label>
          </Form.Check>
          {values.map((value, index) => (
            <Form.Check key={index} className="news-filter__value" type="radio" id={`filter-${value}`}>
              <Form.Check.Input onChange={() => setStates(value)} name="filter-news" type="radio" />
              <Form.Check.Label className="news-label">{value}</Form.Check.Label>
            </Form.Check>
          ))}
        </div>
        <div className="news-filter__search">
          <Form.Control
            bsPrefix="news-filter__input"
            type="text"
            placeholder="Search"
            onChange={() => setNewData([])}
          />
        </div>
      </div>
      <FilterResults data={query.allDatoCmsArticle.nodes} />
    </div>
  )
}

// export const query = graphql`
//   query MyQueryNew {
//     allDatoCmsArticle {
//       nodes {
//         id
//         date
//         title
//       }
//     }
//   }
// `
export default NewsFilter
