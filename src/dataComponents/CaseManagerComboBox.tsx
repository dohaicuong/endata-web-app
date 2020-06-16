import React from 'react'
import ComboBoxField, {
  ComboBoxFieldProps,
} from 'components/Formik/ComboBoxField'
import EventIcon from '@material-ui/icons/Event'

import { useFragment } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { CaseManagerComboBox_data$key } from './__generated__/CaseManagerComboBox_data.graphql'

type CaseManagerComboBox = ComboBoxFieldProps & {
  data: CaseManagerComboBox_data$key | null
}
const CaseManagerComboBox: React.FC<CaseManagerComboBox> = props => {
  const data = useFragment(
    graphql`
      fragment CaseManagerComboBox_data on Query
        @argumentDefinitions(companyIds: { type: "[ID!]" }) {
        managers: claimFilterOptions(
          where: { subject: "managers", insurers: $companyIds }
        ) {
          label: name
          value
        }
      }
    `,
    props.data
  )

  const options = (data?.managers ?? []) as any
  return (
    <>
      <ComboBoxField
        startAdornment={<EventIcon />}
        options={options}
        {...props}
      />
    </>
  )
}
export default CaseManagerComboBox
