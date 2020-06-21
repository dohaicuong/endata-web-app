/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type PortfolioType = "Building" | "Contents" | "Restoration" | "%future added value";
export type JobNotesBodyPaginationQueryVariables = {
    count?: number | null;
    cursor?: string | null;
    claimId: string;
    portfolios?: Array<PortfolioType | null> | null;
};
export type JobNotesBodyPaginationQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"JobNotesBody_data">;
};
export type JobNotesBodyPaginationQuery = {
    readonly response: JobNotesBodyPaginationQueryResponse;
    readonly variables: JobNotesBodyPaginationQueryVariables;
};



/*
query JobNotesBodyPaginationQuery(
  $count: Int = 500
  $cursor: String
  $claimId: ID!
  $portfolios: [PortfolioType]
) {
  ...JobNotesBody_data_16lzxw
}

fragment JobNotesBody_data_16lzxw on Query {
  jobNoteConnection: claimNotes(first: $count, after: $cursor, where: {claimId: $claimId, portfolios: $portfolios}) {
    edges {
      node {
        id
        portfolioType
        logDate
        user {
          company {
            companyName
          }
          userName
        }
        private
        message
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
var v0 = [
  {
    "defaultValue": 500,
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
    "name": "claimId",
    "type": "ID!"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "portfolios",
    "type": "[PortfolioType]"
  }
],
v1 = {
  "kind": "Variable",
  "name": "claimId",
  "variableName": "claimId"
},
v2 = {
  "kind": "Variable",
  "name": "portfolios",
  "variableName": "portfolios"
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
  {
    "fields": [
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "ObjectValue",
    "name": "where"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "JobNotesBodyPaginationQuery",
    "selections": [
      {
        "args": [
          (v1/*: any*/),
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
          (v2/*: any*/)
        ],
        "kind": "FragmentSpread",
        "name": "JobNotesBody_data"
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "JobNotesBodyPaginationQuery",
    "selections": [
      {
        "alias": "jobNoteConnection",
        "args": (v3/*: any*/),
        "concreteType": "ClaimNoteConnection",
        "kind": "LinkedField",
        "name": "claimNotes",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ClaimNoteEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "ClaimNote",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "id",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "portfolioType",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "logDate",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "User",
                    "kind": "LinkedField",
                    "name": "user",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "CompanyProfile",
                        "kind": "LinkedField",
                        "name": "company",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "companyName",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "userName",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "private",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "message",
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
        "alias": "jobNoteConnection",
        "args": (v3/*: any*/),
        "filters": [
          "claimId",
          "portfolios"
        ],
        "handle": "connection",
        "key": "JobNotesBody_data_jobNoteConnection",
        "kind": "LinkedHandle",
        "name": "claimNotes"
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {
      "derivedFrom": "JobNotesBody_data",
      "isRefetchableQuery": true
    },
    "name": "JobNotesBodyPaginationQuery",
    "operationKind": "query",
    "text": "query JobNotesBodyPaginationQuery(\n  $count: Int = 500\n  $cursor: String\n  $claimId: ID!\n  $portfolios: [PortfolioType]\n) {\n  ...JobNotesBody_data_16lzxw\n}\n\nfragment JobNotesBody_data_16lzxw on Query {\n  jobNoteConnection: claimNotes(first: $count, after: $cursor, where: {claimId: $claimId, portfolios: $portfolios}) {\n    edges {\n      node {\n        id\n        portfolioType\n        logDate\n        user {\n          company {\n            companyName\n          }\n          userName\n        }\n        private\n        message\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '446c584cb4737f34bd38dfd277accbf1';
export default node;
