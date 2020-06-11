import React from 'react'

import renderField from 'pages/ClaimAdd/AddClaim/cards/renderField'
import RefNumberField from 'components/FormikCustom/RefNumberField'
import Info from 'components/Info'
import LinkIcon from '@material-ui/icons/Link'

import { useFragment } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { JobInfoClaimDetailsRow2_claim$key } from './__generated__/JobInfoClaimDetailsRow2_claim.graphql'
import { JobInfoClaimDetailsRow2_meta$key } from './__generated__/JobInfoClaimDetailsRow2_meta.graphql'

type JobInfoClaimDetailsRow2Props = {
  claim: JobInfoClaimDetailsRow2_claim$key | null
  meta: JobInfoClaimDetailsRow2_meta$key | null
}
const JobInfoClaimDetailsRow2: React.FC<JobInfoClaimDetailsRow2Props> = props => {
  const meta = useFragment(
    graphql`
      fragment JobInfoClaimDetailsRow2_meta on Query {
        currentUser {
          userType
        }
      }
    `,
    props.meta
  )

  const claim = useFragment(
    graphql`
      fragment JobInfoClaimDetailsRow2_claim on ClaimJob {
        hasContents
        insurer {
          contentsref
        }

        refNumber
        contentsRefNum

        building {
          jobSuppliers {
            quote {
              supplier {
                companyName
              }
            }
          }
          authorisedSupplier {
            companyName
          }
          scopingSupplier {
            companyName
          }
        }

        restoration {
          jobSuppliers {
            quote {
              supplier {
                companyName
              }
            }
          }
          authorisedSupplier {
            companyName
          }
          scopingSupplier {
            companyName
          }
        }
      }
    `,
    props.claim
  )

  const userType = meta?.currentUser?.userType ?? null
  const quotingBuilder = claim?.building?.jobSuppliers
    ? claim?.building?.jobSuppliers[0]?.quote?.supplier?.companyName ?? null
    : null
  const authorisedBuilder =
    claim?.building?.authorisedSupplier?.companyName ?? null
  const scopingBuilder = claim?.building?.scopingSupplier?.companyName ?? null
  const allocatedBuilder = React.useMemo(() => {
    if (userType === 'Builder') return quotingBuilder || 'N/a'
    return authorisedBuilder || scopingBuilder || 'N/a'
  }, [userType, quotingBuilder, authorisedBuilder, scopingBuilder])

  const quotingRestorer = claim?.restoration?.jobSuppliers
    ? claim?.restoration?.jobSuppliers[0]?.quote?.supplier?.companyName ?? null
    : null
  const authorisedRestorer =
    claim?.restoration?.authorisedSupplier?.companyName ?? null
  const scopingRestorer =
    claim?.restoration?.scopingSupplier?.companyName ?? null
  const allocatedRestorer = React.useMemo(() => {
    if (userType === 'Restorer') return quotingRestorer || 'N/a'
    return authorisedRestorer || scopingRestorer || 'N/a'
  }, [userType, quotingRestorer, authorisedRestorer, scopingRestorer])

  return (
    <>
      {renderField({
        component: RefNumberField,
        label: 'Insurance Ref #',
        name: 'refNumber',
        required: true,
        startAdornment: <LinkIcon />,
        defaultValue: claim?.refNumber,
      })}
      {renderField({
        component: RefNumberField,
        label: 'Contents Ref #',
        name: 'contentsRefNum',
        startAdornment: <LinkIcon />,
        unMountOn: !claim?.insurer?.contentsref || !claim.hasContents,
        defaultValue: claim?.contentsRefNum,
      })}
      {renderField({
        component: Info,
        label: 'Builder Allocated',
        value: allocatedBuilder,
      })}
      {renderField({
        component: Info,
        label: 'Restorer Allocated',
        value: allocatedRestorer,
      })}
    </>
  )
}
export default JobInfoClaimDetailsRow2
