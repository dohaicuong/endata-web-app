import React from 'react'
import { graphql } from 'babel-plugin-relay/macro'
import { useLazyLoadQuery } from 'react-relay/hooks'
import { CommunicationMenuQuery } from './__generated__/CommunicationMenuQuery.graphql'
import { useHistory } from 'react-router-dom'
import {
  IconButton,
  Badge,
  Menu,
  makeStyles,
  ListItem,
  ListItemText,
  Divider,
  MenuItem,
  Button,
} from '@material-ui/core'
import MailIcon from '@material-ui/icons/Mail'

const CommunicationMenu = () => {
  const classes = useStyles()

  const { push } = useHistory()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const handleClick = (event: any) => setAnchorEl(event.currentTarget)
  const handleClose = () => setAnchorEl(null)
  const handleSeeMore = () => {
    handleClose()
    push('/communicationtasks')
  }
  const handleSeeLink = (id: any) => {
    handleClose()
    push(`/claim/${id}/communications`)
  }

  const data = useLazyLoadQuery<CommunicationMenuQuery>(
    graphql`
      query CommunicationMenuQuery {
        communications: claimCommuications(
          first: 2
          where: { boxes: Inbox, acknowledged: false }
        ) {
          totalCount
          edges {
            node {
              id
              claimRef
              message
            }
          }
        }
      }
    `,
    {}
  )

  return (
    <>
      <IconButton onClick={handleClick} color="inherit">
        <Badge
          max={99}
          color="secondary"
          badgeContent={data.communications?.totalCount}
        >
          <MailIcon />
        </Badge>
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          className: classes.menuPaper,
        }}
      >
        <ListItem tabIndex={-1}>
          <ListItemText primary="Communication Tasks" />
        </ListItem>
        <Divider />
        {data.communications?.edges?.map(edge => {
          if (!edge?.node) return null
          return (
            <MessageItem
              key={edge.node.id}
              {...edge.node}
              onClick={() => handleSeeLink(edge.node?.id)}
            />
          )
        })}
        <Divider />
        <ListItem>
          <ListItemText primary={`Total: ${data.communications?.totalCount}`} />
          <Button
            variant="outlined"
            color="primary"
            className={classes.seeMoreButton}
            onClick={handleSeeMore}
          >
            See more...
          </Button>
        </ListItem>
      </Menu>
    </>
  )
}
export default CommunicationMenu

const useStyles = makeStyles(theme => ({
  menuPaper: {
    minWidth: 200,
    maxWidth: 350,
  },
  seeMoreButton: {
    marginLeft: theme.spacing(),
  },
}))

type MessageItemProps = {
  id: string
  claimRef: string
  message: string | null
  onClick: () => void
}
const MessageItem: React.FC<MessageItemProps> = ({
  id,
  claimRef,
  message,
  onClick,
}) => {
  return (
    <ListItem key={id} component={MenuItem} button onClick={onClick}>
      <ListItemText primary={claimRef} secondary={message} />
    </ListItem>
  )
}
