/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ClaimPageQueryVariables = {
    claimId: string;
};
export type ClaimPageQueryResponse = {
    readonly claimJob: {
        readonly id: string;
        readonly " $fragmentRefs": FragmentRefs<"ClaimInfoCard_info" | "JobInfo_claim">;
    } | null;
    readonly currentUser: {
        readonly " $fragmentRefs": FragmentRefs<"ClaimInfoCard_user">;
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"actions_data">;
};
export type ClaimPageQuery = {
    readonly response: ClaimPageQueryResponse;
    readonly variables: ClaimPageQueryVariables;
};



/*
query ClaimPageQuery(
  $claimId: ID!
) {
  claimJob(where: {id: $claimId}) {
    id
    ...ClaimInfoCard_info
    ...JobInfo_claim
  }
  currentUser {
    ...ClaimInfoCard_user
    id
  }
}

fragment CashSettle_claim on ClaimJob {
  id
}

fragment ClaimFinaliseResetForm_data on ClaimPortfolio {
  finaliseReason {
    name
    id
  }
  dateCompleted
}

fragment ClaimFinalise_claim on ClaimJob {
  id
  hasBuilding
  building {
    claimStatus {
      statusName
      id
    }
    ...ClaimFinaliseResetForm_data
    id
  }
  hasContents
  contents {
    claimStatus {
      statusName
      id
    }
    ...ClaimFinaliseResetForm_data
    id
  }
  hasRestoration
  restoration {
    claimStatus {
      statusName
      id
    }
    ...ClaimFinaliseResetForm_data
    id
  }
}

fragment ClaimInfoCard_info on ClaimJob {
  insurer {
    companyName
    policyTypeSuppliersView
    policyCoverSuppliersView
  }
  refNumber
  incidentDetail {
    riskAddress {
      line1
      suburb
      state
      postcode
    }
    eventType {
      eventName
    }
    cATCode {
      cATCodeName
    }
  }
  insured {
    name
    phone1
    phone2
    phone3
    email
  }
  lodgeDate
  policyType {
    policyTypeName
  }
  policyCover {
    policyCoverName
  }
  building {
    claimStatus {
      statusName
      id
    }
    scopingSupplier {
      companyName
      companyPhone1
      companyPhone2
    }
    authorisedSupplier {
      companyName
      companyPhone1
      companyPhone2
    }
    jobSuppliers {
      quote {
        supplier {
          companyName
        }
        quoteStatus: quoteJobStatus {
          statusName
          id
        }
        id
      }
      id
    }
    toCollectExcess
    excessValue
    id
  }
  restoration {
    claimStatus {
      statusName
      id
    }
    scopingSupplier {
      companyName
      companyPhone1
      companyPhone2
    }
    authorisedSupplier {
      companyName
      companyPhone1
      companyPhone2
    }
    jobSuppliers {
      quote {
        supplier {
          companyName
        }
        quoteStatus: quoteJobStatus {
          statusName
          id
        }
        id
      }
      id
    }
    toCollectExcess
    excessValue
    id
  }
  contents {
    portfolioType
    claimStatus {
      statusName
      id
    }
    toCollectExcess
    excessValue
    id
  }
}

fragment ClaimInfoCard_user on AuthenticatedUser {
  userType
}

fragment JobInfoActions_actions on ClaimJobAction {
  updateClaim {
    label
    isDisabled
    isDisplay
    id
  }
}

fragment JobInfoClaimDescription_claim on ClaimJob {
  claimDescription
}

fragment JobInfoClaimDetailsRow1_claim on ClaimJob {
  insurer {
    companyName
  }
  incidentDetail {
    incidentDate
  }
  caseManager {
    managerId
    id
  }
  externalLossAdjuster {
    companyId
  }
}

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
        id
      }
      id
    }
    authorisedSupplier {
      companyName
    }
    scopingSupplier {
      companyName
    }
    id
  }
  restoration {
    jobSuppliers {
      quote {
        supplier {
          companyName
        }
        id
      }
      id
    }
    authorisedSupplier {
      companyName
    }
    scopingSupplier {
      companyName
    }
    id
  }
}

fragment JobInfoClaimDetailsRow3_claim on ClaimJob {
  lodgeDate
  incidentDetail {
    hold
  }
  insurer {
    quickrepair
  }
  building {
    toCollectExcess
    excessValue
    sumInsured
    id
  }
}

fragment JobInfoClaimDetailsRow4_claim on ClaimJob {
  insurer {
    companyName
  }
  incidentDetail {
    eventType {
      eventTypeId
    }
    cATCode {
      cATCodeId
    }
  }
  contents {
    toCollectExcess
    excessValue
    sumInsured
    id
  }
}

fragment JobInfoClaimDetailsRow5_claim on ClaimJob {
  insurer {
    policyTypeSuppliersView
    policyCoverSuppliersView
  }
  policyType {
    policyTypeId
  }
  policyCover {
    policyCoverId
  }
  restoration {
    toCollectExcess
    excessValue
    sumInsured
    id
  }
}

fragment JobInfoClaimDetailsRow6_claim on ClaimJob {
  insurer {
    enableMultipleRisks
    additionalRefNo
    useInternalAssessor
    cm2nd
  }
  riskname
  additionalRefNumber
  homeAssessor {
    assesorId
    id
  }
  brc {
    managerId
    id
  }
}

fragment JobInfoClaimDetails_claim on ClaimJob {
  ...JobInfoClaimDetailsRow1_claim
  ...JobInfoClaimDetailsRow2_claim
  ...JobInfoClaimDetailsRow3_claim
  ...JobInfoClaimDetailsRow4_claim
  ...JobInfoClaimDetailsRow5_claim
  ...JobInfoClaimDetailsRow6_claim
}

fragment JobInfoCustomerInfoRow1_claim on ClaimJob {
  insured {
    salutation
    name
    email
  }
}

fragment JobInfoCustomerInfoRow2_claim on ClaimJob {
  insurer {
    setupcustomerlogin
  }
  incidentDetail {
    riskAddress {
      line1
      line2
    }
  }
  requireCustomLogin
  customLoginEmail
}

fragment JobInfoCustomerInfoRow3_claim on ClaimJob {
  incidentDetail {
    riskAddress {
      suburb
      state
      postcode
    }
    habitableProperty
    category
  }
  insurer {
    removeHabitableAsbestos
    hideCategoryOfClaim
  }
}

fragment JobInfoCustomerInfoRow4_claim on ClaimJob {
  insured {
    phone1
    phone2
  }
  view {
    actions {
      cashSettle {
        label
        isDisplay
        isDisabled
        id
      }
      claimFinalise {
        label
        isDisplay
        isDisabled
        id
      }
    }
  }
  ...ClaimFinalise_claim
  ...CashSettle_claim
}

fragment JobInfoCustomerInfoRow5_claim on ClaimJob {
  insured {
    phone3
    fax
  }
}

fragment JobInfoCustomerInfo_claim on ClaimJob {
  ...JobInfoCustomerInfoRow1_claim
  ...JobInfoCustomerInfoRow2_claim
  ...JobInfoCustomerInfoRow3_claim
  ...JobInfoCustomerInfoRow4_claim
  ...JobInfoCustomerInfoRow5_claim
}

fragment JobInfoPostalAddress_claim on ClaimJob {
  insured {
    postalAddress {
      line1
      line2
      suburb
      state
      postcode
    }
  }
}

fragment JobInfoTenantInfo_claim on ClaimJob {
  tenantDetails {
    name
    phone1
    phone2
    phone3
  }
}

fragment JobInfo_claim on ClaimJob {
  insurer {
    companyId
  }
  incidentDetail {
    riskAddress {
      postcode
    }
  }
  building {
    scopingSupplier {
      companyId
    }
    id
  }
  restoration {
    scopingSupplier {
      companyId
    }
    id
  }
  view {
    actions {
      ...JobInfoActions_actions
    }
  }
  ...JobInfoClaimDetails_claim
  ...JobInfoCustomerInfo_claim
  ...JobInfoPostalAddress_claim
  ...JobInfoTenantInfo_claim
  ...JobInfoClaimDescription_claim
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "claimId",
    "type": "ID!"
  }
],
v1 = [
  {
    "fields": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "claimId"
      }
    ],
    "kind": "ObjectValue",
    "name": "where"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "companyName",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "companyId",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "line1",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "suburb",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "state",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "postcode",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "line2",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "phone1",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "phone2",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "phone3",
  "storageKey": null
},
v14 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "statusName",
    "storageKey": null
  },
  (v2/*: any*/)
],
v15 = {
  "alias": null,
  "args": null,
  "concreteType": "ClaimStatus",
  "kind": "LinkedField",
  "name": "claimStatus",
  "plural": false,
  "selections": (v14/*: any*/),
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "companyPhone1",
  "storageKey": null
},
v17 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "companyPhone2",
  "storageKey": null
},
v18 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "toCollectExcess",
  "storageKey": null
},
v19 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "excessValue",
  "storageKey": null
},
v20 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "sumInsured",
  "storageKey": null
},
v21 = {
  "alias": null,
  "args": null,
  "concreteType": "ClaimFinaliseReason",
  "kind": "LinkedField",
  "name": "finaliseReason",
  "plural": false,
  "selections": [
    (v10/*: any*/),
    (v2/*: any*/)
  ],
  "storageKey": null
},
v22 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "dateCompleted",
  "storageKey": null
},
v23 = [
  (v15/*: any*/),
  {
    "alias": null,
    "args": null,
    "concreteType": "Company",
    "kind": "LinkedField",
    "name": "scopingSupplier",
    "plural": false,
    "selections": [
      (v3/*: any*/),
      (v16/*: any*/),
      (v17/*: any*/),
      (v4/*: any*/)
    ],
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "Company",
    "kind": "LinkedField",
    "name": "authorisedSupplier",
    "plural": false,
    "selections": [
      (v3/*: any*/),
      (v16/*: any*/),
      (v17/*: any*/)
    ],
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "JobSupplier",
    "kind": "LinkedField",
    "name": "jobSuppliers",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "JobQuote",
        "kind": "LinkedField",
        "name": "quote",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Company",
            "kind": "LinkedField",
            "name": "supplier",
            "plural": false,
            "selections": [
              (v3/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": "quoteStatus",
            "args": null,
            "concreteType": "ClaimStatus",
            "kind": "LinkedField",
            "name": "quoteJobStatus",
            "plural": false,
            "selections": (v14/*: any*/),
            "storageKey": null
          },
          (v2/*: any*/)
        ],
        "storageKey": null
      },
      (v2/*: any*/)
    ],
    "storageKey": null
  },
  (v18/*: any*/),
  (v19/*: any*/),
  (v2/*: any*/),
  (v20/*: any*/),
  (v21/*: any*/),
  (v22/*: any*/)
],
v24 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "label",
  "storageKey": null
},
v25 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isDisabled",
  "storageKey": null
},
v26 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isDisplay",
  "storageKey": null
},
v27 = [
  (v24/*: any*/),
  (v26/*: any*/),
  (v25/*: any*/),
  (v2/*: any*/)
],
v28 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "managerId",
    "storageKey": null
  },
  (v2/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ClaimPageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ClaimJob",
        "kind": "LinkedField",
        "name": "claimJob",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ClaimInfoCard_info"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "JobInfo_claim"
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "AuthenticatedUser",
        "kind": "LinkedField",
        "name": "currentUser",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ClaimInfoCard_user"
          }
        ],
        "storageKey": null
      },
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "actions_data"
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ClaimPageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ClaimJob",
        "kind": "LinkedField",
        "name": "claimJob",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Company",
            "kind": "LinkedField",
            "name": "insurer",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "policyTypeSuppliersView",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "policyCoverSuppliersView",
                "storageKey": null
              },
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "contentsref",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "quickrepair",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "enableMultipleRisks",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "additionalRefNo",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "useInternalAssessor",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "cm2nd",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "setupcustomerlogin",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "removeHabitableAsbestos",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hideCategoryOfClaim",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "refNumber",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "IncidentDetail",
            "kind": "LinkedField",
            "name": "incidentDetail",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Address",
                "kind": "LinkedField",
                "name": "riskAddress",
                "plural": false,
                "selections": [
                  (v5/*: any*/),
                  (v6/*: any*/),
                  (v7/*: any*/),
                  (v8/*: any*/),
                  (v9/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "IncidentEvent",
                "kind": "LinkedField",
                "name": "eventType",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "eventName",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "eventTypeId",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "CATCode",
                "kind": "LinkedField",
                "name": "cATCode",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "cATCodeName",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "cATCodeId",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "incidentDate",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hold",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "habitableProperty",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "category",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "ContactDetail",
            "kind": "LinkedField",
            "name": "insured",
            "plural": false,
            "selections": [
              (v10/*: any*/),
              (v11/*: any*/),
              (v12/*: any*/),
              (v13/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "email",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "salutation",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "fax",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Address",
                "kind": "LinkedField",
                "name": "postalAddress",
                "plural": false,
                "selections": [
                  (v5/*: any*/),
                  (v9/*: any*/),
                  (v6/*: any*/),
                  (v7/*: any*/),
                  (v8/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "lodgeDate",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "PolicyType",
            "kind": "LinkedField",
            "name": "policyType",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "policyTypeName",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "policyTypeId",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "PolicyCover",
            "kind": "LinkedField",
            "name": "policyCover",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "policyCoverName",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "policyCoverId",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "ClaimPortfolio",
            "kind": "LinkedField",
            "name": "building",
            "plural": false,
            "selections": (v23/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "ClaimPortfolio",
            "kind": "LinkedField",
            "name": "restoration",
            "plural": false,
            "selections": (v23/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "ClaimPortfolio",
            "kind": "LinkedField",
            "name": "contents",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "portfolioType",
                "storageKey": null
              },
              (v15/*: any*/),
              (v18/*: any*/),
              (v19/*: any*/),
              (v2/*: any*/),
              (v20/*: any*/),
              (v21/*: any*/),
              (v22/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "ClaimJobView",
            "kind": "LinkedField",
            "name": "view",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "ClaimJobAction",
                "kind": "LinkedField",
                "name": "actions",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ActionControl",
                    "kind": "LinkedField",
                    "name": "updateClaim",
                    "plural": false,
                    "selections": [
                      (v24/*: any*/),
                      (v25/*: any*/),
                      (v26/*: any*/),
                      (v2/*: any*/)
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ActionControl",
                    "kind": "LinkedField",
                    "name": "cashSettle",
                    "plural": false,
                    "selections": (v27/*: any*/),
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ActionControl",
                    "kind": "LinkedField",
                    "name": "claimFinalise",
                    "plural": false,
                    "selections": (v27/*: any*/),
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "ClaimManager",
            "kind": "LinkedField",
            "name": "caseManager",
            "plural": false,
            "selections": (v28/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Company",
            "kind": "LinkedField",
            "name": "externalLossAdjuster",
            "plural": false,
            "selections": [
              (v4/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "hasContents",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "contentsRefNum",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "riskname",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "additionalRefNumber",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "InternalAssesor",
            "kind": "LinkedField",
            "name": "homeAssessor",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "assesorId",
                "storageKey": null
              },
              (v2/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "ClaimManager",
            "kind": "LinkedField",
            "name": "brc",
            "plural": false,
            "selections": (v28/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "requireCustomLogin",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "customLoginEmail",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "hasBuilding",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "hasRestoration",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Contact",
            "kind": "LinkedField",
            "name": "tenantDetails",
            "plural": false,
            "selections": [
              (v10/*: any*/),
              (v11/*: any*/),
              (v12/*: any*/),
              (v13/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "claimDescription",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "AuthenticatedUser",
        "kind": "LinkedField",
        "name": "currentUser",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "userType",
            "storageKey": null
          },
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "ClaimPageQuery",
    "operationKind": "query",
    "text": "query ClaimPageQuery(\n  $claimId: ID!\n) {\n  claimJob(where: {id: $claimId}) {\n    id\n    ...ClaimInfoCard_info\n    ...JobInfo_claim\n  }\n  currentUser {\n    ...ClaimInfoCard_user\n    id\n  }\n}\n\nfragment CashSettle_claim on ClaimJob {\n  id\n}\n\nfragment ClaimFinaliseResetForm_data on ClaimPortfolio {\n  finaliseReason {\n    name\n    id\n  }\n  dateCompleted\n}\n\nfragment ClaimFinalise_claim on ClaimJob {\n  id\n  hasBuilding\n  building {\n    claimStatus {\n      statusName\n      id\n    }\n    ...ClaimFinaliseResetForm_data\n    id\n  }\n  hasContents\n  contents {\n    claimStatus {\n      statusName\n      id\n    }\n    ...ClaimFinaliseResetForm_data\n    id\n  }\n  hasRestoration\n  restoration {\n    claimStatus {\n      statusName\n      id\n    }\n    ...ClaimFinaliseResetForm_data\n    id\n  }\n}\n\nfragment ClaimInfoCard_info on ClaimJob {\n  insurer {\n    companyName\n    policyTypeSuppliersView\n    policyCoverSuppliersView\n  }\n  refNumber\n  incidentDetail {\n    riskAddress {\n      line1\n      suburb\n      state\n      postcode\n    }\n    eventType {\n      eventName\n    }\n    cATCode {\n      cATCodeName\n    }\n  }\n  insured {\n    name\n    phone1\n    phone2\n    phone3\n    email\n  }\n  lodgeDate\n  policyType {\n    policyTypeName\n  }\n  policyCover {\n    policyCoverName\n  }\n  building {\n    claimStatus {\n      statusName\n      id\n    }\n    scopingSupplier {\n      companyName\n      companyPhone1\n      companyPhone2\n    }\n    authorisedSupplier {\n      companyName\n      companyPhone1\n      companyPhone2\n    }\n    jobSuppliers {\n      quote {\n        supplier {\n          companyName\n        }\n        quoteStatus: quoteJobStatus {\n          statusName\n          id\n        }\n        id\n      }\n      id\n    }\n    toCollectExcess\n    excessValue\n    id\n  }\n  restoration {\n    claimStatus {\n      statusName\n      id\n    }\n    scopingSupplier {\n      companyName\n      companyPhone1\n      companyPhone2\n    }\n    authorisedSupplier {\n      companyName\n      companyPhone1\n      companyPhone2\n    }\n    jobSuppliers {\n      quote {\n        supplier {\n          companyName\n        }\n        quoteStatus: quoteJobStatus {\n          statusName\n          id\n        }\n        id\n      }\n      id\n    }\n    toCollectExcess\n    excessValue\n    id\n  }\n  contents {\n    portfolioType\n    claimStatus {\n      statusName\n      id\n    }\n    toCollectExcess\n    excessValue\n    id\n  }\n}\n\nfragment ClaimInfoCard_user on AuthenticatedUser {\n  userType\n}\n\nfragment JobInfoActions_actions on ClaimJobAction {\n  updateClaim {\n    label\n    isDisabled\n    isDisplay\n    id\n  }\n}\n\nfragment JobInfoClaimDescription_claim on ClaimJob {\n  claimDescription\n}\n\nfragment JobInfoClaimDetailsRow1_claim on ClaimJob {\n  insurer {\n    companyName\n  }\n  incidentDetail {\n    incidentDate\n  }\n  caseManager {\n    managerId\n    id\n  }\n  externalLossAdjuster {\n    companyId\n  }\n}\n\nfragment JobInfoClaimDetailsRow2_claim on ClaimJob {\n  hasContents\n  insurer {\n    contentsref\n  }\n  refNumber\n  contentsRefNum\n  building {\n    jobSuppliers {\n      quote {\n        supplier {\n          companyName\n        }\n        id\n      }\n      id\n    }\n    authorisedSupplier {\n      companyName\n    }\n    scopingSupplier {\n      companyName\n    }\n    id\n  }\n  restoration {\n    jobSuppliers {\n      quote {\n        supplier {\n          companyName\n        }\n        id\n      }\n      id\n    }\n    authorisedSupplier {\n      companyName\n    }\n    scopingSupplier {\n      companyName\n    }\n    id\n  }\n}\n\nfragment JobInfoClaimDetailsRow3_claim on ClaimJob {\n  lodgeDate\n  incidentDetail {\n    hold\n  }\n  insurer {\n    quickrepair\n  }\n  building {\n    toCollectExcess\n    excessValue\n    sumInsured\n    id\n  }\n}\n\nfragment JobInfoClaimDetailsRow4_claim on ClaimJob {\n  insurer {\n    companyName\n  }\n  incidentDetail {\n    eventType {\n      eventTypeId\n    }\n    cATCode {\n      cATCodeId\n    }\n  }\n  contents {\n    toCollectExcess\n    excessValue\n    sumInsured\n    id\n  }\n}\n\nfragment JobInfoClaimDetailsRow5_claim on ClaimJob {\n  insurer {\n    policyTypeSuppliersView\n    policyCoverSuppliersView\n  }\n  policyType {\n    policyTypeId\n  }\n  policyCover {\n    policyCoverId\n  }\n  restoration {\n    toCollectExcess\n    excessValue\n    sumInsured\n    id\n  }\n}\n\nfragment JobInfoClaimDetailsRow6_claim on ClaimJob {\n  insurer {\n    enableMultipleRisks\n    additionalRefNo\n    useInternalAssessor\n    cm2nd\n  }\n  riskname\n  additionalRefNumber\n  homeAssessor {\n    assesorId\n    id\n  }\n  brc {\n    managerId\n    id\n  }\n}\n\nfragment JobInfoClaimDetails_claim on ClaimJob {\n  ...JobInfoClaimDetailsRow1_claim\n  ...JobInfoClaimDetailsRow2_claim\n  ...JobInfoClaimDetailsRow3_claim\n  ...JobInfoClaimDetailsRow4_claim\n  ...JobInfoClaimDetailsRow5_claim\n  ...JobInfoClaimDetailsRow6_claim\n}\n\nfragment JobInfoCustomerInfoRow1_claim on ClaimJob {\n  insured {\n    salutation\n    name\n    email\n  }\n}\n\nfragment JobInfoCustomerInfoRow2_claim on ClaimJob {\n  insurer {\n    setupcustomerlogin\n  }\n  incidentDetail {\n    riskAddress {\n      line1\n      line2\n    }\n  }\n  requireCustomLogin\n  customLoginEmail\n}\n\nfragment JobInfoCustomerInfoRow3_claim on ClaimJob {\n  incidentDetail {\n    riskAddress {\n      suburb\n      state\n      postcode\n    }\n    habitableProperty\n    category\n  }\n  insurer {\n    removeHabitableAsbestos\n    hideCategoryOfClaim\n  }\n}\n\nfragment JobInfoCustomerInfoRow4_claim on ClaimJob {\n  insured {\n    phone1\n    phone2\n  }\n  view {\n    actions {\n      cashSettle {\n        label\n        isDisplay\n        isDisabled\n        id\n      }\n      claimFinalise {\n        label\n        isDisplay\n        isDisabled\n        id\n      }\n    }\n  }\n  ...ClaimFinalise_claim\n  ...CashSettle_claim\n}\n\nfragment JobInfoCustomerInfoRow5_claim on ClaimJob {\n  insured {\n    phone3\n    fax\n  }\n}\n\nfragment JobInfoCustomerInfo_claim on ClaimJob {\n  ...JobInfoCustomerInfoRow1_claim\n  ...JobInfoCustomerInfoRow2_claim\n  ...JobInfoCustomerInfoRow3_claim\n  ...JobInfoCustomerInfoRow4_claim\n  ...JobInfoCustomerInfoRow5_claim\n}\n\nfragment JobInfoPostalAddress_claim on ClaimJob {\n  insured {\n    postalAddress {\n      line1\n      line2\n      suburb\n      state\n      postcode\n    }\n  }\n}\n\nfragment JobInfoTenantInfo_claim on ClaimJob {\n  tenantDetails {\n    name\n    phone1\n    phone2\n    phone3\n  }\n}\n\nfragment JobInfo_claim on ClaimJob {\n  insurer {\n    companyId\n  }\n  incidentDetail {\n    riskAddress {\n      postcode\n    }\n  }\n  building {\n    scopingSupplier {\n      companyId\n    }\n    id\n  }\n  restoration {\n    scopingSupplier {\n      companyId\n    }\n    id\n  }\n  view {\n    actions {\n      ...JobInfoActions_actions\n    }\n  }\n  ...JobInfoClaimDetails_claim\n  ...JobInfoCustomerInfo_claim\n  ...JobInfoPostalAddress_claim\n  ...JobInfoTenantInfo_claim\n  ...JobInfoClaimDescription_claim\n}\n"
  }
};
})();
(node as any).hash = 'c53127a002fbaa9f36c2b8a6de72f190';
export default node;
