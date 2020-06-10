import React from 'react'
import renderField from '../renderField'
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn'
import ComboBoxField from 'components/Formik/ComboBoxField'

import { useFragment } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { PdsReference_options$key } from './__generated__/PdsReference_options.graphql'

type PdsReferenceProps = {
  unMountOn: boolean
  options: PdsReference_options$key | null
}
const PdsReference: React.FC<PdsReferenceProps> = props => {
  const options = useFragment(
    graphql`
      fragment PdsReference_options on Query {
        pdsReferences: claimFilterOptions(
          where: { subject: "policyCovers", insurers: $companyId }
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
    label: 'PDS Reference',
    name: 'policyCoverId',
    options: options?.pdsReferences ?? [],
    unMountOn: props.unMountOn,
    required: true,
    startAdornment: <AssignmentTurnedInIcon />,
  })
}
export default PdsReference
