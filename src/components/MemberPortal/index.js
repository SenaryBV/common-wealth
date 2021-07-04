import React from 'react'
import Button from 'react-bootstrap/Button'
import { Link } from 'gatsby'

const MemberPortal = () => {
  return (
    <Button
      size="sm"
      variant="outline-primary"
      as={Link}
      to="https://commonwealth.senary.xyz/#/members"
      target="_blank"
    >
      Member Portal
    </Button>
  )
}

export default MemberPortal
