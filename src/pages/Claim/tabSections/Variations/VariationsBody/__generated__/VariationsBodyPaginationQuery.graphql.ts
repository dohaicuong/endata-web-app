/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type PortfolioType = "Building" | "Contents" | "Restoration" | "%future added value";
export type VariationsBodyPaginationQueryVariables = {
    count?: number | null;
    cursor?: string | null;
    claimId: string;
    portfolios?: Array<PortfolioType | null> | null;
};
export type VariationsBodyPaginationQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"VariationsBody_data">;
};
export type VariationsBodyPaginationQuery = {
    readonly response: VariationsBodyPaginationQueryResponse;
    readonly variables: VariationsBodyPaginationQueryVariables;
};



/*
query VariationsBodyPaginationQuery(
  $count: Int = 15
  $cursor: String
  $claimId: ID!
  $portfolios: [PortfolioType]
) {
  ...VariationsBody_data_16lzxw
}

fragment VariationsBody_data_16lzxw on Query {
  VariationsConnection: jobVariations(first: $count, after: $cursor, where: {claimId: $claimId, portfolios: $portfolios}) {
    edges {
      node {
        variationId
        logdate
        variationTitle
        variationDescription
        variationReason {
          reasonDescription
        }
        total
        variationStatus
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
    "name": "VariationsBodyPaginationQuery",
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
        "name": "VariationsBody_data"
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "VariationsBodyPaginationQuery",
    "selections": [
      {
        "alias": "VariationsConnection",
        "args": (v3/*: any*/),
        "concreteType": "JobVariationConnection",
        "kind": "LinkedField",
        "name": "jobVariations",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "JobVariationEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "JobVariation",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "variationId",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "logdate",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "variationTitle",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "variationDescription",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "JobVariationReason",
                    "kind": "LinkedField",
                    "name": "variationReason",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "reasonDescription",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "total",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "variationStatus",
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
        "alias": "VariationsConnection",
        "args": (v3/*: any*/),
        "filters": [
          "claimId",
          "portfolios"
        ],
        "handle": "connection",
        "key": "VariationsBody_data_VariationsConnection",
        "kind": "LinkedHandle",
        "name": "jobVariations"
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {
      "derivedFrom": "VariationsBody_data",
      "isRefetchableQuery": true
    },
    "name": "VariationsBodyPaginationQuery",
    "operationKind": "query",
    "text": "query VariationsBodyPaginationQuery(\n  $count: Int = 15\n  $cursor: String\n  $claimId: ID!\n  $portfolios: [PortfolioType]\n) {\n  ...VariationsBody_data_16lzxw\n}\n\nfragment VariationsBody_data_16lzxw on Query {\n  VariationsConnection: jobVariations(first: $count, after: $cursor, where: {claimId: $claimId, portfolios: $portfolios}) {\n    edges {\n      node {\n        variationId\n        logdate\n        variationTitle\n        variationDescription\n        variationReason {\n          reasonDescription\n        }\n        total\n        variationStatus\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '49b2bb362c7ffd66bd126983e28a8065';
export default node;
