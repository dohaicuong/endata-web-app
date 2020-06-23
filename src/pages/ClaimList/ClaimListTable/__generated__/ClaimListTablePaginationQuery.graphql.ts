/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type JobRecommendationStatus = "NotRecommended" | "Recommended" | "%future added value";
export type JobVariationStatus = "Approved" | "Pending" | "Rejected" | "Reset" | "%future added value";
export type PortfolioType = "Building" | "Contents" | "Restoration" | "%future added value";
export type QuoteRequestStatus = "AdditionalItems" | "AppointmentMade" | "AwaitingInfo" | "AwaitingInfoContents" | "ClaimFinalised" | "InitialCallMade" | "JobAuthorised" | "JobLost" | "NewClaims" | "OfferScopeAcc" | "QuoteSubmitted" | "WaitingQuotes" | "WaitingResult" | "WaitingScope" | "%future added value";
export type State = "ACT" | "NSW" | "NT" | "QLD" | "SA" | "TAS" | "VIC" | "WA" | "%future added value";
export type ClaimJobFilter = {
    id?: string | null;
    parentId?: string | null;
    subject?: string | null;
    createDateFrom?: string | null;
    createDateTo?: string | null;
    incidentDate?: unknown | null;
    incidentDateFrom?: unknown | null;
    incidentDateTo?: unknown | null;
    keyWords?: string | null;
    refNumber?: string | null;
    postcode?: string | null;
    managerTeams?: Array<string | null> | null;
    managers?: Array<string> | null;
    insurers?: Array<string> | null;
    adjusters?: Array<string> | null;
    catCodes?: Array<string> | null;
    eventTypes?: Array<string> | null;
    buildingSuppliers?: Array<string> | null;
    contentsSuppliers?: Array<string> | null;
    restorationSuppliers?: Array<string> | null;
    buildingStatus?: Array<string> | null;
    contentsStatus?: Array<string> | null;
    restorationStatus?: Array<string> | null;
    suppliers?: Array<string> | null;
    status?: Array<string> | null;
    internalAssessors?: Array<string> | null;
    jobStatuses?: Array<string> | null;
    claimStatusStageIds?: Array<string> | null;
    portfolios?: Array<PortfolioType | null> | null;
    states?: Array<State | null> | null;
    variationStatuses?: Array<JobVariationStatus | null> | null;
    requestStatuses?: Array<QuoteRequestStatus | null> | null;
    recommendationStatus?: Array<JobRecommendationStatus> | null;
    or?: ClaimJobFilter | null;
    and?: ClaimJobFilter | null;
    not?: ClaimJobFilter | null;
};
export type ClaimListTablePaginationQueryVariables = {
    count?: number | null;
    cursor?: string | null;
    where?: ClaimJobFilter | null;
};
export type ClaimListTablePaginationQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"ClaimListTable_data">;
};
export type ClaimListTablePaginationQuery = {
    readonly response: ClaimListTablePaginationQueryResponse;
    readonly variables: ClaimListTablePaginationQueryVariables;
};



