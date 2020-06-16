import React from 'react'

import { graphql } from 'babel-plugin-relay/macro'
import { useFragment } from 'react-relay/hooks'
import { JobInfoQuotingRestorers_options$key } from './__generated__/JobInfoQuotingRestorers_options.graphql'
import Card from 'components/Card'
import CheckboxGroupField from 'components/Formik/CheckboxGroupField'

type JobInfoQuotingRestorersProps = {
  options: JobInfoQuotingRestorers_options$key | null
  scopingSupplierId?: any
}
const JobInfoQuotingRestorers: React.FC<JobInfoQuotingRestorersProps> = props => {
  const options = useFragment(
    graphql`
      fragment JobInfoQuotingRestorers_options on Query
        @argumentDefinitions(
          companyIds: { type: "[ID!]" }
          postcode: { type: "String" }
        ) {
        quotingRestorers: claimFilterOptions(
          where: {
            subject: "suppliers"
            insurers: $companyIds
            postcode: $postcode
            portfolios: [Restoration]
          }
        ) {
          label: name
          value
        }
      }
    `,
    props.options
  )

  const restorerOptions = props.scopingSupplierId
    ? options?.quotingRestorers?.filter(
        // TODO: change to strict compare !== when the api is fixed
        // eslint-disable-next-line
        option => option?.value != props.scopingSupplierId
      )
    : options?.quotingRestorers

  return (
    <Card title="Quoting Restorers">
      <CheckboxGroupField
        maxHeight="15rem"
        name="portfolios[0].quotingSupplierIds"
        options={restorerOptions as any}
      />
    </Card>
  )
}
export default JobInfoQuotingRestorers
