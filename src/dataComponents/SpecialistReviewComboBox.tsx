import React from 'react'
import ComboBoxField, {
  ComboBoxFieldProps,
} from 'components/Formik/ComboBoxField'
import HomeIcon from '@material-ui/icons/Home'

import { useFragment } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { SpecialistReviewComboBoxProps_data$key } from './__generated__/SpecialistReviewComboBoxProps_data.graphql'

type SpecialistReviewComboBoxProps = ComboBoxFieldProps & {
  data: SpecialistReviewComboBoxProps_data$key | null
}
const SpecialistReviewComboBox: React.FC<SpecialistReviewComboBoxProps> = props => {
  const data = useFragment(
    graphql`
      fragment SpecialistReviewComboBoxProps_data on Query
        @argumentDefinitions(companyIds: { type: "[ID!]" }) {
        internalAssessors: claimFilterOptions(
          where: { subject: "internalAssessors", insurers: $companyIds }
        ) {
          label: name
          value
        }
      }
    `,
    props.data
  )

  const options = (data?.internalAssessors ?? []) as any
  return (
    <ComboBoxField startAdornment={<HomeIcon />} options={options} {...props} />
  )
}
export default SpecialistReviewComboBox
