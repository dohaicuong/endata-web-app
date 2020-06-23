import React from 'react'
import FormikSelectField, {
  FormikSelectFieldProps,
} from 'components/Formik/SelectField'

type PortfolioSelectBoxProps = FormikSelectFieldProps & {
  isBuilding?: boolean
  isContents?: boolean
  isRestoration?: boolean
}
const PortfolioSelectBox: React.FC<PortfolioSelectBoxProps> = ({
  isBuilding = false,
  isContents = false,
  isRestoration = false,
  ...props
}) => {
  const portfolios = React.useMemo(() => {
    const portfolios = []
    if (isBuilding) portfolios.push({ label: 'Building', value: 'Building' })
    if (isContents) portfolios.push({ label: 'Contents', value: 'Contents' })
    if (isRestoration) {
      portfolios.push({ label: 'Restoration', value: 'Restoration' })
    }

    return portfolios
  }, [isBuilding, isContents, isRestoration])

  return <FormikSelectField {...props} options={portfolios} />
}
export default PortfolioSelectBox
