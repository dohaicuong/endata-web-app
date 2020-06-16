import React from 'react'

import Info, { FormikInfoFieldProps } from 'components/Info'
import BusinessIcon from '@material-ui/icons/Business'

import { useFragment } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { InsuranceCompanyInfo_company$key } from './__generated__/InsuranceCompanyInfo_company.graphql'

type InsuranceCompanyInfoProps = FormikInfoFieldProps & {
  company: InsuranceCompanyInfo_company$key | null
}
const InsuranceCompanyInfo: React.FC<InsuranceCompanyInfoProps> = props => {
  const company = useFragment(
    graphql`
      fragment InsuranceCompanyInfo_company on CompanyProfile {
        companyName
      }
    `,
    props.company
  )

  return (
    <Info
      startAdornment={<BusinessIcon />}
      value={company?.companyName}
      {...props}
    />
  )
}
export default InsuranceCompanyInfo
