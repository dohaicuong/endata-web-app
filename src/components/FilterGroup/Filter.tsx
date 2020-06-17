import React from 'react'
import ComboBoxField, {
  ComboBoxFieldOption,
} from 'components/Formik/ComboBoxField'

export interface FilterProps {
  type: string
  label?: string | null
  name: string
  options?: ComboBoxFieldOption[]
}
export interface FilterOption {
  group?: string
  label: string
  value: string
}

const FilterWrapper: React.FC<FilterProps> = props => {
  return (
    <React.Suspense
      fallback={<ComboBoxField loading variant="outlined" name="wating..." />}
    >
      <Filter {...props} />
    </React.Suspense>
  )
}
const Filter: React.FC<FilterProps> = ({ type, ...props }) => {
  console.log(props)
  const Comp = React.useMemo(
    () => React.lazy(() => import(`components/Formik/${type}Field`)),
    [type]
  )
  if (!Comp) return null

  return <Comp {...props} />
}

export default FilterWrapper
