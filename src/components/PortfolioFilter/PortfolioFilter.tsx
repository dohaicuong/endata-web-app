import React from 'react'
import { Paper, Button } from '@material-ui/core'
import PortfolioIcon from 'components/PortfolioIcon'
import { PortfolioType } from 'pages/Claim/__generated__/ClaimInfoCard_info.graphql'
import SelectAllIcon from '@material-ui/icons/SelectAll'

export type PortfolioFilterProps = {
  portfolios: PortfolioType[]
  isSelectAll?: boolean

  value?: PortfolioType
  setValue: (value?: PortfolioType) => void
}

const PortfolioFilter: React.FC<PortfolioFilterProps> = ({
  portfolios,
  value,
  setValue,
  isSelectAll = false,
}) => {
  return (
    <Paper style={{ display: 'flex', flexDirection: 'column', padding: 4 }}>
      {isSelectAll && (
        <Button
          style={{
            margin: 0,
            marginBottom: 4,
            minWidth: 50,
            width: 50,
          }}
          variant={!value ? 'contained' : 'text'}
          onClick={() => setValue()}
        >
          <SelectAllIcon style={{ margin: 0, fontSize: '1.5rem' }} />
        </Button>
      )}
      {portfolios.map(portfolio => (
        <Button
          key={portfolio}
          style={{
            margin: 0,
            marginBottom: 4,
            minWidth: 50,
            width: 50,
          }}
          variant={value === portfolio ? 'contained' : 'text'}
          onClick={() => setValue(portfolio)}
        >
          <PortfolioIcon
            portfolio={portfolio}
            style={{ margin: 0, fontSize: '1.5rem' }}
          />
        </Button>
      ))}
    </Paper>
  )
}
export default PortfolioFilter
