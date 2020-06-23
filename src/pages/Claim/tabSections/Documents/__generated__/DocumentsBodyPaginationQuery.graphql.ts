/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type PortfolioType = "Building" | "Contents" | "Restoration" | "%future added value";
export type DocumentsBodyPaginationQueryVariables = {
    count?: number | null;
    cursor?: string | null;
    claimId: string;
    portfolios?: Array<PortfolioType | null> | null;
};
export type DocumentsBodyPaginationQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"DocumentsBody_data">;
};
export type DocumentsBodyPaginationQuery = {
    readonly response: DocumentsBodyPaginationQueryResponse;
    readonly variables: DocumentsBodyPaginationQueryVariables;
};



/*
query DocumentsBodyPaginationQuery(
  $count: Int = 500
  $cursor: String
  $claimId: ID!
  $portfolios: [PortfolioType]
) {
  ...DocumentsBody_data_16lzxw
}

fragment DocumentView_claimDocumentsData on ClaimDocument {
  url
}

fragment DocumentsBody_data_16lzxw on Query {
  documentConnection: claimDocuments(first: $count, after: $cursor, where: {claimId: $claimId, portfolios: $portfolios}) {
    edges {
      node {
        portfolioType
        uploadDate
        company {
          companyName
        }
        private
        description
        amountInvoice
        ...DocumentView_claimDocumentsData
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
    "name": "DocumentsBodyPaginationQuery",
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
        "name": "DocumentsBody_data"
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DocumentsBodyPaginationQuery",
    "selections": [
      {
        "alias": "documentConnection",
        "args": (v3/*: any*/),
        "concreteType": "ClaimDocumentConnection",
        "kind": "LinkedField",
        "name": "claimDocuments",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ClaimDocumentEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "ClaimDocument",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
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
                    "name": "amountInvoice",
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
                    "name": "id",
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
        "alias": "documentConnection",
        "args": (v3/*: any*/),
        "filters": [
          "claimId",
          "portfolios"
        ],
        "handle": "connection",
        "key": "DocumentsBody_data_documentConnection",
        "kind": "LinkedHandle",
        "name": "claimDocuments"
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {
      "derivedFrom": "DocumentsBody_data",
      "isRefetchableQuery": true
    },
    "name": "DocumentsBodyPaginationQuery",
    "operationKind": "query",
    "text": "query DocumentsBodyPaginationQuery(\n  $count: Int = 500\n  $cursor: String\n  $claimId: ID!\n  $portfolios: [PortfolioType]\n) {\n  ...DocumentsBody_data_16lzxw\n}\n\nfragment DocumentView_claimDocumentsData on ClaimDocument {\n  url\n}\n\nfragment DocumentsBody_data_16lzxw on Query {\n  documentConnection: claimDocuments(first: $count, after: $cursor, where: {claimId: $claimId, portfolios: $portfolios}) {\n    edges {\n      node {\n        portfolioType\n        uploadDate\n        company {\n          companyName\n        }\n        private\n        description\n        amountInvoice\n        ...DocumentView_claimDocumentsData\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '1466d28b082b3be246a07277fe565bab';
export default node;
