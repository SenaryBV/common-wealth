import React from 'react'

export const SectionHeader = ({ title, descr }) => {
  return (
    <div className="section-header">
      <h2 className="section-header__title">{title}</h2>
      <p className="section-header__descr">{descr}</p>
    </div>
  )
}

export default SectionHeader
