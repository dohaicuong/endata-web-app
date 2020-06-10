import React from 'react'
import ComboBoxField from 'components/Formik/ComboBoxField'
import renderField from '../renderField'
import EventIcon from '@material-ui/icons/Event'

import { useRefetchableFragment } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { useFormikContext } from 'formik'

import { RestorerRefetchQuery } from './__generated__/RestorerRefetchQuery.graphql'
import { Restorer_options$key } from './__generated__/Restorer_options.graphql'

type RestorerProps = {
  hasRestoration: boolean
  options: Restorer_options$key | null
}
const Restorer: React.FC<RestorerProps> = props => {
  const [options, refetch] = useRefetchableFragment<
    RestorerRefetchQuery,
    Restorer_options$key
  >(
    graphql`
      fragment Restorer_options on Query
        @refetchable(queryName: "RestorerRefetchQuery")
        @argumentDefinitions(
          companyId: { type: "[ID!]", defaultValue: "0" }
          postcode: { type: "String", defaultValue: "0" }
        ) {
        restorers: claimFilterOptions(
          where: {
            subject: "suppliers"
            insurers: $companyId
            postcode: $postcode
            portfolios: [Restoration]
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
    label: 'Restorer',
    name: 'portfolios[2].scopingSupplierId',
    options: options?.restorers ?? [],
    disabled: !props.hasRestoration || !selectedPostcode,
    required: true,
    startAdornment: <EventIcon />,
  })
}
export default Restorer
