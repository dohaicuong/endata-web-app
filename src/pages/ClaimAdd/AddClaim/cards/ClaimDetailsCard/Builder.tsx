import React from 'react'
import ComboBoxField from 'components/Formik/ComboBoxField'
import renderField from '../renderField'
import EventIcon from '@material-ui/icons/Event'

import { useRefetchableFragment } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { useFormikContext } from 'formik'

import { BuilderRefetchQuery } from './__generated__/BuilderRefetchQuery.graphql'
import { Builder_options$key } from './__generated__/Builder_options.graphql'

type BuilderProps = {
  hasBuilding: boolean
  options: Builder_options$key | null
}
const Builder: React.FC<BuilderProps> = props => {
  const [options, refetch] = useRefetchableFragment<
    BuilderRefetchQuery,
    Builder_options$key
  >(
    graphql`
      fragment Builder_options on Query
        @refetchable(queryName: "BuilderRefetchQuery")
        @argumentDefinitions(
          companyId: { type: "[ID!]", defaultValue: "0" }
          postcode: { type: "String", defaultValue: "0" }
        ) {
        builders: claimFilterOptions(
          where: {
            subject: "suppliers"
            insurers: $companyId
            postcode: $postcode
            portfolios: [Building]
          }
        ) {
          label: name
          value
        }
      }
    `,
    props.options
  )

  const { values } = useFormikContext<any>()
  const selectedPostcode = values.incidentDetail.riskAddress.postcode
  React.useEffect(() => {
    if (selectedPostcode?.length === 4) {
      refetch({ postcode: String(selectedPostcode) })
    }
  }, [selectedPostcode, refetch])

  return renderField({
    component: ComboBoxField,
    label: 'Builder',
    name: 'portfolios[0].scopingSupplierId',
    options: options?.builders ?? [],
    disabled: !props.hasBuilding || !selectedPostcode,
    required: true,
    startAdornment: <EventIcon />,
  })
}
export default Builder