/*
query ClaimListTablePaginationQuery(
  $count: Int = 30
  $cursor: String
  $where: ClaimJobFilter
) {
  ...ClaimListTable_data_mjR8k
}

fragment ClaimListTable_data_mjR8k on Query {
  currentUser {
    ...ClaimsTable_user
    id
  }
  claimConnection: claimJobs(first: $count, after: $cursor, where: $where) {
    ...ClaimsTable_claims
    edges {
      cursor
      node {
        __typename
        id
      }
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}

fragment ClaimsTable_claims on ClaimJobConnection {
  totalCount
  edges {
    node {
      id
      hasBuilding
      hasContents
      hasRestoration
      refNumber
      insurer {
        companyName
      }
      lodgeDate
      building {
        jobSuppliers {
          requestDate
          requestType
          id
          quote {
            total
            id
            quoteStatus {
              statusName
              id
            }
          }
        }
        id
        authorisedValue
        scopedValue
        claimStatus {
          statusName
          id
        }
        authorisedSupplier {
          companyName
        }
        scopingSupplier {
          companyName
        }
        daysAtStatus
      }
      contents {
        jobSuppliers {
          requestDate
          requestType
          id
          quote {
            total
            id
            quoteStatus {
              statusName
              id
            }
          }
        }
        id
        claimStatus {
          statusName
          id
        }
      }
      restoration {
        jobSuppliers {
          requestDate
          requestType
          id
          quote {
            total
            id
            quoteStatus {
              statusName
              id
            }
          }
        }
        id
        claimStatus {
          statusName
          id
        }
        authorisedSupplier {
          companyName
        }
        scopingSupplier {
          companyName
        }
      }
      insured {
        name
        phone1
        phone2
        phone3
        email
      }
      incidentDetail {
        riskAddress {
          suburb
          state
          line1
          postcode
        }
        incidentDate
      }
    }
  }
}

fragment ClaimsTable_user on AuthenticatedUser {
  userType
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": 30,
    "kind": "LocalArgument",
    "name": "count",
    "type": "Int"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "cursor",
    "type": "String"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "where",
    "type": "ClaimJobFilter"
  }
],
v1 = {
  "kind": "Variable",
  "name": "where",
  "variableName": "where"
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "cursor"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count"
  },
  (v1/*: any*/)
],
v4 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "companyName",
    "storageKey": null
  }
],
v5 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "statusName",
    "storageKey": null
  },
  (v2/*: any*/)
],
v6 = {
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
      "kind": "ScalarField",
      "name": "requestDate",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "requestType",
      "storageKey": null
    },
    (v2/*: any*/),
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
          "kind": "ScalarField",
          "name": "total",
          "storageKey": null
        },
        (v2/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "ClaimStatus",
          "kind": "LinkedField",
          "name": "quoteStatus",
          "plural": false,
          "selections": (v5/*: any*/),
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "concreteType": "ClaimStatus",
  "kind": "LinkedField",
  "name": "claimStatus",
  "plural": false,
  "selections": (v5/*: any*/),
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "concreteType": "Company",
  "kind": "LinkedField",
  "name": "authorisedSupplier",
  "plural": false,
  "selections": (v4/*: any*/),
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "concreteType": "Company",
  "kind": "LinkedField",
  "name": "scopingSupplier",
  "plural": false,
  "selections": (v4/*: any*/),
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ClaimListTablePaginationQuery",
    "selections": [
      {
        "args": [
          {
            "kind": "Variable",
            "name": "count",
            "variableName": "count"
          },
          {
            "kind": "Variable",
            "name": "cursor",
            "variableName": "cursor"
          },
          (v1/*: any*/)
        ],
        "kind": "FragmentSpread",
        "name": "ClaimListTable_data"
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ClaimListTablePaginationQuery",
    "selections": [
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
      },
      {
        "alias": "claimConnection",
        "args": (v3/*: any*/),
        "concreteType": "ClaimJobConnection",
        "kind": "LinkedField",
        "name": "claimJobs",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "totalCount",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "ClaimJobEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "ClaimJob",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
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
                    "name": "hasContents",
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
                    "kind": "ScalarField",
                    "name": "refNumber",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Company",
                    "kind": "LinkedField",
                    "name": "insurer",
                    "plural": false,
                    "selections": (v4/*: any*/),
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
                    "concreteType": "ClaimPortfolio",
                    "kind": "LinkedField",
                    "name": "building",
                    "plural": false,
                    "selections": [
                      (v6/*: any*/),
                      (v2/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "authorisedValue",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "scopedValue",
                        "storageKey": null
                      },
                      (v7/*: any*/),
                      (v8/*: any*/),
                      (v9/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "daysAtStatus",
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
                    "name": "contents",
                    "plural": false,
                    "selections": [
                      (v6/*: any*/),
                      (v2/*: any*/),
                      (v7/*: any*/)
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ClaimPortfolio",
                    "kind": "LinkedField",
                    "name": "restoration",
                    "plural": false,
                    "selections": [
                      (v6/*: any*/),
                      (v2/*: any*/),
                      (v7/*: any*/),
                      (v8/*: any*/),
                      (v9/*: any*/)
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
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "name",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "phone1",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "phone2",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "phone3",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "email",
                        "storageKey": null
                      }
                    ],
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
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "suburb",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "state",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "line1",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "postcode",
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
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "__typename",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "cursor",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "PageInfo",
            "kind": "LinkedField",
            "name": "pageInfo",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "endCursor",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasNextPage",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": "claimConnection",
        "args": (v3/*: any*/),
        "filters": [
          "where"
        ],
        "handle": "connection",
        "key": "ClaimListTable_data_claimConnection",
        "kind": "LinkedHandle",
        "name": "claimJobs"
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {
      "derivedFrom": "ClaimListTable_data",
      "isRefetchableQuery": true
    },
    "name": "ClaimListTablePaginationQuery",
    "operationKind": "query",
    "text": "query ClaimListTablePaginationQuery(\n  $count: Int = 30\n  $cursor: String\n  $where: ClaimJobFilter\n) {\n  ...ClaimListTable_data_mjR8k\n}\n\nfragment ClaimListTable_data_mjR8k on Query {\n  currentUser {\n    ...ClaimsTable_user\n    id\n  }\n  claimConnection: claimJobs(first: $count, after: $cursor, where: $where) {\n    ...ClaimsTable_claims\n    edges {\n      cursor\n      node {\n        __typename\n        id\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment ClaimsTable_claims on ClaimJobConnection {\n  totalCount\n  edges {\n    node {\n      id\n      hasBuilding\n      hasContents\n      hasRestoration\n      refNumber\n      insurer {\n        companyName\n      }\n      lodgeDate\n      building {\n        jobSuppliers {\n          requestDate\n          requestType\n          id\n          quote {\n            total\n            id\n            quoteStatus {\n              statusName\n              id\n            }\n          }\n        }\n        id\n        authorisedValue\n        scopedValue\n        claimStatus {\n          statusName\n          id\n        }\n        authorisedSupplier {\n          companyName\n        }\n        scopingSupplier {\n          companyName\n        }\n        daysAtStatus\n      }\n      contents {\n        jobSuppliers {\n          requestDate\n          requestType\n          id\n          quote {\n            total\n            id\n            quoteStatus {\n              statusName\n              id\n            }\n          }\n        }\n        id\n        claimStatus {\n          statusName\n          id\n        }\n      }\n      restoration {\n        jobSuppliers {\n          requestDate\n          requestType\n          id\n          quote {\n            total\n            id\n            quoteStatus {\n              statusName\n              id\n            }\n          }\n        }\n        id\n        claimStatus {\n          statusName\n          id\n        }\n        authorisedSupplier {\n          companyName\n        }\n        scopingSupplier {\n          companyName\n        }\n      }\n      insured {\n        name\n        phone1\n        phone2\n        phone3\n        email\n      }\n      incidentDetail {\n        riskAddress {\n          suburb\n          state\n          line1\n          postcode\n        }\n        incidentDate\n      }\n    }\n  }\n}\n\nfragment ClaimsTable_user on AuthenticatedUser {\n  userType\n}\n"
  }
};
})();
(node as any).hash = '03bd22e169da21b947c80f266fe35615';
export default node;
