import React from 'react'

import renderField from '../renderField'
import InfoField from 'components/Formik/InfoField'
import BusinessIcon from '@material-ui/icons/Business'

import { useFormikContext } from 'formik'
import { useFragment } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { InsuranceCompany_company$key } from './__generated__/InsuranceCompany_company.graphql'

type InsuranceCompanyProps = {
  company: InsuranceCompany_company$key | null
}
const InsuranceCompany: React.FC<InsuranceCompanyProps> = props => {
  const company = useFragment(
    graphql`
      fragment InsuranceCompany_company on CompanyProfile {
        companyName
      }
    `,
    props.company
  )

  const { setFieldValue } = useFormikContext()
  const name = company?.companyName ?? null
  React.useEffect(() => {
    if (name) {
      setFieldValue('meta.companyName', name)
    }
  }, [name, setFieldValue])

  return renderField({
    component: InfoField,
    label: 'Insurance Company',
    name: 'meta.companyName',
    startAdornment: <BusinessIcon />,
    variant: 'standard',
  })
}
export default InsuranceCompany
