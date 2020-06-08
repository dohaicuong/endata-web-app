import React from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom'
import { useLazyLoadQuery } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { ChooseCompanyQuery } from './__generated__/ChooseCompanyQuery.graphql'
import { TextField, MenuItem, Container } from '@material-ui/core'
import Card from 'components/Card'

const ChooseCompany = () => {
  const { url } = useRouteMatch()
  const { push } = useHistory()

  const data = useLazyLoadQuery<ChooseCompanyQuery>(
    graphql`
      query ChooseCompanyQuery {
        company: claimFilterOptions(where: { subject: "insurers" }) {
          label: name
          value
        }
      }
    `,
    {}
  )
  const options = data?.company

  const [companyId, setCompanyId] = React.useState('')
  const handleInputChange = (e: any) => {
    setCompanyId(e.target.value)
    push(`${url}/${e.target.value}`)
  }

  React.useEffect(() => {
    if (options && options.length === 1) {
      options[0] && push(`${url}/${options[0].value}`)
    }
  }, [options, push, url])

  return (
    <Container maxWidth="sm" style={{ marginTop: 16 }}>
      <Card title="Select a company">
        <TextField
          label="Company"
          name="companyId"
          value={companyId}
          select
          required
          fullWidth
          variant="outlined"
          onChange={handleInputChange}
        >
          {options?.map(company => (
            <MenuItem key={company?.value} value={company?.value}>
              {company?.label}
            </MenuItem>
          ))}
        </TextField>
      </Card>
    </Container>
  )
}
export default ChooseCompany
