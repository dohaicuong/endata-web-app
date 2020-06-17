/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type JobNotesQueryVariables = {
    claimId: string;
};
export type JobNotesQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"JobNotesBody_data">;
};
export type JobNotesQuery = {
    readonly response: JobNotesQueryResponse;
    readonly variables: JobNotesQueryVariables;
};



/*
query JobNotesQuery(
  $claimId: ID!
) {
  ...JobNotesBody_data_15qNS2
}

fragment JobNotesBody_data_15qNS2 on Query {
  jobNoteConnection: claimNotes(first: 500, where: {claimId: $claimId}) {
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
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "claimId",
    "type": "ID!"
  }
],
v1 = {
  "kind": "Variable",
  "name": "claimId",
  "variableName": "claimId"
},
v2 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 500
  },
  {
    "fields": [
      (v1/*: any*/),
      {
        "kind": "Literal",
        "name": "portfolios",
        "value": null
      }
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
    "name": "JobNotesQuery",
    "selections": [
      {
        "args": [
          (v1/*: any*/)
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
    "name": "JobNotesQuery",
    "selections": [
      {
        "alias": "jobNoteConnection",
        "args": (v2/*: any*/),
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
        "args": (v2/*: any*/),
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
    "metadata": {},
    "name": "JobNotesQuery",
    "operationKind": "query",
    "text": "query JobNotesQuery(\n  $claimId: ID!\n) {\n  ...JobNotesBody_data_15qNS2\n}\n\nfragment JobNotesBody_data_15qNS2 on Query {\n  jobNoteConnection: claimNotes(first: 500, where: {claimId: $claimId}) {\n    edges {\n      node {\n        id\n        portfolioType\n        logDate\n        user {\n          company {\n            companyName\n          }\n          userName\n        }\n        private\n        message\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '124279b1b9cede21507b8bd4b10553ed';
export default node;
