import React from 'react'
import _states from 'resources/data/states'

import Card from 'components/Card'
import FormGridField from 'components/FormGridField'
import TextField from 'components/Formik/TextField'
import { Button, Grid } from '@material-ui/core'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import FileCopyIcon from '@material-ui/icons/FileCopy'
import { useFormikContext } from 'formik'

import { graphql } from 'babel-plugin-relay/macro'
import { useFragment } from 'react-relay/hooks'
import { JobInfoPostalAddress_claim$key } from './__generated__/JobInfoPostalAddress_claim.graphql'
import FormikSelectField from 'components/Formik/SelectField'

type JobInfoPostalAddressProps = {
  claim: JobInfoPostalAddress_claim$key | null
}
const JobInfoPostalAddress: React.FC<JobInfoPostalAddressProps> = props => {
  const claim = useFragment(
    graphql`
      fragment JobInfoPostalAddress_claim on ClaimJob {
        insured {
          postalAddress {
            line1
            line2
            suburb
            state
            postcode
          }
        }
      }
    `,
    props.claim
  )

  const { isSubmitting, setFieldValue, values } = useFormikContext<any>()
  React.useEffect(() => {
    const postalAddress = claim?.insured?.postalAddress
    const address = `${postalAddress?.line1 ?? ''}${
      postalAddress?.line2 ? `, ${postalAddress?.line2}` : ''
    }`

    setFieldValue('postalAddressLine1', address, false)
    setFieldValue('postalAddressSuburb', postalAddress?.suburb, false)
    setFieldValue('postalAddressState', postalAddress?.state, false)
    setFieldValue('postalAddressPostcode', postalAddress?.postcode, false)
    // eslint-disable-next-line
  }, [])

  const handleSameAddress = () => {
    setFieldValue('postalAddressLine1', values.riskAddressLine1, false)
    setFieldValue('postalAddressSuburb', values.riskAddressSuburb, false)
    setFieldValue('postalAddressState', values.riskAddressState, false)
    setFieldValue('postalAddressPostcode', values.riskAddressPostcode, false)
  }

  return (
    <Card title="Postal Address">
      <Grid container spacing={3}>
        <FormGridField
          md={8}
          component={
            <TextField
              label="Postal Address"
              name="postalAddressLine1"
              startAdornment={<LocationOnIcon />}
            />
          }
        />
        <FormGridField
          flex
          md={4}
          component={
            <Button
              startIcon={<FileCopyIcon />}
              disabled={isSubmitting}
              onClick={handleSameAddress}
            >
              Same address
            </Button>
          }
        />

        <FormGridField
          md={4}
          component={
            <TextField
              label="Suburb"
              name="postalAddressSuburb"
              startAdornment={<LocationOnIcon />}
            />
          }
        />
        <FormGridField
          md={4}
          component={
            <FormikSelectField
              label="State"
              name="postalAddressState"
              options={_states}
              startAdornment={<LocationOnIcon />}
            />
          }
        />
        <FormGridField
          md={4}
          component={
            <TextField
              label="Postcode"
              name="postalAddressPostcode"
              startAdornment={<LocationOnIcon />}
            />
          }
        />
      </Grid>
    </Card>
  )
}
export default JobInfoPostalAddress
