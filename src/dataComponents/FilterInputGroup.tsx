import React from 'react'
import FilterInput from 'dataComponents/FilterInput'
import { Formik, Form } from 'formik'
import { Grid, Collapse, IconButton, Paper } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'

type FilterInputGroupProps = {
  filters: any
  onChange?: (values: any) => void

  subview?: any
  onViewChange?: (isSub: boolean) => void
}
const FilterInputGroup: React.FC<FilterInputGroupProps> = ({
  filters,
  onChange,
  onViewChange,
  subview,
}) => {
  const [isExpand, setIsExpand] = React.useState(false)
  const [isSubview, setIsSubView] = React.useState(false)
  const handleViewChange = () => {
    setIsSubView(pre => !pre)
    if (onViewChange) onViewChange(isSubview)
  }

  const firstRowFilters = 6
  const firstRow = filters.slice(0, firstRowFilters)
  const secondRow = filters.slice(firstRowFilters)

  return (
    <Paper style={{ padding: 16 }}>
      <Formik
        initialValues={{}}
        validateOnChange
        validate={values => {
          if (onChange) {
            const cleanedValues = Object.fromEntries(
              Object.entries(values).filter(([, value]) => value)
            )
            onChange(cleanedValues)
          }
        }}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onSubmit={() => {}}
      >
        <Form>
          <Grid container spacing={1}>
            <Grid item xs>
              {isSubview ? (
                <>{subview}</>
              ) : (
                <>
                  <Grid container spacing={2}>
                    {firstRow?.map((data: any, index: number) => (
                      <Grid item xs={2} key={index}>
                        <FilterInput data={data} />
                      </Grid>
                    ))}
                  </Grid>
                  <Collapse
                    in={isExpand}
                    timeout="auto"
                    style={{ width: '100%' }}
                  >
                    <Grid container spacing={2} style={{ marginTop: 8 }}>
                      {secondRow?.map((data: any, index: number) => (
                        <Grid item xs={2} key={index}>
                          <FilterInput data={data} />
                        </Grid>
                      ))}
                    </Grid>
                  </Collapse>
                </>
              )}
            </Grid>
            <Grid item>
              <Grid container direction="column">
                {Boolean(subview) && (
                  <Grid item xs={6} style={{ minHeight: 48 }}>
                    <IconButton
                      // style={{ padding: 6 }}
                      onClick={handleViewChange}
                    >
                      {isSubview ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                  </Grid>
                )}
                <Grid item xs={6}>
                  {!isSubview && Boolean(secondRow.length) && (
                    <IconButton
                      onClick={() => setIsExpand(pre => !pre)}
                      // style={{ padding: 6 }}
                    >
                      {isExpand ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </IconButton>
                  )}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </Paper>
  )
}
export default FilterInputGroup
