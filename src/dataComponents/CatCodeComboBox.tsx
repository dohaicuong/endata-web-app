import React from 'react'

import ComboBoxField, {
  ComboBoxFieldProps,
} from 'components/Formik/ComboBoxField'
import WhatshotIcon from '@material-ui/icons/Whatshot'

import { useFragment } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { CatCodeComboBox_data$key } from './__generated__/CatCodeComboBox_data.graphql'

type CatCodeComboBoxProps = ComboBoxFieldProps & {
  data: CatCodeComboBox_data$key | null
}
const CatCodeComboBox: React.FC<CatCodeComboBoxProps> = props => {
  const data = useFragment(
    graphql`
      fragment CatCodeComboBox_data on Query
        @argumentDefinitions(companyIds: { type: "[ID!]" }) {
        catCodes: claimFilterOptions(
          where: { subject: "catCodes", insurers: $companyIds }
        ) {
          label: name
          value
        }
      }
    `,
    props.data
  )

  const options = (data?.catCodes ?? []) as any
  return (
    <ComboBoxField
      startAdornment={<WhatshotIcon />}
      options={options}
      {...props}
    />
  )
}
export default CatCodeComboBox
