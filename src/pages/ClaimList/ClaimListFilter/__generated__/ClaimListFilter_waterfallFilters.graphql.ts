/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ClaimListFilter_waterfallFilters = {
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
    readonly " $refType": "ClaimListFilter_waterfallFilters";
};
export type ClaimListFilter_waterfallFilters$data = ClaimListFilter_waterfallFilters;
export type ClaimListFilter_waterfallFilters$key = {
    readonly " $data"?: ClaimListFilter_waterfallFilters$data;
    readonly " $fragmentRefs": FragmentRefs<"ClaimListFilter_waterfallFilters">;
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
      "operation": require('./ClaimListFilter_waterfallFiltersRefetchQuery.graphql.ts')
    }
  },
  "name": "ClaimListFilter_waterfallFilters",
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
(node as any).hash = '9501fd2df540197d6671bd49b0c7c3bd';
export default node;
