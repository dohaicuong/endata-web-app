import React from 'react'

import { COMPANY_RESOURCE } from 'configs'
import { useFragment } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { RightSide_data$key } from './__generated__/RightSide_data.graphql'
import SystemMenu from './SystemMenu'
import CommunicationMenu from './CommunicationMenu'

export type RightSideProps = {
  data: RightSide_data$key | null
}
const RightSide: React.FC<RightSideProps> = props => {
  const data = useFragment(
    graphql`
      fragment RightSide_data on User {
        privileges {
          menus {
            nodeName
          }
        }
      }
    `,
    props.data
  )

  const communicationMenu = data?.privileges?.menus?.filter(menu => {
    return menu?.nodeName === 'communicationtasks'
  })
  const isCommunicationMenu = Boolean(communicationMenu?.length)

  return (
    <>
      {isCommunicationMenu && <CommunicationMenu />}
      <div style={{ marginRight: 8 }}>
        <SystemMenu />
      </div>
      <img src={`${COMPANY_RESOURCE}/endata/logo.png`} alt="ENData Claims" />
    </>
  )
}
export default RightSide
