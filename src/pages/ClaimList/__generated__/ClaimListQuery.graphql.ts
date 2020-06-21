/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ClaimListQueryVariables = {};
export type ClaimListQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"ClaimListFilter_filters" | "ClaimListTable_data">;
};
export type ClaimListQuery = {
    readonly response: ClaimListQueryResponse;
    readonly variables: ClaimListQueryVariables;
};



/*
query ClaimListQuery {
  ...ClaimListFilter_filters
  ...ClaimListTable_data
}

fragment ClaimListFilter_filters on Query {
  currentUser {
    claimFilters {
      ...FilterInput_data
      id
    }
    id
  }
  ...WaterfallView_waterfallFilters
}

fragment ClaimListTable_data on Query {
  currentUser {
    ...ClaimsTable_user
    id
  }
  claimConnection: claimJobs(first: 30) {
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
    }
  }
}

fragment ClaimsTable_user on AuthenticatedUser {
  userType
}

fragment FilterInput_data on FilterInput {
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

fragment WaterfallView_waterfallFilters on Query {
  currentUser {
    waterfallFilters(where: {claimPortfolioType: Building}) {
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
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "label",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v2 = {
  "alias": "value",
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 30
  }
],
v5 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "companyName",
    "storageKey": null
  }
],
v6 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "statusName",
    "storageKey": null
  }
],
v7 = {
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
          "selections": (v6/*: any*/),
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "concreteType": "ClaimStatus",
  "kind": "LinkedField",
  "name": "claimStatus",
  "plural": false,
  "selections": (v6/*: any*/),
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "concreteType": "Company",
  "kind": "LinkedField",
  "name": "authorisedSupplier",
  "plural": false,
  "selections": (v5/*: any*/),
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "concreteType": "Company",
  "kind": "LinkedField",
  "name": "scopingSupplier",
  "plural": false,
  "selections": (v5/*: any*/),
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ClaimListQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "ClaimListFilter_filters"
      },
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "ClaimListTable_data"
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ClaimListQuery",
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
            "concreteType": "FilterInput",
            "kind": "LinkedField",
            "name": "claimFilters",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "type",
                "storageKey": null
              },
              (v0/*: any*/),
              (v1/*: any*/),
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
                  (v0/*: any*/),
                  (v2/*: any*/),
                  (v3/*: any*/)
                ],
                "storageKey": null
              },
              (v3/*: any*/)
            ],
            "storageKey": null
          },
          (v3/*: any*/),
          {
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "where",
                "value": {
                  "claimPortfolioType": "Building"
                }
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
                  (v2/*: any*/),
                  (v0/*: any*/),
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
            "storageKey": "waterfallFilters(where:{\"claimPortfolioType\":\"Building\"})"
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "userType",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": "claimConnection",
        "args": (v4/*: any*/),
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
                    "selections": (v5/*: any*/),
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
                      (v7/*: any*/),
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
                      (v8/*: any*/),
                      (v9/*: any*/),
                      (v10/*: any*/),
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
                      (v7/*: any*/),
                      (v8/*: any*/)
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
                      (v7/*: any*/),
                      (v8/*: any*/),
                      (v9/*: any*/),
                      (v10/*: any*/)
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
                      (v1/*: any*/),
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
        "storageKey": "claimJobs(first:30)"
      },
      {
        "alias": "claimConnection",
        "args": (v4/*: any*/),
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
    "metadata": {},
    "name": "ClaimListQuery",
    "operationKind": "query",
    "text": "query ClaimListQuery {\n  ...ClaimListFilter_filters\n  ...ClaimListTable_data\n}\n\nfragment ClaimListFilter_filters on Query {\n  currentUser {\n    claimFilters {\n      ...FilterInput_data\n      id\n    }\n    id\n  }\n  ...WaterfallView_waterfallFilters\n}\n\nfragment ClaimListTable_data on Query {\n  currentUser {\n    ...ClaimsTable_user\n    id\n  }\n  claimConnection: claimJobs(first: 30) {\n    ...ClaimsTable_claims\n    edges {\n      cursor\n      node {\n        __typename\n        id\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment ClaimsTable_claims on ClaimJobConnection {\n  totalCount\n  edges {\n    node {\n      id\n      hasBuilding\n      hasContents\n      hasRestoration\n      refNumber\n      insurer {\n        companyName\n      }\n      lodgeDate\n      building {\n        jobSuppliers {\n          requestDate\n          requestType\n          id\n          quote {\n            total\n            id\n            quoteStatus {\n              statusName\n            }\n          }\n        }\n        authorisedValue\n        scopedValue\n        claimStatus {\n          statusName\n        }\n        authorisedSupplier {\n          companyName\n        }\n        scopingSupplier {\n          companyName\n        }\n        daysAtStatus\n      }\n      contents {\n        jobSuppliers {\n          requestDate\n          requestType\n          id\n          quote {\n            total\n            id\n            quoteStatus {\n              statusName\n            }\n          }\n        }\n        claimStatus {\n          statusName\n        }\n      }\n      restoration {\n        jobSuppliers {\n          requestDate\n          requestType\n          id\n          quote {\n            total\n            id\n            quoteStatus {\n              statusName\n            }\n          }\n        }\n        claimStatus {\n          statusName\n        }\n        authorisedSupplier {\n          companyName\n        }\n        scopingSupplier {\n          companyName\n        }\n      }\n      insured {\n        name\n        phone1\n        phone2\n        phone3\n        email\n      }\n      incidentDetail {\n        riskAddress {\n          suburb\n          state\n          line1\n          postcode\n        }\n        incidentDate\n      }\n    }\n  }\n}\n\nfragment ClaimsTable_user on AuthenticatedUser {\n  userType\n}\n\nfragment FilterInput_data on FilterInput {\n  type\n  label\n  name\n  options {\n    group\n    label\n    value: id\n    id\n  }\n}\n\nfragment WaterfallView_waterfallFilters on Query {\n  currentUser {\n    waterfallFilters(where: {claimPortfolioType: Building}) {\n      id\n      items {\n        value: id\n        label\n        claimCount\n        color\n        id\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = 'c863033e20b96b70715162e1a55b291e';
export default node;
