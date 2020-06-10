import React from 'react'
import renderField from '../renderField'
import ComboBoxField from 'components/Formik/ComboBoxField'
import RestorePageIcon from '@material-ui/icons/RestorePage'

import { useFragment } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'

type LossAdjusterProps = {
  options: any | null
  unMountOn: boolean
}
const LossAdjuster: React.FC<LossAdjusterProps> = props => {
  const options = useFragment(
    graphql`
      fragment LossAdjuster_options on Query {
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
    label: 'BC/BRC/Loss Adjuster',
    name: 'brcId',
    options: options?.managers ?? [],
    required: true,
    unMountOn: props.unMountOn,
    startAdornment: <RestorePageIcon />,
  })
}
export default LossAdjuster
