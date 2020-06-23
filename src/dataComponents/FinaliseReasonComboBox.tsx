import React from 'react'

import ComboBoxField, {
  ComboBoxFieldProps,
} from 'components/Formik/ComboBoxField'

import { useFragment } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { FinaliseReasonComboBox_data$key } from './__generated__/FinaliseReasonComboBox_data.graphql'

type FinaliseReasonComboBoxProps = ComboBoxFieldProps & {
  data: FinaliseReasonComboBox_data$key | null
}
const FinaliseReasonComboBox: React.FC<FinaliseReasonComboBoxProps> = props => {
  const data = useFragment(
    graphql`
      fragment FinaliseReasonComboBox_data on Query {
        reasons: claimFilterOptions(where: { subject: "finalisedReasons" }) {
          label: name
          value
        }
      }
    `,
    props.data
  )

  const options = (data?.reasons ?? []) as any
  return <ComboBoxField options={options} {...props} />
}
export default FinaliseReasonComboBox
