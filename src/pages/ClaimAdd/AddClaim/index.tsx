import React from 'react'
import { useLazyLoadQuery, useMutation } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { AddClaimQuery } from './__generated__/AddClaimQuery.graphql'
import { AddClaimMutation } from './__generated__/AddClaimMutation.graphql'

import { Formik, Form } from 'formik'
import AddClaimRoot from './AddClaimRoot'
import { useParams, useHistory } from 'react-router-dom'
import lodash from 'lodash'
import { useSnackbar } from 'notistack'

const AddClaim = () => {
  const { companyId } = useParams()
  const { enqueueSnackbar } = useSnackbar()
  const { push } = useHistory()

  const data = useLazyLoadQuery<AddClaimQuery>(
    graphql`
      query AddClaimQuery($companyId: [ID!], $compId: ID!, $postcode: String) {
        ...AddClaimRoot_data
      }
    `,
    {
      compId: companyId,
      companyId: [companyId],
    }
  )

  const [addClaimMutation] = useMutation<AddClaimMutation>(graphql`
    mutation AddClaimMutation($input: ClaimJobCreate!) {
      createClaimJob(input: $input) {
        success
        messages
        fieldErrors {
          fieldName
          level
          message
        }
        result {
          id
          claimId
        }
      }
    }
  `)

  return (
    <Formik
      initialValues={{
        claimDescription: '',
        meta: {
          portfolio: [],
          companyName: '',
          fnol: new Date().toLocaleDateString(),
          toProvideSiteReport: true,
        },
        refNumber: '',
        contentsRefNum: '',
        insurerId: companyId,
        casemanagerId: '',
        brcId: '',
        homeAssessorId: '',
        visitTypeID: '',
        externalLossAdjusterId: '',
        riskname: '',
        additionalRefNumber: '',
        requireCustomLogin: false,
        customLoginEmail: '',
        policyTypeId: '',
        policyCoverId: '',
        incidentDetail: {
          eventTypeId: '',
          catCodeId: '',
          habitableProperty: true,
          asbestos: false,
          hold: true,
          makeSafeRequired: false,
          incidentDate: new Date(),
          category: '',
          riskAddress: {
            line1: '',
            suburb: '',
            state: '',
            postcode: '',
          },
        },
        insured: {
          name: '',
          phone1: '',
          phone2: '',
          salutation: '',
          email: '',
        },
        portfolios: [
          {
            portfolioType: 'Building',
            // toProvideSiteReport: true,
            sumInsured: '',
            excessValue: '',
            toCollectExcess: false,
            scopingSupplierId: '',
            quotingSupplierIds: [],
          },
          {
            portfolioType: 'Contents',
            // toProvideSiteReport: true,
            sumInsured: '',
            excessValue: '',
            toCollectExcess: false,
            scopingSupplierId: 0,
          },
          {
            portfolioType: 'Restoration',
            // toProvideSiteReport: true,
            sumInsured: '',
            excessValue: '',
            toCollectExcess: false,
            scopingSupplierId: '',
            quotingSupplierIds: [],
          },
        ],
      }}
      validateOnChange={false}
      validate={values => {
        const errors: any = {}

        // SUPPLIER REQUIRED
        if (!values.meta.portfolio.length) {
          if (!errors.meta) errors.meta = {}
          errors.meta.portfolio = 'Please choose at least one'
        }

        // Claim description
        if (
          !values.claimDescription ||
          values.claimDescription === '<p><br></p>'
        )
          errors.claimDescription = 'Required!'

        return errors
      }}
      onSubmit={async (values, { setSubmitting, setErrors }) => {
        const input = cleanInput(values)
        console.log(input)

        addClaimMutation({
          variables: { input },
          onCompleted: (res, errors) => {
            setSubmitting(false)
            if (errors) {
              errors.forEach(error => {
                enqueueSnackbar(error.message, { variant: 'error' })
              })
            }

            res.createClaimJob?.messages.forEach(message => {
              enqueueSnackbar(message, {
                variant: res.createClaimJob?.success ? 'success' : 'error',
              })
            })
            if (res.createClaimJob?.fieldErrors) {
              setErrors(getFieldErrors(res.createClaimJob.fieldErrors))
            }
            if (res.createClaimJob?.success) {
              push(`/claim/${res.createClaimJob.result?.claimId}/job-info`)
            }
          },
        })
      }}
    >
      <Form>
        <AddClaimRoot data={data} />
      </Form>
    </Formik>
  )
}
export default AddClaim

const getFieldErrors = (fieldErrors: any) => {
  return fieldErrors?.reduce((total: any, current: any) => {
    if (!current?.fieldName) return total

    return {
      ...total,
      [current?.fieldName]: current?.message,
    }
  }, {})
}

const cleanInput = (values: any) => {
  /* eslint-disable @typescript-eslint/no-unused-vars */
  const input = (({ meta, ...props }) => ({ ...props }))(values) as any
  const portfolios = values.meta.portfolio.map(
    (por: any, index: number) => values.portfolios[index]
  )

  const cleanedInput = {
    ...lodash.pickBy(input, v => v !== '' && v !== null),
    ...input,
    incidentDetail: {
      ...lodash.pickBy(input.incidentDetail, v => v !== '' && v !== null),
      riskAddress: {
        ...lodash.pickBy(
          input.incidentDetail.riskAddress,
          v => v !== '' && v !== null
        ),
      },
    },
    insured: {
      ...lodash.pickBy(input.insured, v => v !== '' && v !== null),
    },
    portfolios: portfolios,
  } as any
  return cleanedInput
}
