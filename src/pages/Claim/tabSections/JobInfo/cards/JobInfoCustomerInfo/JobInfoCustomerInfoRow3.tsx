import React from 'react'
import _states from 'resources/data/states'
import _claimCategories from 'resources/data/claimCategories'

import FormGridField from 'components/FormGridField'
import TextField from 'components/Formik/TextField'
import SwitchField from 'components/Formik/SwitchField'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import SelectField from 'components/Formik/SelectField'

import { useFormikContext } from 'formik'
import { useFragment } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { JobInfoCustomerInfoRow3_claim$key } from './__generated__/JobInfoCustomerInfoRow3_claim.graphql'

type JobInfoCustomerInfoRow3Props = {
  claim: JobInfoCustomerInfoRow3_claim$key | null
}
const JobInfoCustomerInfoRow3: React.FC<JobInfoCustomerInfoRow3Props> = props => {
  const claim = useFragment(
    graphql`
      fragment JobInfoCustomerInfoRow3_claim on ClaimJob {
        incidentDetail {
          riskAddress {
            suburb
            state
            postcode
          }
          habitableProperty
          category
        }

        insurer {
          removeHabitableAsbestos
          hideCategoryOfClaim
        }
      }
    `,
    props.claim
  )

  const { setFieldValue } = useFormikContext()
  React.useEffect(() => {
    const riskAddress = claim?.incidentDetail?.riskAddress
    setFieldValue('riskAddressSuburb', riskAddress?.suburb, false)
    setFieldValue('riskAddressState', riskAddress?.state, false)
    setFieldValue('riskAddressPostcode', riskAddress?.postcode, false)
    setFieldValue(
      'habitableProperty',
      claim?.incidentDetail?.habitableProperty,
      false
    )
    setFieldValue('category', claim?.incidentDetail?.category, false)
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <FormGridField
        md={2}
        component={
          <TextField
            label="Suburb"
            name="riskAddressSuburb"
            required
            startAdornment={<LocationOnIcon />}
          />
        }
      />
      <FormGridField
        md={2}
        component={
          <SelectField
            label="State"
            name="riskAddressState"
            required
            options={_states}
            startAdornment={<LocationOnIcon />}
          />
        }
      />
      <FormGridField
        md={2}
        component={
          <TextField
            label="Postcode"
            name="riskAddressPostcode"
            required
            startAdornment={<LocationOnIcon />}
          />
        }
      />

      <FormGridField
        unMountOn={claim?.insurer?.removeHabitableAsbestos ?? false}
        component={
          <SwitchField label="Home Habitable?" name="habitableProperty" />
        }
      />
      <FormGridField
        unMountOn={claim?.insurer?.hideCategoryOfClaim ?? false}
        component={
          <SelectField
            label="Category of Claim"
            name="category"
            options={_claimCategories}
          />
        }
      />
    </>
  )
}
export default JobInfoCustomerInfoRow3
