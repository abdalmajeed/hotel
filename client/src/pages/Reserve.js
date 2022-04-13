import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import SelectAttributes from '../components/SelectAttributes'
import YotiButton from '../components/YotiButton'

const clientSdkId = 'bf446746-a5e1-4f68-bd5d-2746e7aead18'

const Reserve = (props) => {
  const [selected, setSelected] = useState({
    mobile: true,
    email: false,
  });

  const [name, setName] = useState('')

  const [shareUrl, setShareUrl] = useState(null)

  const [selectRoute, setSelectRoute] = useState('select')

  const [reserveResponse, setReserveResponse] = useState(null)

  const getShareUrl = async () => {
    console.log(selected)
    const res = await fetch('/share_url', { method: 'POST', body: JSON.stringify(selected), headers: { 'Content-Type': 'application/json' } })
    const data = await res.json()
    setShareUrl(data.shareUrl)
    setSelectRoute('reserve')
  }

  const reserve = async (token) => {
    const res = await fetch('/reserve', {
      method: 'POST',
      body: JSON.stringify({ token, name }),
      headers: { 'Content-Type': 'application/json' }
    })
    const data = await res.json()
    console.log(data)
    setReserveResponse(data)
    setSelectRoute('done')
  }

  const tokenHandler = async (token, done) => {
    console.log('token ', token)
    await reserve(token)
    done()
  }
  return (
    <>
      {selectRoute === 'select' &&
        <>
          <SelectAttributes selected={selected} setSelected={setSelected} setName={setName} />
        </>
      }
      {(selectRoute === 'reserve' && shareUrl) && <YotiButton shareUrl={shareUrl} tokenHandler={tokenHandler} clientSdkId={clientSdkId} />}
      {selectRoute === 'done' && <div>{reserveResponse.name}, you have successfully reserved</div>}
      <Button disabled={selectRoute === 'select'} onClick={() => setSelectRoute('select')}>back</Button>
      <Button disabled={selectRoute !== 'select'} onClick={getShareUrl}>proceed</Button>
    </>
  )
}

export default Reserve;



