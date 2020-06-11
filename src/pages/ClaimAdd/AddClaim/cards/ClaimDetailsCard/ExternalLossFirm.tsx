import React from 'react'
import renderField from '../renderField'
import ComboBoxField from 'components/Formik/ComboBoxField'
import EventIcon from '@material-ui/icons/Event'

import { useRefetchableFragment } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { ExternalLossFirmRefetchQuery } from './__generated__/ExternalLossFirmRefetchQuery.graphql'
import { ExternalLossFirm_options$key } from './__generated__/ExternalLossFirm_options.graphql'
import { useFormikContext } from 'formik'

type ExternalLossFirmProps = {
  options: ExternalLossFirm_options$key | null
  defaultValue?: any
}
const ExternalLossFirm: React.FC<ExternalLossFirmProps> = props => {
  const [options, refetch] = useRefetchableFragment<
    ExternalLossFirmRefetchQuery,
    ExternalLossFirm_options$key
  >(
    graphql`
      fragment ExternalLossFirm_options on Query
        @refetchable(queryName: "ExternalLossFirmRefetchQuery")
        @argumentDefinitions(
          companyId: { type: "[ID!]" }
          postcode: { type: "String" }
        ) {
        adjusters: claimFilterOptions(
          where: {
            subject: "adjusters"
            insurers: $companyId
            postcode: $postcode
          }
        ) {
          label: name
          value
        }
      }
    `,
    props.options
  )

  const { values } = useFormikContext<any>()
  const selectedPostcode =
    values?.incidentDetail?.riskAddress?.postcode ?? undefined
  React.useEffect(() => {
    if (selectedPostcode === undefined) refetch({})

    if (selectedPostcode?.length === 4) {
      refetch({ postcode: String(selectedPostcode) })
    }
  }, [selectedPostcode, refetch])

  return renderField({
    component: ComboBoxField,
    label: 'External Loss Adjusting Firm',
    name: 'externalLossAdjusterId',
    options: options?.adjusters ?? [],
    startAdornment: <EventIcon />,
    defaultValue: props.defaultValue,
  })
}
export default ExternalLossFirm
