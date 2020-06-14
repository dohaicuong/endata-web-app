import React from 'react'
import ComboBoxField, {
  ComboBoxFieldProps,
} from 'components/Formik/ComboBoxField'
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn'

import { useFragment } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { DistributorComboBox_data$key } from './__generated__/DistributorComboBox_data.graphql'

type DistributorComboBoxProps = ComboBoxFieldProps & {
  data: DistributorComboBox_data$key | null
}
const DistributorComboBox: React.FC<DistributorComboBoxProps> = props => {
  const data = useFragment(
    graphql`
      fragment DistributorComboBox_data on Query
        @argumentDefinitions(companyIds: { type: "[ID!]" }) {
        distributors: claimFilterOptions(
          where: { subject: "policyTypes", insurers: $companyIds }
        ) {
          label: name
          value
        }
      }
    `,
    props.data
  )

  const options = (data?.distributors ?? []) as any
  return (
    <ComboBoxField
      startAdornment={<AssignmentTurnedInIcon />}
      options={options}
      {...props}
    />
  )
}
export default DistributorComboBox
