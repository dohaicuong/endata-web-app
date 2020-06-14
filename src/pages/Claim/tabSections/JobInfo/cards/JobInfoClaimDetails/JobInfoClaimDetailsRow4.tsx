import React from 'react'

import FormGridField from 'components/FormGridField'
import EventTypeComboBox from 'dataComponents/EventTypeComboBox'
import CatCodeComboBox from 'dataComponents/CatCodeComboBox'
import SwitchField from 'components/Formik/SwitchField'
import MoneyField from 'components/FormikCustom/MoneyField'

import { useFragment } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { JobInfoClaimDetailsRow4_claim$key } from './__generated__/JobInfoClaimDetailsRow4_claim.graphql'
import { JobInfoClaimDetailsRow4_optionData$key } from './__generated__/JobInfoClaimDetailsRow4_optionData.graphql'
import { useFormikContext } from 'formik'

type JobInfoClaimDetailsRow4Props = {
  claim: JobInfoClaimDetailsRow4_claim$key | null
  optionData: JobInfoClaimDetailsRow4_optionData$key | null
}

const JobInfoClaimDetailsRow4: React.FC<JobInfoClaimDetailsRow4Props> = props => {
  const claim = useFragment(
    graphql`
      fragment JobInfoClaimDetailsRow4_claim on ClaimJob {
        insurer {
          companyName
        }
        incidentDetail {
          eventType {
            eventTypeId
          }
          cATCode {
            cATCodeId
          }
        }

        contents {
          toCollectExcess
          excessValue
          sumInsured
        }
      }
    `,
    props.claim
  )

  const optionData = useFragment(
    graphql`
      fragment JobInfoClaimDetailsRow4_optionData on Query {
        # Event type
        ...EventTypeComboBox_data @arguments(companyIds: $companyId)
        # Cat code
        ...CatCodeComboBox_data @arguments(companyIds: $companyId)
      }
    `,
    props.optionData
  )

  const { setFieldValue } = useFormikContext()
  React.useEffect(() => {
    setFieldValue(
      'eventTypeId',
      claim?.incidentDetail?.eventType?.eventTypeId,
      false
    )
    setFieldValue('catCodeId', claim?.incidentDetail?.cATCode?.cATCodeId, false)
    setFieldValue(
      'portfolios[1].toCollectExcess',
      claim?.contents?.toCollectExcess ?? false,
      false
    )
    setFieldValue(
      'portfolios[1].excessValue',
      claim?.contents?.excessValue ?? 0,
      false
    )
    setFieldValue(
      'portfolios[1].sumInsured',
      claim?.contents?.sumInsured ?? 0,
      false
    )
    // eslint-disable-next-line
  }, [])

  const isCollectContentsExcess = claim?.contents?.toCollectExcess !== null
  return (
    <>
      <FormGridField
        component={
          <EventTypeComboBox
            label="Event Type"
            name="eventTypeId"
            required={true}
            data={optionData}
          />
        }
      />
      <FormGridField
        component={
          <CatCodeComboBox
            label="Catastrophe Code"
            name="catCodeId"
            required={true}
            data={optionData}
          />
        }
      />
      <FormGridField
        md={2}
        component={
          <SwitchField
            label="Contents Provider Collect Excess"
            name="portfolios[1].toCollectExcess"
            disabled={!isCollectContentsExcess}
          />
        }
      />
      <FormGridField
        md={2}
        component={
          <MoneyField
            label="Excess"
            name="portfolios[1].excessValue"
            required={isCollectContentsExcess}
            disabled={!isCollectContentsExcess}
            fixedDecimal={false}
            decimalScale={0}
            format="#########"
          />
        }
      />
      <FormGridField
        md={2}
        component={
          <MoneyField
            label="Sum Insured"
            name="portfolios[1].sumInsured"
            required={isCollectContentsExcess}
            disabled={!isCollectContentsExcess}
            fixedDecimal={false}
            decimalScale={0}
            format="#########"
          />
        }
      />
    </>
  )
}
export default JobInfoClaimDetailsRow4
