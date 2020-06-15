import React from 'react'
import { Formik, Form } from 'formik'
import Filter, { FilterProps } from './Filter'
import { Grid, Collapse, IconButton, CircularProgress } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'

interface FilterGroupProps {
  loading?: boolean
  firstRowFilters?: number
  filters?: any
  filterRender?: (
    Component: any,
    props: any,
    index: number
  ) => React.ReactElement
  onChange?: (values: any) => void
  SubView?: any
}
const FilterGroup: React.FC<FilterGroupProps> = ({
  filters,
  loading,
  onChange,
  ...props
}) => {
  if (loading)
    return (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <CircularProgress />
      </div>
    )

  if (!filters) return null
  const initialValues = filters ? getInitialValues(filters) : {}
  return (
    <Formik
      initialValues={initialValues}
      validate={values => {
        if (values && onChange) onChange(values)
      }}
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      onSubmit={() => {}}
    >
      {({ values }) => (
        <FilterGroupDisplay filters={filters} values={values} {...props} />
      )}
    </Formik>
  )
}

export default FilterGroup

interface FilterGroupDisplayProps extends FilterGroupProps {
  values: any
}
const FilterGroupDisplay: React.FC<FilterGroupDisplayProps> = ({
  filters,
  filterRender,
  firstRowFilters = 6,
  SubView,
}) => {
  const [filterMore, setFilterMore] = React.useState(false)
  const [isSubview, setIsSubView] = React.useState(false)

  if (!filters) return null

  const firstRow = filters.slice(0, firstRowFilters)
  const secondRow = filters.slice(firstRowFilters)

  const renderFilter = (filter: FilterProps, index: number) =>
    !filterRender ? (
      <Filter key={filter.name} {...filter} />
    ) : (
      filterRender(Filter, filter, index)
    )

  return (
    <Form style={{ width: '100%' }}>
      <Grid container justify="center" alignItems="flex-start">
        <Grid item xs container>
          {!isSubview ? (
            <>
              <Grid container spacing={2}>
                {firstRow.map(renderFilter)}
              </Grid>
              {secondRow.length ? (
                <Collapse
                  in={filterMore}
                  timeout="auto"
                  style={{ width: '100%' }}
                >
                  <Grid container spacing={2} style={{ marginTop: 8 }}>
                    {secondRow.map((filter: FilterProps, index: number) =>
                      renderFilter(filter, index + firstRowFilters)
                    )}
                  </Grid>
                </Collapse>
              ) : null}
            </>
          ) : (
            <>{SubView}</>
          )}
        </Grid>
        <Grid
          item
          container
          direction="column"
          alignItems="center"
          style={{ width: 88, padding: 8 }}
        >
          <Grid item xs>
            {SubView && (
              <IconButton
                style={{ padding: 6, marginLeft: 'auto' }}
                onClick={() => setIsSubView(pre => !pre)}
              >
                {isSubview ? <ChevronLeftIcon /> : <ChevronRightIcon />}
              </IconButton>
            )}
          </Grid>
          <Grid item xs>
            {!isSubview && secondRow.length ? (
              <IconButton
                onClick={() => setFilterMore(pre => !pre)}
                style={{ padding: 6, marginLeft: 'auto' }}
              >
                {filterMore ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </IconButton>
            ) : null}
          </Grid>
        </Grid>
      </Grid>
    </Form>
  )
}

const getInitialValues = (filters: FilterProps[]) => {
  return filters.reduce((total: any, current: FilterProps) => {
    const initValue =
      current.type === 'Select' ? '' : current.type === 'Date' ? null : ''

    total[current.name] = initValue
    return total
  }, {})
}
