import React from 'react'

import FormGridField from 'components/FormGridField'
import TextField from 'components/Formik/TextField'
import SpecialistReviewComboBox from 'dataComponents/SpecialistReviewComboBox'
import CaseManagerComboBox from 'dataComponents/CaseManagerComboBox'
import FaceIcon from '@material-ui/icons/Face'
import LinkIcon from '@material-ui/icons/Link'

import { useFragment } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { JobInfoClaimDetailsRow6_claim$key } from './__generated__/JobInfoClaimDetailsRow6_claim.graphql'
import { JobInfoClaimDetailsRow6_optionData$key } from './__generated__/JobInfoClaimDetailsRow6_optionData.graphql'
import { useFormikContext } from 'formik'

type JobInfoClaimDetailsRow6Props = {
  claim: JobInfoClaimDetailsRow6_claim$key | null
  optionData: JobInfoClaimDetailsRow6_optionData$key | null
}
const JobInfoClaimDetailsRow6: React.FC<JobInfoClaimDetailsRow6Props> = props => {
  const claim = useFragment(
    graphql`
      fragment JobInfoClaimDetailsRow6_claim on ClaimJob {
        insurer {
          enableMultipleRisks
          additionalRefNo
          useInternalAssessor
          cm2nd
        }
        riskname
        additionalRefNumber
        homeAssessor {
          assesorId
        }
        brc {
          managerId
        }
      }
    `,
    props.claim
  )

  const optionData = useFragment(
    graphql`
      fragment JobInfoClaimDetailsRow6_optionData on Query {
        ...SpecialistReviewComboBoxProps_data @arguments(companyIds: $companyId)
        ...CaseManagerComboBox_data @arguments(companyIds: $companyId)
        currentUser {
          userType
        }
      }
    `,
    props.optionData
  )

  const { setFieldValue } = useFormikContext()
  React.useEffect(() => {
    setFieldValue('riskname', claim?.riskname, false)
    setFieldValue('additionalRefNumber', claim?.additionalRefNumber, false)
    setFieldValue('homeAssessorId', claim?.homeAssessor?.assesorId, false)
    setFieldValue('brcId', claim?.brc?.managerId, false)
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <FormGridField
        unMountOn={!claim?.insurer?.enableMultipleRisks}
        component={
          <TextField
            label="Risk Name"
            name="riskname"
            startAdornment={<FaceIcon />}
          />
        }
      />
      <FormGridField
        unMountOn={!claim?.insurer?.additionalRefNo}
        component={
          <TextField
            label="Additional Ref #"
            name="additionalRefNumber"
            startAdornment={<LinkIcon />}
          />
        }
      />
      <FormGridField
        unMountOn={claim?.insurer?.useInternalAssessor}
        component={
          <SpecialistReviewComboBox
            label="Specialist Review"
            name="homeAssessorId"
            data={optionData}
          />
        }
      />

      <FormGridField
        unMountOn={
          !claim?.insurer?.cm2nd ||
          optionData?.currentUser?.userType !== 'Administrator'
        }
        component={
          <CaseManagerComboBox
            label="BC/ BRC/ Loss Adjuster"
            name="brcId"
            data={optionData}
          />
        }
      />
    </>
  )
}
export default JobInfoClaimDetailsRow6
