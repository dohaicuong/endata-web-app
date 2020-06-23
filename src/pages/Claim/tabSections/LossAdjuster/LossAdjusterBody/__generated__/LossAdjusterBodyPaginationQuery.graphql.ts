/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type LossAdjusterBodyPaginationQueryVariables = {
    count?: number | null;
    cursor?: string | null;
    claimId: string;
};
export type LossAdjusterBodyPaginationQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"LossAdjusterBody_data">;
};
export type LossAdjusterBodyPaginationQuery = {
    readonly response: LossAdjusterBodyPaginationQueryResponse;
    readonly variables: LossAdjusterBodyPaginationQueryVariables;
};



/*
query LossAdjusterBodyPaginationQuery(
  $count: Int = 15
  $cursor: String
  $claimId: ID!
) {
  ...LossAdjusterBody_data_3FCKZj
}

fragment DocumentView_LossAdjusterData on ClaimLossAdjusterDocument {
  url
}

fragment LossAdjusterBody_data_3FCKZj on Query {
  LossAdjusterConnection: claimLossAdjusterDocuments(first: $count, after: $cursor, where: {claimId: $claimId}) {
    edges {
      node {
        id
        uploadDate
        company {
          companyName
        }
        reportType {
          reportTypeName
        }
        private
        description
        ...DocumentView_LossAdjusterData
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
    "defaultValue": 15,
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
  }
],
v1 = {
  "kind": "Variable",
  "name": "claimId",
  "variableName": "claimId"
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
    "fields": [
      (v1/*: any*/)
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
    "name": "LossAdjusterBodyPaginationQuery",
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
          }
        ],
        "kind": "FragmentSpread",
        "name": "LossAdjusterBody_data"
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "LossAdjusterBodyPaginationQuery",
    "selections": [
      {
        "alias": "LossAdjusterConnection",
        "args": (v2/*: any*/),
        "concreteType": "ClaimLossAdjusterDocumentConnection",
        "kind": "LinkedField",
        "name": "claimLossAdjusterDocuments",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ClaimLossAdjusterDocumentEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "ClaimLossAdjusterDocument",
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
                    "name": "uploadDate",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Company",
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
                    "concreteType": "LossAdjusterReportType",
                    "kind": "LinkedField",
                    "name": "reportType",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "reportTypeName",
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
                    "name": "description",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "url",
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
        "alias": "LossAdjusterConnection",
        "args": (v2/*: any*/),
        "filters": [
          "claimId"
        ],
        "handle": "connection",
        "key": "LossAdjusterBody_data_LossAdjusterConnection",
        "kind": "LinkedHandle",
        "name": "claimLossAdjusterDocuments"
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {
      "derivedFrom": "LossAdjusterBody_data",
      "isRefetchableQuery": true
    },
    "name": "LossAdjusterBodyPaginationQuery",
    "operationKind": "query",
    "text": "query LossAdjusterBodyPaginationQuery(\n  $count: Int = 15\n  $cursor: String\n  $claimId: ID!\n) {\n  ...LossAdjusterBody_data_3FCKZj\n}\n\nfragment DocumentView_LossAdjusterData on ClaimLossAdjusterDocument {\n  url\n}\n\nfragment LossAdjusterBody_data_3FCKZj on Query {\n  LossAdjusterConnection: claimLossAdjusterDocuments(first: $count, after: $cursor, where: {claimId: $claimId}) {\n    edges {\n      node {\n        id\n        uploadDate\n        company {\n          companyName\n        }\n        reportType {\n          reportTypeName\n        }\n        private\n        description\n        ...DocumentView_LossAdjusterData\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'f5b94ba094429a6399656264fd45e413';
export default node;
