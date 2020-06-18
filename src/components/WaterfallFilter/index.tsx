import React from 'react'
import { Grid, Button } from '@material-ui/core'

export type WaterfallFilterProps = {
  value: any
  setValue: (value: any) => void
  groups?: any
  // WaterFallFilterGroup[] | null
}

export type WaterFallFilterGroup = {
  items: WaterfallFilterItem[]
}

export type WaterfallFilterItem = {
  label: string
  value: string
  claimCount: number
  color: string
}

const WaterfallFilter: React.FC<WaterfallFilterProps> = ({
  groups,
  value: selected,
  setValue,
}) => {
  return (
    <Grid container justify="flex-start" alignItems="flex-start" spacing={1}>
      {groups?.map(({ items }: any, index: any) => (
        <Grid
          key={index}
          item
          xs
          container
          direction="column"
          style={{ margin: 0 }}
          spacing={0}
        >
          {items.map(({ value, claimCount, label, color }: any) => (
            <Grid item xs key={value}>
              <Button
                style={{
                  margin: 0,
                  padding: '4px 8px',
                  fontWeight: 600,
                  border: '1px solid rgba(0, 0, 0, 0.12)',
                  display: 'flex',
                  // background: color,
                  // color: 'rgba(0, 0, 0, 0.87)',
                  background:
                    selected === value ? 'rgba(0, 0, 0, 0.87)' : color,
                  color: selected === value ? '#fff' : 'rgba(0, 0, 0, 0.87)',
                }}
                // variant='contained'
                onClick={() =>
                  !selected
                    ? setValue(value)
                    : selected !== value
                    ? setValue(value)
                    : setValue(null)
                }
                fullWidth
              >
                <div
                  style={{
                    flexGrow: 1,
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <div> {label} </div>
                  <div style={{ justifyContent:'' }}>
                    <span>{claimCount}</span>
                  </div>
                </div>
              </Button>
            </Grid>
          ))}
        </Grid>
      ))}
    </Grid>
  )
}
export default WaterfallFilter
