import React from 'react'
import { useFragment } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { AddClaimRoot_data$key } from './__generated__/AddClaimRoot_data.graphql'

import { Container, Grid, Button } from '@material-ui/core'

import CustomerDetailsCard from './cards/CustomerDetailsCard'
import ClaimDetailsCard from './cards/ClaimDetailsCard'
import ClaimDescriptionCard from './cards/ClaimDescriptionCard'
import QuotingBuildersCard from './cards/QuotingBuildersCard'
import Card from 'components/Card'
import QuotingRestorersCard from './cards/QuotingRestorersCard'
import { useFormikContext } from 'formik'

type AddClaimRootProps = {
  data: AddClaimRoot_data$key | null
}
const AddClaimRoot: React.FC<AddClaimRootProps> = props => {
  const data = useFragment(
    graphql`
      fragment AddClaimRoot_data on Query {
        company(where: { portfolioType: Building, id: $compId }) {
          ...CustomerDetailsCard_company
          ...ClaimDetailsCard_company
          ...QuotingBuildersCard_meta
          ...QuotingRestorersCard_meta
        }

        ...ClaimDetailsCard_optionData

        ...QuotingBuildersCard_options
          @arguments(companyId: $companyId, postcode: $postcode)
        ...QuotingRestorersCard_options
          @arguments(companyId: $companyId, postcode: $postcode)
      }
    `,
    props.data
  )

  const { values, setFieldValue } = useFormikContext<any>()
  const isBuilding = values?.meta?.portfolio?.includes('Building')
  const isRestoration = values?.meta?.portfolio?.includes('Restoration')
  const selectedPostcode = values?.incidentDetail?.riskAddress?.postcode ?? 0

  const toProvideSiteReport = values?.meta?.toProvideSiteReport
  React.useEffect(() => {
    setFieldValue('portfolios[0].toProvideSiteReport', toProvideSiteReport)
    setFieldValue('portfolios[1].toProvideSiteReport', toProvideSiteReport)
    setFieldValue('portfolios[2].toProvideSiteReport', toProvideSiteReport)
  }, [toProvideSiteReport, setFieldValue])

  if (!data) return null

  return (
    <Container maxWidth="xl" style={{ marginTop: 8 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <React.Suspense fallback={null}>
            <CustomerDetailsCard company={data.company} />
          </React.Suspense>
        </Grid>
        <Grid item xs={12}>
          <React.Suspense fallback={null}>
            <ClaimDetailsCard company={data.company} optionData={data} />
          </React.Suspense>
        </Grid>
        <Grid item xs={6}>
          <React.Suspense
            fallback={<Card title="Quoting Builders">Loading...</Card>}
          >
            <QuotingBuildersCard
              options={data}
              meta={data.company}
              isBuilding={isBuilding}
              selectedPostcode={selectedPostcode}
            />
          </React.Suspense>
        </Grid>
        <Grid item xs={6}>
          <React.Suspense
            fallback={<Card title="Quoting Restorers">Loading...</Card>}
          >
            <QuotingRestorersCard
              options={data}
              meta={data.company}
              isRestoration={isRestoration}
              selectedPostcode={selectedPostcode}
            />
          </React.Suspense>
        </Grid>
        <Grid item xs={12}>
          <ClaimDescriptionCard />
        </Grid>
        <Grid
          item
          xs={12}
          style={{ display: 'flex', justifyContent: 'flex-end' }}
        >
          <Button
            color="primary"
            variant="contained"
            type="submit"
            size="large"
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}
export default AddClaimRoot
