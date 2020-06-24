import React from 'react'
import { makeStyles, Grid } from '@material-ui/core'
import ReportActions from './ReportActions'

import { graphql } from 'babel-plugin-relay/macro'
import { useLazyLoadQuery, useMutation } from 'react-relay/hooks'
import ReportCard from './ReportCard'
import { Formik, Form } from 'formik'
import { useSnackbar } from 'notistack'

import { TabProps } from '../tabs'
import { ReportQuery } from './__generated__/ReportQuery.graphql'
import { ReportSaveReportMutation } from './__generated__/ReportSaveReportMutation.graphql'
import { ReportResetReportMutation } from './__generated__/ReportResetReportMutation.graphql'
import { ReportSubmitReportMutation } from './__generated__/ReportSubmitReportMutation.graphql'

const Report: React.FC<TabProps> = ({ claimId }) => {
  const classes = useStyles()

  const [refreshKey, setRefreshKey] = React.useState(0)
  const refreshQuery = () => setRefreshKey(pre => pre + 1)
  const data = useLazyLoadQuery<ReportQuery>(
    graphql`
      query ReportQuery($claimId: ID!) {
        ...ReportActions_data

        claimJob(where: { id: $claimId }) {
          # dont remove reportFormId
          reportFormId
          reportForm {
            cards {
              id
              order
              grid
              ...ReportCard_cart
            }
          }
          reportData {
            data
            status
          }
        }
      }
    `,
    { claimId },
    {
      fetchPolicy: 'store-and-network',
      fetchKey: refreshKey,
    }
  )

  const { enqueueSnackbar } = useSnackbar()
  const [saveReportMutation] = useMutation<ReportSaveReportMutation>(graphql`
    mutation ReportSaveReportMutation($claimId: ID!, $data: Json!) {
      claimReportUpsert(claimId: $claimId, data: $data) {
        id
      }
    }
  `)
  const [resetReportMutation] = useMutation<ReportResetReportMutation>(graphql`
    mutation ReportResetReportMutation($claimId: ID!) {
      claimReportReset(claimId: $claimId) {
        id
      }
    }
  `)
  const [submitReportMutation] = useMutation<
    ReportSubmitReportMutation
  >(graphql`
    mutation ReportSubmitReportMutation($claimId: ID!) {
      claimReportSubmit(claimId: $claimId) {
        id
      }
    }
  `)
  const resetReport = () => {
    resetReportMutation({
      variables: { claimId },
      onCompleted: (res, errors) => {
        if (errors) {
          return errors.forEach(error =>
            enqueueSnackbar(error.message, { variant: 'error' })
          )
        }

        enqueueSnackbar('Report reset', { variant: 'success' })
        refreshQuery()
      },
    })
  }
  const submitReport = () => {
    submitReportMutation({
      variables: { claimId },
      onCompleted: (res, errors) => {
        if (errors) {
          return errors.forEach(error =>
            enqueueSnackbar(error.message, { variant: 'error' })
          )
        }

        enqueueSnackbar('Report submitted', { variant: 'success' })
        refreshQuery()
      },
    })
  }

  const sortedCards = data.claimJob?.reportForm?.cards
    ?.slice()
    .sort((a: any, b: any) => a.order - b.order)

  const isSavedData = Boolean(data.claimJob?.reportData)
  const isReadOnly = data.claimJob?.reportData?.status === 'REPORTED'
  const reportData = (data.claimJob?.reportData?.data ?? {}) as any

  return (
    <Formik
      initialValues={reportData}
      onSubmit={async values => {
        saveReportMutation({
          variables: { claimId, data: values },
          onCompleted: (res, errors) => {
            if (errors) {
              return errors.forEach(error =>
                enqueueSnackbar(error.message, { variant: 'error' })
              )
            }

            enqueueSnackbar('Report saved', { variant: 'success' })
            refreshQuery()
          },
        })
      }}
    >
      <Form className={classes.root}>
        <ReportActions
          data={data}
          isSavedData={isSavedData}
          isReadOnly={isReadOnly}
          resetReport={resetReport}
          submitReport={submitReport}
        />
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
