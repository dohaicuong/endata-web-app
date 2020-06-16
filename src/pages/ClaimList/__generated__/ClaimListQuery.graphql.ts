/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ClaimListQueryVariables = {};
export type ClaimListQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"ClaimListTable_data">;
};
export type ClaimListQuery = {
    readonly response: ClaimListQueryResponse;
    readonly variables: ClaimListQueryVariables;
};



/*
query ClaimListQuery {
  ...ClaimListTable_data
}

fragment ClaimListTable_data on Query {
  currentUser {
    userType
    id
  }
  claimConnection: claimJobs(first: 30) {
    totalCount
    edges {
      node {
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
        }
        incidentDetail {
          riskAddress {
            suburb
            state
          }
        }
        id
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
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 30
  }
],
v2 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "companyName",
    "storageKey": null
  }
],
v3 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "statusName",
    "storageKey": null
  }
],
v4 = {
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
    (v0/*: any*/),
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
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "ClaimStatus",
          "kind": "LinkedField",
          "name": "quoteStatus",
          "plural": false,
          "selections": (v3/*: any*/),
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "concreteType": "ClaimStatus",
  "kind": "LinkedField",
  "name": "claimStatus",
  "plural": false,
  "selections": (v3/*: any*/),
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "concreteType": "Company",
  "kind": "LinkedField",
  "name": "authorisedSupplier",
  "plural": false,
  "selections": (v2/*: any*/),
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "concreteType": "Company",
  "kind": "LinkedField",
  "name": "scopingSupplier",
  "plural": false,
  "selections": (v2/*: any*/),
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
            "kind": "ScalarField",
            "name": "userType",
            "storageKey": null
          },
          (v0/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": "claimConnection",
        "args": (v1/*: any*/),
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
                    "selections": (v2/*: any*/),
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
                      (v4/*: any*/),
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
                      (v5/*: any*/),
                      (v6/*: any*/),
                      (v7/*: any*/),
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
                      (v4/*: any*/),
                      (v5/*: any*/)
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
                      (v4/*: any*/),
                      (v5/*: any*/),
                      (v6/*: any*/),
                      (v7/*: any*/)
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
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  (v0/*: any*/),
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
        "args": (v1/*: any*/),
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
    "text": "query ClaimListQuery {\n  ...ClaimListTable_data\n}\n\nfragment ClaimListTable_data on Query {\n  currentUser {\n    userType\n    id\n  }\n  claimConnection: claimJobs(first: 30) {\n    totalCount\n    edges {\n      node {\n        hasBuilding\n        hasContents\n        hasRestoration\n        refNumber\n        insurer {\n          companyName\n        }\n        lodgeDate\n        building {\n          jobSuppliers {\n            requestDate\n            requestType\n            id\n            quote {\n              total\n              id\n              quoteStatus {\n                statusName\n              }\n            }\n          }\n          authorisedValue\n          scopedValue\n          claimStatus {\n            statusName\n          }\n          authorisedSupplier {\n            companyName\n          }\n          scopingSupplier {\n            companyName\n          }\n          daysAtStatus\n        }\n        contents {\n          jobSuppliers {\n            requestDate\n            requestType\n            id\n            quote {\n              total\n              id\n              quoteStatus {\n                statusName\n              }\n            }\n          }\n          claimStatus {\n            statusName\n          }\n        }\n        restoration {\n          jobSuppliers {\n            requestDate\n            requestType\n            id\n            quote {\n              total\n              id\n              quoteStatus {\n                statusName\n              }\n            }\n          }\n          claimStatus {\n            statusName\n          }\n          authorisedSupplier {\n            companyName\n          }\n          scopingSupplier {\n            companyName\n          }\n        }\n        insured {\n          name\n        }\n        incidentDetail {\n          riskAddress {\n            suburb\n            state\n          }\n        }\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'af7111bb71bf59aeebe298c29ee8b868';
export default node;
