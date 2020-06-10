import React from 'react'
import renderField from '../renderField'
import ComboBoxField from 'components/Formik/ComboBoxField'
import EventIcon from '@material-ui/icons/Event'

import { useFragment } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { CaseManager_options$key } from './__generated__/CaseManager_options.graphql'

type CaseManagerProps = {
  options: CaseManager_options$key | null
}
const CaseManager: React.FC<CaseManagerProps> = props => {
  const options = useFragment(
    graphql`
      fragment CaseManager_options on Query {
        managers: claimFilterOptions(
          where: { subject: "managers", insurers: $companyId }
        ) {
          label: name
          value
        }
      }
    `,
    props.options
  )

  return renderField({
    component: ComboBoxField,
    label: 'Case Manager',
    name: 'casemanagerId',
    options: options?.managers ?? [],
    required: true,
    startAdornment: <EventIcon />,
  })
}
export default CaseManager
