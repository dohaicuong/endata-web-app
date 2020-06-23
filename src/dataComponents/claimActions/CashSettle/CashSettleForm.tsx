import React from 'react'
import { Button, makeStyles, Grid, Typography } from '@material-ui/core'
import PortfolioSelectBox from 'dataComponents/PortfolioSelectBox'
import DateField from 'components/Formik/DateField'
import MoneyField from 'components/FormikCustom/MoneyField'
import FormikTextField from 'components/Formik/TextField'
import PaymentTypeSelect from 'dataComponents/PaymentTypeSelect'
import EventIcon from '@material-ui/icons/Event'
import { useFormikContext } from 'formik'
import ComboBoxField from 'components/Formik/ComboBoxField'
import PaymentMethodSelect from 'dataComponents/PaymentMethodSelect'

type CashSettleFormProps = {
  data: any
  handleClose: () => void
  isInFly: boolean
}
const CashSettleForm: React.FC<CashSettleFormProps> = ({
  data,
  handleClose,
  isInFly,
}) => {
  const classes = useStyles()

  const { values } = useFormikContext<any>()
  const { claimPortfolioType } = values

  return (
    <Grid container spacing={2} className={classes.container}>
      <Grid item xs={12}>
        <Typography variant="h6">Cash settle</Typography>
      </Grid>

      <Grid item xs={12}>
        <PortfolioSelectBox
          label="Portfolio type"
          name="claimPortfolioType"
          isBuilding
          isContents
          variant="outlined"
          fullWidth
        />
      </Grid>

      <Grid item xs={3}>
        <DateField
          label="Settlement Date"
          name="settlementDate"
          required
          maxDate={new Date()}
          fullWidth
        />
      </Grid>
      <Grid item xs={3}>
        <MoneyField
          label="Settlement Value"
          name="settlementValue"
          required
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid item xs={3}>
        <React.Suspense
          fallback={<ComboBoxField loading variant="outlined" name="loading" />}
        >
          <PaymentTypeSelect
            data={data}
            selectedPortfolio={claimPortfolioType}
            label="Payment Type"
            name="paymentTypeId"
            required
            startAdornment={<EventIcon />}
            variant="outlined"
            fullWidth
          />
        </React.Suspense>
      </Grid>
      <Grid item xs={3}>
        <PaymentMethodSelect
          data={data}
          label="Payment Method"
          name="paymentMethodId"
          required
          startAdornment={<EventIcon />}
          variant="outlined"
          fullWidth
        />
      </Grid>

      <Grid item xs={3}>
        <FormikTextField
          label="Bank Name"
          name="bankName"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid item xs={3}>
        <FormikTextField label="BSB" name="bsb" variant="outlined" fullWidth />
      </Grid>
      <Grid item xs={3}>
        <FormikTextField
          label="Account"
          name="account"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid item xs={3}>
        <FormikTextField
          label="Comments"
          name="comments"
          variant="outlined"
          fullWidth
        />
      </Grid>

      <Grid
        item
        xs={12}
        style={{ display: 'flex', justifyContent: 'flex-end' }}
      >
        <Button color="primary" onClick={handleClose}>
          Close
        </Button>
        <Button
          color="primary"
          variant="contained"
          type="submit"
          disabled={isInFly}
        >
          Settle
        </Button>
      </Grid>
    </Grid>
  )
}
export default CashSettleForm

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(2),
    width: '100%',
    margin: 0,
  },
}))
