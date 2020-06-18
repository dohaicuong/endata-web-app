import React from 'react'
import { graphql } from 'babel-plugin-relay/macro'
import { useFragment } from 'react-relay/hooks'
import { FilterInput_data$key } from './__generated__/FilterInput_data.graphql'
import ComboBoxField from 'components/Formik/ComboBoxField'

type FilterInputProps = {
  data: FilterInput_data$key | null
}
const FilterInput: React.FC<FilterInputProps> = props => {
  const data = useFragment(
    graphql`
      fragment FilterInput_data on FilterInput {
        type
        label
        name
        options {
          group
          label
          value: id
        }
      }
    `,
    props.data
  )
  
  const [filterType, isMultiple] = (data?.type ?? '').split('_')
  const Filter = React.useMemo(
    () => React.lazy(() => import(`components/Formik/${filterType}Field`)),
    [filterType]
  )

  if (!Filter) return null
  return (
    <React.Suspense fallback={<ComboBoxField loading variant="outlined" name="wating..." />}>
      <Filter
        name={data?.name}
        label={data?.label}
        options={data?.options ?? []}
        multiple={isMultiple ? true : false}

        variant='outlined'
        fullWidth
      />
    </React.Suspense>
  )
}
export default FilterInput