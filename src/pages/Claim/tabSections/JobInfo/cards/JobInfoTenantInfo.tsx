import React from 'react'
import Card from 'components/Card'
import { Grid } from '@material-ui/core'
import FormGridField from 'components/FormGridField'
import TextField from 'components/Formik/TextField'
import PersonIcon from '@material-ui/icons/Person'
import PhoneIcon from '@material-ui/icons/Phone'

import { graphql } from 'babel-plugin-relay/macro'
import { useFragment } from 'react-relay/hooks'
import { JobInfoTenantInfo_claim$key } from './__generated__/JobInfoTenantInfo_claim.graphql'
import { useFormikContext } from 'formik'

type JobInfoTenantInfoProps = {
  claim: JobInfoTenantInfo_claim$key | null
}
const JobInfoTenantInfo: React.FC<JobInfoTenantInfoProps> = props => {
  const claim = useFragment(
    graphql`
      fragment JobInfoTenantInfo_claim on ClaimJob {
        tenantDetails {
          name
          phone1
          phone2
          phone3
        }
      }
    `,
    props.claim
  )

  const { setFieldValue } = useFormikContext()
  React.useEffect(() => {
    setFieldValue('tenantName', claim?.tenantDetails?.name, false)
    setFieldValue('tenantPhone1', claim?.tenantDetails?.phone1, false)
    setFieldValue('tenantPhone2', claim?.tenantDetails?.phone2, false)
    setFieldValue('tenantPhone3', claim?.tenantDetails?.phone3, false)
    // eslint-disable-next-line
  }, [])

  return (
    <Card title="Tenant Information">
      <Grid container spacing={3}>
        <FormGridField
          md={8}
          component={
            <TextField
              label="Tenant Name"
              name="tenantName"
              startAdornment={<PersonIcon />}
            />
          }
        />
        <Grid md={4} />
        <FormGridField
          md={4}
          component={
            <TextField
              label="Phone 1"
              name="tenantPhone1"
              startAdornment={<PhoneIcon />}
            />
          }
        />
        <FormGridField
          md={4}
          component={
            <TextField
              label="Phone 2"
              name="tenantPhone2"
              startAdornment={<PhoneIcon />}
            />
          }
        />
        <FormGridField
          md={4}
          component={
            <TextField
              label="Phone 3"
              name="tenantPhone3"
              startAdornment={<PhoneIcon />}
            />
          }
        />
      </Grid>
    </Card>
  )
}
export default JobInfoTenantInfo
