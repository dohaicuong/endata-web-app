import React from 'react'
import { makeStyles, Grid } from '@material-ui/core'
import ReportActions from './ReportActions'

import { graphql } from 'babel-plugin-relay/macro'
import { useLazyLoadQuery } from 'react-relay/hooks'
import { ReportQuery } from './__generated__/ReportQuery.graphql'
import ReportCard from './ReportCard'
import { Formik, Form } from 'formik'

const Report = () => {
  const classes = useStyles()
  const data = useLazyLoadQuery<ReportQuery>(
    graphql`
      query ReportQuery($where: ENDataEntityKey!) {
        claimJob(where: $where) {
          reportForm {
            cards {
              id
              order
              grid
              ...ReportCard_cart
            }
          }
        }
      }
    `,
    {
      where: {
        id: 'Q2xhaW1Kb2I6MjE1Mzk4',
      },
    }
  )

  const sortedCards = data.claimJob?.reportForm?.cards
    ?.slice()
    .sort((a: any, b: any) => a.order - b.order)

  return (
    <Formik
      initialValues={{}}
      onSubmit={async values => {
        console.log(values)
      }}
    >
      <Form className={classes.root}>
        <ReportActions />
        <Grid container spacing={2} className={classes.contentRoot}>
          {sortedCards?.map(card => {
            const grid = card.grid as any
            return (
              <Grid item xs={grid}>
                <ReportCard key={card.id} card={card} />
              </Grid>
            )
          })}
        </Grid>
      </Form>
    </Formik>
  )
}
export default Report

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(),
  },
  contentRoot: {
    marginTop: theme.spacing(),
  },
}))
