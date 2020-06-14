import React from 'react'
import ComboBoxField, {
  ComboBoxFieldProps,
} from 'components/Formik/ComboBoxField'
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn'

import { useFragment } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { PdsReferenceComboBox_data$key } from './__generated__/PdsReferenceComboBox_data.graphql'

type PdsReferenceComboBoxProps = ComboBoxFieldProps & {
  data: PdsReferenceComboBox_data$key | null
}
const PdsReferenceComboBox: React.FC<PdsReferenceComboBoxProps> = props => {
  const data = useFragment(
    graphql`
      fragment PdsReferenceComboBox_data on Query
        @argumentDefinitions(companyIds: { type: "[ID!]" }) {
        pdsReferences: claimFilterOptions(
          where: { subject: "policyCovers", insurers: $companyIds }
        ) {
          label: name
          value
        }
      }
    `,
    props.data
  )

  const options = (data?.pdsReferences ?? []) as any
  return (
    <ComboBoxField
      startAdornment={<AssignmentTurnedInIcon />}
      options={options}
      {...props}
    />
  )
}
export default PdsReferenceComboBox
