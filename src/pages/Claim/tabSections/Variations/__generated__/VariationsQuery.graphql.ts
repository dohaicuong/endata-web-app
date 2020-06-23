/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type VariationsQueryVariables = {
    claimId: string;
};
export type VariationsQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"VariationsBody_data">;
};
export type VariationsQuery = {
    readonly response: VariationsQueryResponse;
    readonly variables: VariationsQueryVariables;
};



/*
query VariationsQuery(
  $claimId: ID!
) {
  ...VariationsBody_data_15qNS2
}

fragment VariationsBody_data_15qNS2 on Query {
  VariationsConnection: jobVariations(first: 15, where: {claimId: $claimId}) {
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
    "value": 15
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
    "name": "VariationsQuery",
    "selections": [
      {
        "args": [
          (v1/*: any*/)
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
    "name": "VariationsQuery",
    "selections": [
      {
        "alias": "VariationsConnection",
        "args": (v2/*: any*/),
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
        "args": (v2/*: any*/),
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
    "metadata": {},
    "name": "VariationsQuery",
    "operationKind": "query",
    "text": "query VariationsQuery(\n  $claimId: ID!\n) {\n  ...VariationsBody_data_15qNS2\n}\n\nfragment VariationsBody_data_15qNS2 on Query {\n  VariationsConnection: jobVariations(first: 15, where: {claimId: $claimId}) {\n    edges {\n      node {\n        variationId\n        logdate\n        variationTitle\n        variationDescription\n        variationReason {\n          reasonDescription\n        }\n        total\n        variationStatus\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '6ae3988999cbbe628b9c9aca3e858959';
export default node;
