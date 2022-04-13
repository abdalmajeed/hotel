import React, { useEffect, useRef } from 'react'

const YotiButton = props => {
  const buttonRef = useRef(null)
  const { shareUrl, tokenHandler, label, scenarioId, type, clientSdkId, qr } = props;
  console.log(props)

  useEffect(() => {
    const yoti = window.Yoti.Share.init({
      'elements': [{
        clientSdkId,
        domId: buttonRef.current.id,
        shareUrl,
        scenarioId,
        type,
        button: {
          label
        },
        qr,
        shareComplete: {
          closeDelay: 4000, // default to 4000, min of 500 - max of 10000
          tokenHandler
        }
      }]
    })

    return yoti.destroy
  }, [clientSdkId, label, qr, scenarioId, shareUrl, tokenHandler, type])
  return (
    <div
      style={{ height: props.height, width: props.width }}
      ref={buttonRef}
      id="button-ref"
    />
  )
}
export default YotiButton
