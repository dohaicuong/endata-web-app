import React from 'react'
import Card from 'components/Card'
import EditorField from 'components/Formik/EditorField'

const ClaimDescriptionCard = () => {
  return (
    <Card title="Claim Description">
      <EditorField name="claimDescription" required />
    </Card>
  )
}

export default ClaimDescriptionCard
