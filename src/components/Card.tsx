import React from 'react'
import {
  Paper as MuiPaper,
  PaperProps as MuiPaperProps,
  makeStyles,
  CircularProgress,
} from '@material-ui/core'

interface CardProps extends MuiPaperProps {
  title?: any
  loading?: boolean
}
const Card: React.FC<CardProps> = ({ title, children, loading, ...props }) => {
  const classes = useStyles({})

  return (
    <MuiPaper
      {...props}
      className={`${classes.root} ${props.className ? props.className : ''}`}
    >
      {title && <div className={classes.paperTitle}>{title}</div>}
      <div className={classes.paperContent}>
        {loading && (
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
        )}
        {!loading && children}
      </div>
    </MuiPaper>
  )
}
export default Card

const useStyles = makeStyles(theme => ({
  root: {
    padding: 0,
    height: '100%',
  },
  paperTitle: {
    ...theme.mixins.gutters(),
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    borderRadius: '8px 8px 0 0',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    fontSize: '1rem',
    fontWeight: 800,
  },
  paperContent: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}))
