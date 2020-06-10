import React from 'react'
import renderField from '../renderField'
import ComboBoxField from 'components/Formik/ComboBoxField'
import WhatshotIcon from '@material-ui/icons/Whatshot'

import { useFragment } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { CatCode_options$key } from './__generated__/CatCode_options.graphql'
import { useField } from 'formik'

type CatCodeProps = {
  options: CatCode_options$key | null
}
const CatCode: React.FC<CatCodeProps> = props => {
  const options = useFragment(
    graphql`
      fragment CatCode_options on Query {
        catCodes: claimFilterOptions(
          where: { subject: "catCodes", insurers: $companyId }
        ) {
          label: name
          value
        }
      }
    `,
    props.options
  )
  const fieldName = 'incidentDetail.catCodeId'
  const [, , { setValue }] = useField(fieldName)
  const [firstOption] = options?.catCodes?.slice(0) ?? []
  React.useEffect(() => {
    if (firstOption) {
      setValue(firstOption.value)
    }
    // eslint-disable-next-line
  }, [firstOption])

  return renderField({
    component: ComboBoxField,
    label: 'Catastrophe Code',
    name: 'incidentDetail.catCodeId',
    options: options?.catCodes ?? [],
    required: true,
    startAdornment: <WhatshotIcon />,
  })
}
export default CatCode
