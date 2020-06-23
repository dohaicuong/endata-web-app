import React from 'react'

import FormGridField from 'components/FormGridField'
import TextField from 'components/Formik/TextField'
import PhoneIcon from '@material-ui/icons/Phone'
import DoneIcon from '@material-ui/icons/Done'

import { useFormikContext } from 'formik'
import { useFragment } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { JobInfoCustomerInfoRow4_claim$key } from './__generated__/JobInfoCustomerInfoRow4_claim.graphql'
import { JobInfoCustomerInfo_data$key } from './__generated__/JobInfoCustomerInfo_data.graphql'
import ClaimFinalise from 'dataComponents/claimActions/ClaimFinalise'
import CashSettle from 'dataComponents/claimActions/CashSettle'

type JobInfoCustomerInfoRow4Props = {
  claim: JobInfoCustomerInfoRow4_claim$key | null
  data: JobInfoCustomerInfo_data$key | null
}
const JobInfoCustomerInfoRow4: React.FC<JobInfoCustomerInfoRow4Props> = props => {
  const data = useFragment(
    graphql`
      fragment JobInfoCustomerInfoRow4_data on Query {
        ...ClaimFinalise_data
        ...CashSettle_data
      }
    `,
    props.data
  )

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

        ...ClaimFinalise_claim
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
          <ClaimFinalise
            claim={claim}
            data={data as any}
            startIcon={<DoneIcon />}
            disabled={claim?.view?.actions.claimFinalise.isDisabled}
            label={claim?.view?.actions.claimFinalise.label}
          />
        }
      />
      <FormGridField
        flex
        md={2}
        unMountOn={!claim?.view?.actions.cashSettle.isDisplay}
        component={
          <CashSettle
            // claim={claim}
            data={data as any}
            startIcon={<DoneIcon />}
            // disabled={claim?.view?.actions.cashSettle.isDisabled}
            label={claim?.view?.actions.cashSettle.label}
          />
        }
      />
    </>
  )
}
export default JobInfoCustomerInfoRow4
