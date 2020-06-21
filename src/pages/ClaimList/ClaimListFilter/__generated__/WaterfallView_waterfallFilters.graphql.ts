/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type WaterfallView_waterfallFilters = {
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
    readonly " $refType": "WaterfallView_waterfallFilters";
};
export type WaterfallView_waterfallFilters$data = WaterfallView_waterfallFilters;
export type WaterfallView_waterfallFilters$key = {
    readonly " $data"?: WaterfallView_waterfallFilters$data;
    readonly " $fragmentRefs": FragmentRefs<"WaterfallView_waterfallFilters">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "defaultValue": {
        "claimPortfolioType": "Building"
      },
      "kind": "LocalArgument",
      "name": "waterfallWhere",
      "type": "ClaimStatusVolumeWhere"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "refetch": {
      "connection": null,
      "fragmentPathInResult": [],
      "operation": require('./WaterfallFiltersRefetchQuery.graphql.ts')
    }
  },
  "name": "WaterfallView_waterfallFilters",
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
(node as any).hash = '1afbf52748172a3f80d67dc4d9d9b823';
export default node;
