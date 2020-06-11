import React from 'react'

import renderField from 'pages/ClaimAdd/AddClaim/cards/renderField'
import RefNumberField from 'components/FormikCustom/RefNumberField'
import Info from 'components/Info'
import LinkIcon from '@material-ui/icons/Link'

import { useFragment } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { JobInfoClaimDetailsRow3_claim$key } from './__generated__/JobInfoClaimDetailsRow3_claim.graphql'

type JobInfoClaimDetailsRow3Props = {
  claim: JobInfoClaimDetailsRow3_claim$key | null
}
const JobInfoClaimDetailsRow3: React.FC<JobInfoClaimDetailsRow3Props> = props => {
  const claim = useFragment(
    graphql`
      fragment JobInfoClaimDetailsRow3_claim on ClaimJob {
        lodgeDate
      }
    `,
    props.claim
  )

  return (
    <>
      {renderField({
        component: Info,
        label: 'FNOL',
        value: claim?.lodgeDate,
      })}
    </>
  )
}
export default JobInfoClaimDetailsRow3
