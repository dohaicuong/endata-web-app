import React from 'react'

import FormGridField from 'components/FormGridField'
import TextField from 'components/Formik/TextField'
import PhoneIcon from '@material-ui/icons/Phone'

import { useFormikContext } from 'formik'
import { useFragment } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { JobInfoCustomerInfoRow5_claim$key } from './__generated__/JobInfoCustomerInfoRow5_claim.graphql'

type JobInfoCustomerInfoRow5Props = {
  claim: JobInfoCustomerInfoRow5_claim$key | null
}
const JobInfoCustomerInfoRow5: React.FC<JobInfoCustomerInfoRow5Props> = props => {
  const claim = useFragment(
    graphql`
      fragment JobInfoCustomerInfoRow5_claim on ClaimJob {
        insured {
          phone3
          fax
        }
      }
    `,
    props.claim
  )

  const { setFieldValue } = useFormikContext()
  React.useEffect(() => {
    setFieldValue('insuredPhone3', claim?.insured?.phone3, false)
    setFieldValue('insuredFax', claim?.insured?.fax, false)
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <FormGridField
        component={
          <TextField
            label="Phone 3"
            name="insuredPhone3"
            startAdornment={<PhoneIcon />}
          />
        }
      />
      <FormGridField
        component={
          <TextField
            label="Fax"
            name="insuredFax"
            startAdornment={<PhoneIcon />}
          />
        }
      />
    </>
  )
}
export default JobInfoCustomerInfoRow5
