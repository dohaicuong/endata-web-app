import React from 'react'
import { Formik, Form } from 'formik'
import { Grid, Button } from '@material-ui/core'
import FormikTextAreaField from 'components/Formik/TextAreaField'
import { PortfolioType } from 'pages/Claim/tabSections/JobNotes/JobNotesBody/__generated__/JobNotesBody_data.graphql'
import { useFragment, useMutation } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import AwaitingInfoReasonSelect from 'dataComponents/AwaitingInfoReasonSelect'
import { WaitForInfoForm_data$key } from './__generated__/WaitForInfoForm_data.graphql'
import ComboBoxField from 'components/Formik/ComboBoxField'
import { WaitForInfoFormMutation } from './__generated__/WaitForInfoFormMutation.graphql'
import { useSnackbar } from 'notistack'

type WaitForInfoFormProps = {
  claimId: string
  portfolio: PortfolioType
  data: WaitForInfoForm_data$key | null
}
const WaitForInfoForm: React.FC<WaitForInfoFormProps> = props => {
  const { enqueueSnackbar } = useSnackbar()

  const data = useFragment(
    graphql`
      fragment WaitForInfoForm_data on Query {
        ...AwaitingInfoReasonSelect_data
      }
    `,
    props.data
  )

  const [commit, isInFly] = useMutation<WaitForInfoFormMutation>(graphql`
    mutation WaitForInfoFormMutation(
      $input: AwaitingInfoClaimInputType!
      $where: ENDataPortfolioKey!
    ) {
      claimAwaitingInfo(input: $input, where: $where) {
        success
        messages
        result {
          claimStatus {
            statusId
            statusName
          }
        }
      }
    }
  `)

  return (
    <Formik
      initialValues={{
        awaitingInfoReasonId: '',
        note: '',
      }}
      onSubmit={values => {
        commit({
          variables: {
            where: {
              id: props.claimId,
              portfolioType: props.portfolio,
            },
            input: values,
          },
          onCompleted: (res, errors) => {
            if (errors) {
              return errors.forEach(error => {
                enqueueSnackbar(error.message, { variant: 'error' })
              })
            }

            const result = res.claimAwaitingInfo
            result?.messages.map(message => {
              enqueueSnackbar(message, {
                variant: result?.success ? 'success' : 'error',
              })
            })
          },
        })
      }}
    >
      <Form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <React.Suspense
              fallback={
                <ComboBoxField
                  loading
                  label="Reason"
                  name="loading"
                  variant="outlined"
                />
              }
            >
              <AwaitingInfoReasonSelect
                label="Reason"
                name="awaitingInfoReasonId"
                required
                data={data}
                selectedPortfolio={props.portfolio}
                variant="outlined"
                fullWidth
              />
            </React.Suspense>
          </Grid>
          <Grid item xs={12}>
            <FormikTextAreaField
              label="Additional Notes"
              name="note"
              rowsMax={10}
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={isInFly}
            >
              Wait for Info
            </Button>
          </Grid>
        </Grid>
      </Form>
    </Formik>
  )
}
export default WaitForInfoForm
