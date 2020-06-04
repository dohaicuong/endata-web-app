import React from 'react'
import { useClaimAction } from 'pages/Claim/actions'

const Report = () => {
  const { nextStep } = useClaimAction()

  return (
    <>
      Report
      <button onClick={nextStep.handleOpen}>next step</button>
    </>
  )
}
export default Report
