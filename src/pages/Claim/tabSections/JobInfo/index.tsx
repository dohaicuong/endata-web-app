import React from 'react'
import { useFragment, useLazyLoadQuery } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { JobInfo_claim$key } from './__generated__/JobInfo_claim.graphql'
import { JobInfoOptionQuery } from './__generated__/JobInfoOptionQuery.graphql'

import ClaimDetailsCard from './cards/JobInfoClaimDetails'
import { Form, Formik } from 'formik'
import JobInfoCustomerInfo from './cards/JobInfoCustomerInfo'
import JobInfoActions from './JobInfoActions'
import { Grid } from '@material-ui/core'
import JobInfoPostalAddress from './cards/JobInfoPostalAddress'
import JobInfoTenantInfo from './cards/JobInfoTenantInfo'
import JobInfoClaimDescription from './cards/JobInfoClaimDescription'
import JobInfoQuotingBuilders from './cards/JobInfoQuotingBuilders'
import JobInfoQuotingRestorers from './cards/JobInfoQuotingRestorers'

type JobInfoProps = {
  claim: JobInfo_claim$key | null
}
const JobInfo: React.FC<JobInfoProps> = props => {
  const claim = useFragment(
    graphql`
      fragment JobInfo_claim on ClaimJob {
        insurer {
          companyId
        }
        incidentDetail {
          riskAddress {
            postcode
          }
        }
        building {
          scopingSupplier {
            companyId
          }
        }
        restoration {
          scopingSupplier {
            companyId
          }
        }
        view {
          actions {
            ...JobInfoActions_actions
          }
        }

        ...JobInfoClaimDetails_claim
        ...JobInfoCustomerInfo_claim
        ...JobInfoPostalAddress_claim
        ...JobInfoTenantInfo_claim
        ...JobInfoClaimDescription_claim
      }
    `,
    props.claim
  )

  // $postcode: String
  const companyId = String(claim?.insurer?.companyId ?? '') || null
  const postcode =
    String(claim?.incidentDetail?.riskAddress?.postcode ?? '') || '0'
  const optionData = useLazyLoadQuery<JobInfoOptionQuery>(
    graphql`
      query JobInfoOptionQuery($companyId: [ID!], $postcode: String) {
        ...JobInfoClaimDetails_optionData
        ...JobInfoQuotingBuilders_options
          @arguments(companyIds: $companyId, postcode: $postcode)
        ...JobInfoQuotingRestorers_options
          @arguments(companyIds: $companyId, postcode: $postcode)
      }
    `,
    {
      companyId: companyId ? [companyId] : null,
      postcode,
    }
  )

  return (
    <Formik
      initialValues={{
        portfolios: [
          {
            portfolioType: 'Building',
            toCollectExcess: '',
            excessValue: '',
            sumInsured: '',
            quotingSupplierIds: [],
          },
          {
            portfolioType: 'Contents',
            toCollectExcess: '',
            excessValue: '',
            sumInsured: '',
          },
          {
            portfolioType: 'Restoration',
            toCollectExcess: '',
            excessValue: '',
            sumInsured: '',
            quotingSupplierIds: [],
          },
        ],
        incidentDate: '',
        casemanagerId: '',
        externalLossAdjusterId: '',
        refNumber: '',
        contentsRefNum: '',
        hold: '',
        eventTypeId: '',
        catCodeId: '',
        policyTypeId: '',
        policyCoverId: '',
        riskname: '',
        additionalRefNumber: '',
        homeAssessorId: '',
        brcId: '',

        insuredSalutation: '',
        insuredName: '',
        insuredEmail: '',
        riskAddressLine1: '',
        requireCustomLogin: '',
        customLoginEmail: '',
        riskAddressSuburb: '',
        riskAddressState: '',
        riskAddressPostcode: '',
        habitableProperty: '',
        category: '',
        insuredPhone1: '',
        insuredPhone2: '',
        insuredPhone3: '',
        insuredFax: '',

        postalAddressLine1: '',
        postalAddressSuburb: '',
        postalAddressState: '',
        postalAddressPostcode: '',

        tenantName: '',
        tenantPhone1: '',
        tenantPhone2: '',
        tenantPhone3: '',

        claimDescription: '',
      }}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values)
        setSubmitting(false)
      }}
    >
      <Form>
        <JobInfoActions actions={claim?.view?.actions ?? null} />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <ClaimDetailsCard claim={claim} optionData={optionData} />
          </Grid>
          <Grid item xs={12}>
            <JobInfoCustomerInfo claim={claim} />
          </Grid>
          <Grid item xs={6}>
            <JobInfoPostalAddress claim={claim} />
          </Grid>
          <Grid item xs={6}>
            <JobInfoTenantInfo claim={claim} />
          </Grid>
          <Grid item xs={12}>
            <JobInfoClaimDescription claim={claim} />
          </Grid>
          <Grid item xs={6}>
            <JobInfoQuotingBuilders
              options={optionData}
              scopingSupplierId={claim?.building?.scopingSupplier?.companyId}
            />
          </Grid>
          <Grid item xs={6}>
            <JobInfoQuotingRestorers
              options={optionData}
              scopingSupplierId={claim?.restoration?.scopingSupplier?.companyId}
            />
          </Grid>
          {/* <Grid item xs={6}>
            Specialists
          </Grid> */}
        </Grid>
      </Form>
    </Formik>
  )
}
export default JobInfo
