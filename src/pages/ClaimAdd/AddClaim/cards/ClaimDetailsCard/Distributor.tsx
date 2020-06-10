import React from 'react'
import renderField from '../renderField'
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn'
import ComboBoxField from 'components/Formik/ComboBoxField'

import { useFragment } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { Distributor_options$key } from './__generated__/Distributor_options.graphql'

type DistributorProps = {
  unMountOn: boolean
  options: Distributor_options$key | null
}
const Distributor: React.FC<DistributorProps> = props => {
  const options = useFragment(
    graphql`
      fragment Distributor_options on Query {
        distributors: claimFilterOptions(
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
    label: 'Distributor',
    name: 'policyTypeId',
    options: options?.distributors ?? [],
    unMountOn: props.unMountOn,
    required: true,
    startAdornment: <AssignmentTurnedInIcon />,
  })
}
export default Distributor
