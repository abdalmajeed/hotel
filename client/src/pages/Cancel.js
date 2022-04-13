import { Container, Typography } from '@mui/material'
import React, { useState } from 'react'
import YotiButton from '../components/YotiButton'

const clientSdkId = 'bf446746-a5e1-4f68-bd5d-2746e7aead18'


const Cancel = () => {
  const [cancelResponse, setCancelResponse] = useState(null)

  const cancel = async (token) => {
    const res = await fetch('/cancel', {
      method: 'POST',
      body: JSON.stringify({ token }),
      headers: { 'Content-Type': 'application/json' }
    })
    const data = await res.json()
    // console.log(data)
    setCancelResponse(data)
  }

  const tokenHandler = async (token, done) => {
    console.log('token ', token)
    await cancel(token)
    done()
  }
  return (
    <Container>
      {cancelResponse === null && <YotiButton scenarioId={'f8acfe72-69bf-4304-8e75-81fa111b927a'} clientSdkId={clientSdkId} tokenHandler={tokenHandler} type="inline" qr={{ title: " Cancel" }} />}
      {cancelResponse && <Typography variant="h5">{cancelResponse.msg}</Typography>}
    </Container>
  )
}

export default Cancel
