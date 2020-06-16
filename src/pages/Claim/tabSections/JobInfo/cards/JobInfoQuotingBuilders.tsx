import React from 'react'

import { graphql } from 'babel-plugin-relay/macro'
import { useFragment } from 'react-relay/hooks'
import { JobInfoQuotingBuilders_options$key } from './__generated__/JobInfoQuotingBuilders_options.graphql'
import Card from 'components/Card'
import CheckboxGroupField from 'components/Formik/CheckboxGroupField'

type JobInfoQuotingBuildersProps = {
  options: JobInfoQuotingBuilders_options$key | null
  scopingSupplierId?: any
}
const JobInfoQuotingBuilders: React.FC<JobInfoQuotingBuildersProps> = props => {
  const options = useFragment(
    graphql`
      fragment JobInfoQuotingBuilders_options on Query
        @argumentDefinitions(
          companyIds: { type: "[ID!]" }
          postcode: { type: "String" }
        ) {
        quotingBuilders: claimFilterOptions(
          where: {
            subject: "suppliers"
            insurers: $companyIds
            postcode: $postcode
            portfolios: [Building]
          }
        ) {
          label: name
          value
        }
      }
    `,
    props.options
  )

  const builderOptions = props.scopingSupplierId
    ? options?.quotingBuilders?.filter(
        // TODO: change to strict compare !== when the api is fixed
        // eslint-disable-next-line
        option => option?.value != props.scopingSupplierId
      )
    : options?.quotingBuilders

  return (
    <Card title="Quoting Builders">
      <CheckboxGroupField
        maxHeight="15rem"
        name="portfolios[0].quotingSupplierIds"
        options={builderOptions as any}
      />
    </Card>
  )
}
export default JobInfoQuotingBuilders
