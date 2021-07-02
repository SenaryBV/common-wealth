import React, { useContext, useState, useEffect } from 'react'
import classNames from 'classnames'
import { Accordion } from 'react-bootstrap'
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle'
import AccordionContext from 'react-bootstrap/AccordionContext'
import Icon from '../Icon'

function CustomToggle({ children, eventKey, callback }) {
  const currentEventKey = useContext(AccordionContext)
  const decoratedOnClick = useAccordionToggle(eventKey)
  const isCurrentEventKey = currentEventKey === eventKey

  return (
    <button
      className={classNames('accordion__header', isCurrentEventKey && 'accordion__header--active')}
      type="button"
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  )
}

const AccordionExt = ({ title }) => {
  const [faqs, setFaqs] = useState()
  useEffect(() => {
    fetch('https://graphql.datocms.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Bearer 18d7ede18f2607bebe88cadb522b0a',
      },
      body: JSON.stringify({
        query: '{ faq { faqTitle faqContent } }',
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setFaqs(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  return (
    <div className="accordion">
      <h2 className="accordion__title h2">{title}</h2>
      <div className="accordion__container">
        {faqs ? (
          <Accordion>
            <div className="accordion__section" key="1">
              <CustomToggle eventKey="1">
                <div dangerouslySetInnerHTML={{ __html: faqs.faq.faqTitle }}></div>
                <Icon name="chevron-up" size={[17, 10]} />
              </CustomToggle>
              <Accordion.Collapse className="accordion__collapse" eventKey="1">
                <div dangerouslySetInnerHTML={{ __html: faqs.faq.faqContent }}></div>
              </Accordion.Collapse>
            </div>
          </Accordion>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default AccordionExt
