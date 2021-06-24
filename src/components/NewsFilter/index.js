import React, { useState } from 'react'
import FilterResults from './results'
import { Form } from 'react-bootstrap'
import classNames from 'classnames'

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
          <Form.Check
            className={classNames('news-filter__value', value == null && 'show-all')}
            type="radio"
            id="filter-all"
          >
            <Form.Check.Input onChange={() => setStates(null)} name="filter-news" type="radio" />
            <Form.Check.Label className="news-label"> All Categories</Form.Check.Label>
          </Form.Check>
          {values.map((value) => (
            <Form.Check className="news-filter__value" type="radio" id={`filter-${value}`}>
              <Form.Check.Input onChange={() => setStates(value)} name="filter-news" type="radio" />
              <Form.Check.Label className="news-label">{value}</Form.Check.Label>
            </Form.Check>
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
