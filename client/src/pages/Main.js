import { Button, Container } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => {

  return (
    <Container>
      <nav>
        <Link to="/reserve">
          <Button variant="outlined" size="large">reserve</Button>
        </Link>
        <Link to="/check">
          <Button variant="outlined" size="large" style={{ textDecoration: 'none' }}>check</Button>
        </Link>
        <Link to="/cancel">
          <Button variant="outlined" size="large">cancel</Button>
        </Link>
      </nav>
    </Container>

  )
}

export default Main
