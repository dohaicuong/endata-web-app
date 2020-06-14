import React from 'react'

import FormGridField from 'components/FormGridField'
import TextField from 'components/Formik/TextField'
import SwitchField from 'components/Formik/SwitchField'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import EmailIcon from '@material-ui/icons/Email'

import { useFormikContext } from 'formik'
import { useFragment } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { JobInfoCustomerInfoRow2_claim$key } from './__generated__/JobInfoCustomerInfoRow2_claim.graphql'

type JobInfoCustomerInfoRow2Props = {
  claim: JobInfoCustomerInfoRow2_claim$key | null
}
const JobInfoCustomerInfoRow2: React.FC<JobInfoCustomerInfoRow2Props> = props => {
  const claim = useFragment(
    graphql`
      fragment JobInfoCustomerInfoRow2_claim on ClaimJob {
        insurer {
          setupcustomerlogin
        }

        incidentDetail {
          riskAddress {
            line1
            line2
          }
        }
        requireCustomLogin
        customLoginEmail
      }
    `,
    props.claim
  )

  const { setFieldValue } = useFormikContext()
  React.useEffect(() => {
    const riskAddress = claim?.incidentDetail?.riskAddress
    const address = `${riskAddress?.line1}${
      riskAddress?.line2 ? `, ${riskAddress?.line2}` : ''
    }`
    setFieldValue('riskAddressLine1', address, false)

    setFieldValue('requireCustomLogin', claim?.requireCustomLogin, false)
    setFieldValue('customLoginEmail', claim?.customLoginEmail, false)
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <FormGridField
        md={6}
        component={
          <TextField
            label="Property/Risk Address"
            name="riskAddressLine1"
            required
            startAdornment={<LocationOnIcon />}
          />
        }
      />
      <FormGridField
        md={2}
        unMountOn={claim?.insurer?.setupcustomerlogin !== 1}
        component={
          <SwitchField label="Customer Login?" name="requireCustomLogin" />
        }
      />
      <FormGridField
        md={4}
        unMountOn={claim?.insurer?.setupcustomerlogin !== 1}
        component={
          <TextField
            label="Customer Email"
            name="customLoginEmail"
            placeholder="e.g. Email Address"
            startAdornment={<EmailIcon />}
          />
        }
      />
    </>
  )
}
export default JobInfoCustomerInfoRow2
