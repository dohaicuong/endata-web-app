import React from 'react'
import { useFragment, useLazyLoadQuery } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { JobInfo_claim$key } from './__generated__/JobInfo_claim.graphql'
import { JobInfoOptionQuery } from './__generated__/JobInfoOptionQuery.graphql'

import ClaimDetailsCard from './cards/JobInfoClaimDetails'
import { Form, Formik } from 'formik'

type JobInfoProps = {
  claim: JobInfo_claim$key | null
}
const JobInfo: React.FC<JobInfoProps> = props => {
  const claim = useFragment(
    graphql`
      fragment JobInfo_claim on ClaimJob {
        insurer {
          companyId
        }
        ...JobInfoClaimDetails_claim
      }
    `,
    props.claim
  )

  // $postcode: String
  const companyId = String(claim?.insurer?.companyId) ?? null
  const optionData = useLazyLoadQuery<JobInfoOptionQuery>(
    graphql`
      query JobInfoOptionQuery($companyId: [ID!]) {
        ...JobInfoClaimDetails_optionData
      }
    `,
    {
      companyId: companyId ? [companyId] : null,
    }
  )

  return (
    <Formik
      initialValues={{}}
      onSubmit={values => {
        console.log(values)
      }}
    >
      <Form style={{ marginTop: 8 }}>
        <ClaimDetailsCard claim={claim} optionData={optionData} />
      </Form>
    </Formik>
  )
}
export default JobInfo
