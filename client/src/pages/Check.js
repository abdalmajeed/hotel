import { Container, Typography } from '@mui/material'
import React, { useState } from 'react'
import YotiButton from '../components/YotiButton'

const clientSdkId = 'bf446746-a5e1-4f68-bd5d-2746e7aead18'


const Check = () => {
  const [checkResponse, setCheckResponse] = useState(null)

  const check = async (token) => {
    const res = await fetch('/check', {
      method: 'POST',
      body: JSON.stringify({ token }),
      headers: { 'Content-Type': 'application/json' }
    })
    const data = await res.json()
    // console.log(data)
    setCheckResponse(data)
  }

  const tokenHandler = async (token, done) => {
    // console.log('token ', token)
    await check(token)
    done()
  }
  return (
    <Container>
      {checkResponse === null && <YotiButton scenarioId={"624464aa-419a-4575-9b5c-cfcfe7ba7c31"} clientSdkId={clientSdkId} tokenHandler={tokenHandler} type={'inline'} />}
      <Typography variant="h5">
        {checkResponse === null ? '' : checkResponse.name ? `${checkResponse.name}, you have reserved` : 'You have no reservation'}
      </Typography>
    </Container>
  )
}

export default Check
