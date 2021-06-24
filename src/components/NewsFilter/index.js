import React, { useState } from 'react'
import FilterResults from './results'
import { Form } from 'react-bootstrap'

//constants
import { values } from './constants'
import { NEWS_DATA } from '../NewsCard/constants'

const NewsFilter = () => {
  const [value, setValue] = useState(null)
  const [data, setData] = useState(NEWS_DATA)

  function setStates(value) {
    const filteredData = value === null ? NEWS_DATA : NEWS_DATA.filter(({ label }) => label === value)

    setValue(value)
    setData(filteredData)
  }

  return (
    <div className="news-filter">
      <div className="news-filter__controls">
        <div className="news-filter__values">
          <span className="news-filter__value news-label is-active" onClick={() => setStates(null)}>
            All Categories
          </span>
          {values.map((value) => (
            <span key={value} className="news-filter__value news-label" onClick={() => setStates(value)}>
              {value === null ? 'All Categories' : value}
            </span>
          ))}
        </div>
        <div className="news-filter__search">
          <Form.Control bsPrefix="news-filter__input" type="text" placeholder="Search" onChange={() => setData([])} />
        </div>
      </div>
      <FilterResults data={data} />
    </div>
  )
}

export default NewsFilter
