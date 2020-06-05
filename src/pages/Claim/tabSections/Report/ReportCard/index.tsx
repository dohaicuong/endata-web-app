import React from 'react'
import { graphql } from 'babel-plugin-relay/macro'
import { useFragment } from 'react-relay/hooks'
import { ReportCard_cart$key } from './__generated__/ReportCard_cart.graphql'
import Card from 'components/Card'
import { Grid, makeStyles } from '@material-ui/core'
import ReportCardField from '../ReportCardField'

export type ReportCardProps = {
  card: ReportCard_cart$key | null
}
const ReportCard: React.FC<ReportCardProps> = props => {
  const classes = useStyles()
  const card = useFragment(
    graphql`
      fragment ReportCard_cart on Card {
        id
        title
        fields {
          id
          grid
          order
          ...ReportCardField_field
        }
      }
    `,
    props.card
  )

  if (!card) return null

  const sortedFields = card.fields
    ?.slice()
    .sort((a: any, b: any) => a.order - b.order)

  return (
    <Card title={card.title}>
      <Grid container direction="row" spacing={2} className={classes.fieldRoot}>
        {sortedFields?.map(field => {
          const grid = field.grid as any
          return (
            <Grid key={field.id} item xs={grid}>
              <ReportCardField field={field} />
            </Grid>
          )
        })}
      </Grid>
    </Card>
  )
}
export default ReportCard

const useStyles = makeStyles(theme => ({
  fieldRoot: {
    marginTop: theme.spacing(),
  },
}))
