import React from 'react'
import MemberCard from '.'
import SiteSection from '../SiteSection'

const MemberSections = ({ members }) => {
  return (
    <>
      {members.map((props, index) => {
        const isEven = index % 2

        return (
          <SiteSection key={props.name} modifier={isEven && 'green'}>
            <MemberCard key={props.name} modifier={isEven && 'reverse'} {...props} />
          </SiteSection>
        )
      })}
    </>
  )
}

export default MemberSections
