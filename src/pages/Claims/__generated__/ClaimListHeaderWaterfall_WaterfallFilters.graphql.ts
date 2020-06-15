/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ClaimListHeaderWaterfall_WaterfallFilters = {
    readonly currentUser: {
        readonly waterfallFilters: ReadonlyArray<{
            readonly id: string;
            readonly items: ReadonlyArray<{
                readonly value: string;
                readonly label: string;
                readonly claimCount: number;
                readonly color: string;
            }>;
        }> | null;
    } | null;
    readonly " $refType": "ClaimListHeaderWaterfall_WaterfallFilters";
};
export type ClaimListHeaderWaterfall_WaterfallFilters$data = ClaimListHeaderWaterfall_WaterfallFilters;
export type ClaimListHeaderWaterfall_WaterfallFilters$key = {
    readonly " $data"?: ClaimListHeaderWaterfall_WaterfallFilters$data;
    readonly " $fragmentRefs": FragmentRefs<"ClaimListHeaderWaterfall_WaterfallFilters">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "waterfallWhere",
      "type": "ClaimStatusVolumeWhere!"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "refetch": {
      "connection": null,
      "fragmentPathInResult": [],
      "operation": require('./ClaimListHeaderWaterfallRefetchQuery.graphql.ts')
    }
  },
  "name": "ClaimListHeaderWaterfall_WaterfallFilters",
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
          "args": [
            {
              "kind": "Variable",
              "name": "where",
              "variableName": "waterfallWhere"
            }
          ],
          "concreteType": "ClaimStatusVolumeGroup",
          "kind": "LinkedField",
          "name": "waterfallFilters",
          "plural": true,
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
              "concreteType": "ClaimStatusVolume",
              "kind": "LinkedField",
              "name": "items",
              "plural": true,
              "selections": [
                {
                  "alias": "value",
                  "args": null,
                  "kind": "ScalarField",
                  "name": "id",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "label",
                  "storageKey": null
                },
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
                }
              ],
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
(node as any).hash = '9646500336aa2276f8b95f7504dff66d';
export default node;
