import React from 'react'

import { useFormikContext } from 'formik'
import Card from 'components/Card'
import EditorField from 'components/Formik/EditorField'

import { graphql } from 'babel-plugin-relay/macro'
import { useFragment } from 'react-relay/hooks'
import { JobInfoClaimDescription_claim$key } from './__generated__/JobInfoClaimDescription_claim.graphql'

type JobInfoClaimDescriptionProps = {
  claim: JobInfoClaimDescription_claim$key | null
}
const JobInfoClaimDescription: React.FC<JobInfoClaimDescriptionProps> = props => {
  const claim = useFragment(
    graphql`
      fragment JobInfoClaimDescription_claim on ClaimJob {
        claimDescription
      }
    `,
    props.claim
  )

  const { setFieldValue } = useFormikContext<any>()
  React.useEffect(() => {
    setFieldValue('claimDescription', claim?.claimDescription || '', false)
    // eslint-disable-next-line
  }, [])

  return (
    <Card title="Claim Description">
      <EditorField name="claimDescription" />
    </Card>
  )
}
export default JobInfoClaimDescription
