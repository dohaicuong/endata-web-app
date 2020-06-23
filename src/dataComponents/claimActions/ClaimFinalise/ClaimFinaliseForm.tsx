import React from 'react'
import { Formik, Form } from 'formik'
import { Grid, Button } from '@material-ui/core'
import MoneyField from 'components/FormikCustom/MoneyField'
import DateField from 'components/Formik/DateField'
import { PortfolioType } from 'pages/Claim/__generated__/ClaimInfoCard_info.graphql'
import ClientNameField from 'components/FormikCustom/ClientNameField'
import FinaliseReasonComboBox from 'dataComponents/FinaliseReasonComboBox'

import { useFragment, useMutation } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { ClaimFinaliseForm_data$key } from './__generated__/ClaimFinaliseForm_data.graphql'
import { ClaimFinaliseFormMutation } from './__generated__/ClaimFinaliseFormMutation.graphql'
import { useSnackbar } from 'notistack'

type ClaimFinaliseFormProps = {
  claimId: string
  portfolio: PortfolioType
  data: ClaimFinaliseForm_data$key | null
}
const ClaimFinaliseForm: React.FC<ClaimFinaliseFormProps> = props => {
  const { enqueueSnackbar } = useSnackbar()

  const data = useFragment(
    graphql`
      fragment ClaimFinaliseForm_data on Query {
        ...FinaliseReasonComboBox_data
      }
    `,
    props.data
  )

  const [commit, isInFly] = useMutation<ClaimFinaliseFormMutation>(graphql`
    mutation ClaimFinaliseFormMutation(
      $where: ENDataPortfolioKey!
      $input: FinaliseClaimInput!
    ) {
      claimFinalise(input: $input, where: $where) {
        success
        messages
        result {
          claimStatus {
            statusId
            statusName
          }
          finaliseReason {
            name
          }
          dateCompleted
        }
      }
    }
  `)

  return (
    <Formik
      initialValues={{
        reason: '',
        dateCompleted: null,
        settlementValue: '',
        noPanelSupplier: '',
      }}
      validate={values => {
        const errors: any = {}

        if (!values.reason) errors.reason = 'Required!'
        if (!values.dateCompleted) errors.dateCompleted = 'Required!'
        if (!values.settlementValue) errors.settlementValue = 'Required!'

        return errors
      }}
      onSubmit={values => {
        commit({
          variables: {
            where: {
              id: String(props.claimId),
              portfolioType: props.portfolio,
            },
            input: {
              noPanelSupplier: values.noPanelSupplier,
              dateCompleted: values.dateCompleted,
              finaliseReasonId: parseInt(values.reason ? values.reason : '0'),
              settlementValue: parseFloat(values.settlementValue),
            },
          },
          onCompleted: (res, errors) => {
            if (errors) {
              return errors.forEach(error => {
                enqueueSnackbar(error.message, { variant: 'error' })
              })
            }

            res.claimFinalise?.messages.map(message => {
              enqueueSnackbar(message, {
                variant: res.claimFinalise?.success ? 'success' : 'error',
              })
            })
          },
        })
      }}
    >
      <Form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FinaliseReasonComboBox
              data={data}
              label="Reason"
              name="reason"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <ClientNameField
              label="Non Panel Provider info"
              name="noPanelSupplier"
              placeholder="if applicable"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <DateField
              required
              label="Job Completion Date"
              name="dateCompleted"
              maxDate={new Date()}
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <MoneyField
              required
              label="Settlement Value"
              name="settlementValue"
              fixedDecimal={false}
              decimalScale={0}
              format="#########"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              fullWidth
              disabled={isInFly}
              variant="contained"
              color="primary"
              type="submit"
            >
              Finalise
            </Button>
          </Grid>
        </Grid>
      </Form>
    </Formik>
  )
}
export default ClaimFinaliseForm
