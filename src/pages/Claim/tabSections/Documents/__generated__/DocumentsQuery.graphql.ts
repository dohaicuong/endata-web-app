/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type DocumentsQueryVariables = {
    claimId: string;
};
export type DocumentsQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"DocumentsBody_data" | "DocumentsAction_data">;
};
export type DocumentsQuery = {
    readonly response: DocumentsQueryResponse;
    readonly variables: DocumentsQueryVariables;
};



/*
query DocumentsQuery(
  $claimId: ID!
) {
  ...DocumentsBody_data_15qNS2
}

fragment DocumentView_data on ClaimDocument {
  url
}

fragment DocumentsBody_data_15qNS2 on Query {
  documentConnection: claimDocuments(first: 500, where: {claimId: $claimId}) {
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
        ...DocumentView_data
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
    "name": "DocumentsQuery",
    "selections": [
      {
        "args": [
          (v1/*: any*/)
        ],
        "kind": "FragmentSpread",
        "name": "DocumentsBody_data"
      },
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "DocumentsAction_data"
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DocumentsQuery",
    "selections": [
      {
        "alias": "documentConnection",
        "args": (v2/*: any*/),
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
        "args": (v2/*: any*/),
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
    "metadata": {},
    "name": "DocumentsQuery",
    "operationKind": "query",
    "text": "query DocumentsQuery(\n  $claimId: ID!\n) {\n  ...DocumentsBody_data_15qNS2\n}\n\nfragment DocumentView_data on ClaimDocument {\n  url\n}\n\nfragment DocumentsBody_data_15qNS2 on Query {\n  documentConnection: claimDocuments(first: 500, where: {claimId: $claimId}) {\n    edges {\n      node {\n        portfolioType\n        uploadDate\n        company {\n          companyName\n        }\n        private\n        description\n        amountInvoice\n        ...DocumentView_data\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '07b651ad059fd3d212187dd48ee736ed';
export default node;
