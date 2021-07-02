import React from 'react'
import { Link } from '@reach/router'
import MemberCard from '.'

const MemberInfoWrapper = ({ title, descr, cta, members }) => {
  return (
    <div className="member-wrapper">
      <div className="member-wrapper__intro">
        <h2 className="member-wrapper__title h2">{title}</h2>
        <div className="member-wrapper__descr" dangerouslySetInnerHTML={{ __html: descr }}></div>
        <div className="member-wrapper__cta">
          {cta.map(({ name, attrs }) => (
            <Link key={name} {...attrs}>
              {name}
            </Link>
          ))}
        </div>
      </div>
      <div className="member-wrapper__members">
        {members.map((props) => (
          <MemberCard key={props.name} {...props} modifier="sm" />
        ))}
      </div>
    </div>
  )
}

export default MemberInfoWrapper
