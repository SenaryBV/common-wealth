import React, { useContext } from 'react'
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

const AccordionExt = ({ title, data }) => {
  return (
    <div className="accordion">
      <h2 className="accordion__title h2">{title}</h2>
      <div className="accordion__container">
        <Accordion>
          {data.map(({ header, content }) => (
            <div className="accordion__section" key={header}>
              <CustomToggle eventKey={header}>
                <div dangerouslySetInnerHTML={{ __html: header }}></div>
                <Icon name="chevron-up" size={[17, 10]} />
              </CustomToggle>
              <Accordion.Collapse className="accordion__collapse" eventKey={header}>
                <div dangerouslySetInnerHTML={{ __html: content }}></div>
              </Accordion.Collapse>
            </div>
          ))}
        </Accordion>
      </div>
    </div>
  )
}

export default AccordionExt
