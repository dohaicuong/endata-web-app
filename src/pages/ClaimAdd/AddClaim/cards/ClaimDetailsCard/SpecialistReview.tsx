import React from 'react'
import ComboBoxField from 'components/Formik/ComboBoxField'
import renderField from '../renderField'
import HomeIcon from '@material-ui/icons/Home'

import { useFragment } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { SpecialistReview_options$key } from './__generated__/SpecialistReview_options.graphql'

type SpecialistReviewProps = {
  unMountOn: boolean
  options: SpecialistReview_options$key | null
}
const SpecialistReview: React.FC<SpecialistReviewProps> = props => {
  const options = useFragment(
    graphql`
      fragment SpecialistReview_options on Query {
        internalAssessors: claimFilterOptions(
          where: { subject: "internalAssessors", insurers: $companyId }
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
    label: 'Specialist Review',
    name: 'homeAssessorId',
    options: options?.internalAssessors ?? [],
    unMountOn: props.unMountOn,
    startAdornment: <HomeIcon />,
  })
}
export default SpecialistReview
