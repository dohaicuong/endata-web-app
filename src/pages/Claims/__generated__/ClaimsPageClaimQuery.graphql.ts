/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type JobRecommendationStatus = "NotRecommended" | "Recommended" | "%future added value";
export type JobVariationStatus = "Approved" | "Pending" | "Rejected" | "Reset" | "%future added value";
export type PortfolioType = "Building" | "Contents" | "Restoration" | "%future added value";
export type QuoteRequestStatus = "AdditionalItems" | "AppointmentMade" | "AwaitingInfo" | "AwaitingInfoContents" | "ClaimFinalised" | "InitialCallMade" | "JobAuthorised" | "JobLost" | "NewClaims" | "OfferScopeAcc" | "QuoteSubmitted" | "WaitingQuotes" | "WaitingResult" | "WaitingScope" | "%future added value";
export type State = "ACT" | "NSW" | "NT" | "QLD" | "SA" | "TAS" | "VIC" | "WA" | "%future added value";
export type UserType = "Administrator" | "Builder" | "ContentSupplier" | "Restorer" | "%future added value";
export type ClaimJobFilter = {
    id?: string | null;
    parentId?: string | null;
    subject?: string | null;
    createDateFrom?: unknown | null;
    createDateTo?: unknown | null;
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
export type ClaimStatusVolumeWhere = {
    createDateFrom?: unknown | null;
    createDateTo?: unknown | null;
    incidentDate?: unknown | null;
    incidentDateFrom?: unknown | null;
    incidentDateTo?: unknown | null;
    keyWords?: string | null;
    managerTeams?: Array<string | null> | null;
    insurers?: Array<string> | null;
    managers?: Array<string> | null;
    adjusters?: Array<string> | null;
    catCodes?: Array<string> | null;
    eventTypes?: Array<string> | null;
    buildingSuppliers?: Array<string> | null;
    contentsSuppliers?: Array<string> | null;
    restorationSuppliers?: Array<string> | null;
    internalAssessors?: Array<string> | null;
    states?: Array<State | null> | null;
    claimPortfolioType: PortfolioType;
};
export type ClaimsPageClaimQueryVariables = {
    where?: ClaimJobFilter | null;
    count: number;
    cursor: string;
    waterfallWhere: ClaimStatusVolumeWhere;
};
export type ClaimsPageClaimQueryResponse = {
    readonly currentUser: {
        readonly userType: UserType;
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"ClaimListBody_claims" | "ClaimListHeader_filters" | "ClaimListHeaderWaterfall_WaterfallFilters">;
};
export type ClaimsPageClaimQuery = {
    readonly response: ClaimsPageClaimQueryResponse;
    readonly variables: ClaimsPageClaimQueryVariables;
};



/*
query ClaimsPageClaimQuery(
  $where: ClaimJobFilter
  $count: Int!
  $cursor: String!
  $waterfallWhere: ClaimStatusVolumeWhere!
) {
  ...ClaimListBody_claims
  ...ClaimListHeader_filters
  ...ClaimListHeaderWaterfall_WaterfallFilters
  currentUser {
    userType
    id
  }
}

fragment ClaimListBody_claims on Query {
  claimJobs(first: $count, after: $cursor, where: $where) {
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
              }
            }
          }
          authorisedValue
          scopedValue
          claimStatus {
            statusName
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
              }
            }
          }
          claimStatus {
            statusName
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
              }
            }
          }
          claimStatus {
            statusName
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
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}

fragment ClaimListHeaderWaterfall_WaterfallFilters on Query {
  currentUser {
    waterfallFilters(where: $waterfallWhere) {
      id
      items {
        value: id
        label
        claimCount
        color
        id
      }
    }
    id
  }
}

fragment ClaimListHeader_filters on Query {
  currentUser {
    claimFilters {
      id
      type
      label
      name
      options {
        group
        label
        value: id
        id
      }
    }
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "where",
    "type": "ClaimJobFilter"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "count",
    "type": "Int!"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "cursor",
    "type": "String!"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "waterfallWhere",
    "type": "ClaimStatusVolumeWhere!"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "userType",
  "storageKey": null
},
v2 = [
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
  {
    "kind": "Variable",
    "name": "where",
    "variableName": "where"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
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
  }
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
    (v3/*: any*/),
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
        (v3/*: any*/),
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
  "name": "label",
  "storageKey": null
},
v12 = {
  "alias": "value",
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ClaimsPageClaimQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "AuthenticatedUser",
        "kind": "LinkedField",
        "name": "currentUser",
        "plural": false,
        "selections": [
          (v1/*: any*/)
        ],
        "storageKey": null
      },
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "ClaimListBody_claims"
      },
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "ClaimListHeader_filters"
      },
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "ClaimListHeaderWaterfall_WaterfallFilters"
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ClaimsPageClaimQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
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
                  (v3/*: any*/),
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
                      (v10/*: any*/),
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
        "alias": null,
        "args": (v2/*: any*/),
        "filters": [
          "where"
        ],
        "handle": "connection",
        "key": "ClaimListBody_query_claimJobs",
        "kind": "LinkedHandle",
        "name": "claimJobs"
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
            "concreteType": "FilterInput",
            "kind": "LinkedField",
            "name": "claimFilters",
            "plural": true,
            "selections": [
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "type",
                "storageKey": null
              },
              (v11/*: any*/),
              (v10/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "FilterInputOption",
                "kind": "LinkedField",
                "name": "options",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "group",
                    "storageKey": null
                  },
                  (v11/*: any*/),
                  (v12/*: any*/),
                  (v3/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v3/*: any*/),
          {
            "alias": null,
            "args": [
              {
                "kind": "Variable",
                "name": "where",
                "variableName": "waterfallWhere"
              }
            ],
            "concreteType": "ClaimStatusVolumeGroup",
            "kind": "LinkedField",
            "name": "waterfallFilters",
            "plural": true,
            "selections": [
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "ClaimStatusVolume",
                "kind": "LinkedField",
                "name": "items",
                "plural": true,
                "selections": [
                  (v12/*: any*/),
                  (v11/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "claimCount",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "color",
                    "storageKey": null
                  },
                  (v3/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v1/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "ClaimsPageClaimQuery",
    "operationKind": "query",
    "text": "query ClaimsPageClaimQuery(\n  $where: ClaimJobFilter\n  $count: Int!\n  $cursor: String!\n  $waterfallWhere: ClaimStatusVolumeWhere!\n) {\n  ...ClaimListBody_claims\n  ...ClaimListHeader_filters\n  ...ClaimListHeaderWaterfall_WaterfallFilters\n  currentUser {\n    userType\n    id\n  }\n}\n\nfragment ClaimListBody_claims on Query {\n  claimJobs(first: $count, after: $cursor, where: $where) {\n    totalCount\n    edges {\n      node {\n        id\n        hasBuilding\n        hasContents\n        hasRestoration\n        refNumber\n        insurer {\n          companyName\n        }\n        lodgeDate\n        building {\n          jobSuppliers {\n            requestDate\n            requestType\n            id\n            quote {\n              total\n              id\n              quoteStatus {\n                statusName\n              }\n            }\n          }\n          authorisedValue\n          scopedValue\n          claimStatus {\n            statusName\n          }\n          authorisedSupplier {\n            companyName\n          }\n          scopingSupplier {\n            companyName\n          }\n          daysAtStatus\n        }\n        contents {\n          jobSuppliers {\n            requestDate\n            requestType\n            id\n            quote {\n              total\n              id\n              quoteStatus {\n                statusName\n              }\n            }\n          }\n          claimStatus {\n            statusName\n          }\n        }\n        restoration {\n          jobSuppliers {\n            requestDate\n            requestType\n            id\n            quote {\n              total\n              id\n              quoteStatus {\n                statusName\n              }\n            }\n          }\n          claimStatus {\n            statusName\n          }\n          authorisedSupplier {\n            companyName\n          }\n          scopingSupplier {\n            companyName\n          }\n        }\n        insured {\n          name\n          phone1\n          phone2\n          phone3\n          email\n        }\n        incidentDetail {\n          riskAddress {\n            suburb\n            state\n            line1\n            postcode\n          }\n          incidentDate\n        }\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment ClaimListHeaderWaterfall_WaterfallFilters on Query {\n  currentUser {\n    waterfallFilters(where: $waterfallWhere) {\n      id\n      items {\n        value: id\n        label\n        claimCount\n        color\n        id\n      }\n    }\n    id\n  }\n}\n\nfragment ClaimListHeader_filters on Query {\n  currentUser {\n    claimFilters {\n      id\n      type\n      label\n      name\n      options {\n        group\n        label\n        value: id\n        id\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = 'd94075b55cb59806b1497160f37c2428';
export default node;
