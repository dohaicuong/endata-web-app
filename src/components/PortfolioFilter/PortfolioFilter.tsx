import React from 'react'
import { Paper, Button } from '@material-ui/core'
import PortfolioIcon from 'components/PortfolioIcon'

export type PortfolioFilterProps = {
  portfolios: PortfolioType[]

  value: PortfolioType
  setValue: (value: PortfolioType) => void
}
export type PortfolioType = 'Building' | 'Contents' | 'Restoration'

const PortfolioFilter: React.FC<PortfolioFilterProps> = ({
  portfolios,
  value,
  setValue,
}) => {
  return (
    <Paper style={{ display: 'flex', flexDirection: 'column', padding: 4 }}>
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
