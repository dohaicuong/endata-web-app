/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type VariationsBody_data = {
    readonly VariationsConnection: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly variationId: number;
                readonly logdate: unknown;
                readonly variationTitle: string;
                readonly variationDescription: string;
                readonly variationReason: {
                    readonly reasonDescription: string;
                } | null;
                readonly total: unknown | null;
                readonly variationStatus: string | null;
            } | null;
        } | null> | null;
    } | null;
    readonly " $refType": "VariationsBody_data";
};
export type VariationsBody_data$data = VariationsBody_data;
export type VariationsBody_data$key = {
    readonly " $data"?: VariationsBody_data$data;
    readonly " $fragmentRefs": FragmentRefs<"VariationsBody_data">;
};



const node: ReaderFragment = (function(){
var v0 = [
  "VariationsConnection"
];
return {
  "argumentDefinitions": [
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
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "cursor",
        "direction": "forward",
        "path": (v0/*: any*/)
      }
    ],
    "refetch": {
      "connection": {
        "forward": {
          "count": "count",
          "cursor": "cursor"
        },
        "backward": null,
        "path": (v0/*: any*/)
      },
      "fragmentPathInResult": [],
      "operation": require('./VariationsBodyPaginationQuery.graphql.ts')
    }
  },
  "name": "VariationsBody_data",
  "selections": [
    {
      "alias": "VariationsConnection",
      "args": null,
      "concreteType": "JobVariationConnection",
      "kind": "LinkedField",
      "name": "__VariationsBody_data_VariationsConnection_connection",
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
    }
  ],
  "type": "Query"
};
})();
(node as any).hash = '49b2bb362c7ffd66bd126983e28a8065';
export default node;
