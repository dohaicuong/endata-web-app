import React from 'react'
import { ComboBoxFieldOption } from 'components/Formik/ComboBoxField'
import ComboBoxField from 'components/Formik/ComboBoxField'
import DateField from 'components/Formik/DateField'
import SearchField from 'components/Formik/SearchField'

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

const FilterWrapper: React.FC<any> = props => {
  return <Filter {...props} />
}
const Filter: React.FC<FilterProps> = ({ type, ...props }) => {
  return (
    <div>
      {type === 'ComboBox' && <ComboBoxField {...props} />}
      {type === 'Search' && <SearchField {...props} />}
      {type === 'Date' && <DateField {...props} />}
    </div>
  )
}

export default FilterWrapper
