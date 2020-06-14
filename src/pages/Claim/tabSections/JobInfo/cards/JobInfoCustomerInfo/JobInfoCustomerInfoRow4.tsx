import React from 'react'

import FormGridField from 'components/FormGridField'
import TextField from 'components/Formik/TextField'
import PhoneIcon from '@material-ui/icons/Phone'
import { Button } from '@material-ui/core'
import DoneIcon from '@material-ui/icons/Done'

import { useFormikContext } from 'formik'
import { useFragment } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { JobInfoCustomerInfoRow4_claim$key } from './__generated__/JobInfoCustomerInfoRow4_claim.graphql'

type JobInfoCustomerInfoRow4Props = {
  claim: JobInfoCustomerInfoRow4_claim$key | null
}
const JobInfoCustomerInfoRow4: React.FC<JobInfoCustomerInfoRow4Props> = props => {
  const claim = useFragment(
    graphql`
      fragment JobInfoCustomerInfoRow4_claim on ClaimJob {
        insured {
          phone1
          phone2
        }

        view {
          actions {
            cashSettle {
              label
              isDisplay
              isDisabled
            }
            claimFinalise {
              label
              isDisplay
              isDisabled
            }
          }
        }
      }
    `,
    props.claim
  )

  const { setFieldValue } = useFormikContext()
  React.useEffect(() => {
    setFieldValue('insuredPhone1', claim?.insured?.phone1, false)
    setFieldValue('insuredPhone2', claim?.insured?.phone2, false)
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <FormGridField
        component={
          <TextField
            label="Phone 1"
            name="insuredPhone1"
            required
            startAdornment={<PhoneIcon />}
          />
        }
      />
      <FormGridField
        component={
          <TextField
            label="Phone 2"
            name="insuredPhone2"
            startAdornment={<PhoneIcon />}
          />
        }
      />
      <FormGridField
        flex
        md={2}
        unMountOn={!claim?.view?.actions.claimFinalise.isDisplay}
        component={
          <Button
            startIcon={<DoneIcon />}
            disabled={claim?.view?.actions.claimFinalise.isDisabled}
            onClick={() => {
              console.log('open finallize claim')
            }}
          >
            {claim?.view?.actions.claimFinalise.label}
          </Button>
        }
      />
      <FormGridField
        flex
        md={2}
        unMountOn={!claim?.view?.actions.cashSettle.isDisplay}
        component={
          <Button
            disabled={claim?.view?.actions.cashSettle.isDisabled}
            startIcon={<DoneIcon />}
            onClick={() => {
              console.log('open cash settle')
            }}
          >
            {claim?.view?.actions.cashSettle.label}
          </Button>
        }
      />
    </>
  )
}
export default JobInfoCustomerInfoRow4
