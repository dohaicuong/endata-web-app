import React from 'react'
import { Formik, Form } from 'formik'
import { Grid, Button } from '@material-ui/core'
import BuilderComboBox from 'dataComponents/BuilderComboBox'
import RestorerComboBox from 'dataComponents/RestorerComboBox'

import { useMutation } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { PortfolioType } from 'pages/ClaimList/ClaimListFilter/__generated__/WaterfallFiltersRefetchQuery.graphql'
import { SupplierAllocateFormMutation } from './__generated__/SupplierAllocateFormMutation.graphql'
import { useSnackbar } from 'notistack'

type SupplierAllocateFormProps = {
  data: any
  portfolio: PortfolioType
  claimId: string
  handleClose: () => void
}
const SupplierAllocateForm: React.FC<SupplierAllocateFormProps> = props => {
  const { enqueueSnackbar } = useSnackbar()

  const [commit, isInFly] = useMutation<SupplierAllocateFormMutation>(graphql`
    mutation SupplierAllocateFormMutation(
      $input: ReallocateScopingSupplierInput!
      $where: ENDataPortfolioKey!
    ) {
      claimReallocateScopingSupplier(where: $where, input: $input) {
        success
        messages
        result {
          reallocate
          scopingSupplier {
            companyName
          }
        }
      }
    }
  `)

  return (
    <Formik
      initialValues={{ supplierId: '' }}
      onSubmit={values => {
        const variables = {
          where: {
            id: props.claimId,
            portfolioType: props.portfolio,
          },
          input: {
            supplierId: parseInt(values.supplierId),
            availableForQuoting: true,
          },
        }
        commit({
          variables,
          onCompleted: (res, errors) => {
            if (errors) {
              return errors.forEach(error => {
                enqueueSnackbar(error.message, { variant: 'error' })
              })
            }

            const response = res.claimReallocateScopingSupplier
            response?.messages.map(message => {
              enqueueSnackbar(message, {
                variant: response?.success ? 'success' : 'error',
              })
            })

            if (response?.success) props.handleClose()
          },
        })

        console.log(variables)
      }}
    >
      <Form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {props.portfolio === 'Building' && (
              <BuilderComboBox
                data={props.data}
                label="Builder"
                name="supplierId"
                variant="outlined"
                fullWidth
              />
            )}
            {props.portfolio === 'Restoration' && (
              <RestorerComboBox
                data={props.data}
                label="Restorer"
                name="supplierId"
                variant="outlined"
                fullWidth
              />
            )}
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={isInFly}
            >
              Reallocate
            </Button>
          </Grid>
        </Grid>
      </Form>
    </Formik>
  )
}
export default SupplierAllocateForm
