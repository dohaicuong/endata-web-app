import React from 'react'
import FormGridField from 'components/FormGridField'
import TextField from 'components/Formik/TextField'

import SchoolIcon from '@material-ui/icons/School'
import PersonIcon from '@material-ui/icons/Person'
import EmailIcon from '@material-ui/icons/Email'

import { useFormikContext } from 'formik'
import { useFragment } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { JobInfoCustomerInfoRow1_claim$key } from './__generated__/JobInfoCustomerInfoRow1_claim.graphql'

type JobInfoCustomerInfoRow1Props = {
  claim: JobInfoCustomerInfoRow1_claim$key | null
}
const JobInfoCustomerInfoRow1: React.FC<JobInfoCustomerInfoRow1Props> = props => {
  const claim = useFragment(
    graphql`
      fragment JobInfoCustomerInfoRow1_claim on ClaimJob {
        insured {
          salutation
          name
          email
        }
      }
    `,
    props.claim
  )

  const { setFieldValue } = useFormikContext()
  React.useEffect(() => {
    setFieldValue('insuredSalutation', claim?.insured?.salutation, false)
    setFieldValue('insuredName', claim?.insured?.name, false)
    setFieldValue('insuredEmail', claim?.insured?.email, false)
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <FormGridField
        component={
          <TextField
            label="Salutations"
            name="insuredSalutation"
            startAdornment={<SchoolIcon />}
          />
        }
      />
      <FormGridField
        component={
          <TextField
            required
            label="Customer"
            name="insuredName"
            startAdornment={<PersonIcon />}
          />
        }
      />
      <FormGridField
        md={6}
        component={
          <TextField
            label="Customer Email"
            name="insuredEmail"
            startAdornment={<EmailIcon />}
          />
        }
      />
    </>
  )
}
export default JobInfoCustomerInfoRow1
