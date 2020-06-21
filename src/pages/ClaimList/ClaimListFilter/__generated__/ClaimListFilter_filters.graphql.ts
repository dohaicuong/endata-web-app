/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ClaimListFilter_filters = {
    readonly currentUser: {
        readonly claimFilters: ReadonlyArray<{
            readonly " $fragmentRefs": FragmentRefs<"FilterInput_data">;
        } | null> | null;
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"WaterfallView_waterfallFilters">;
    readonly " $refType": "ClaimListFilter_filters";
};
export type ClaimListFilter_filters$data = ClaimListFilter_filters;
export type ClaimListFilter_filters$key = {
    readonly " $data"?: ClaimListFilter_filters$data;
    readonly " $fragmentRefs": FragmentRefs<"ClaimListFilter_filters">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ClaimListFilter_filters",
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
          "args": null,
          "concreteType": "FilterInput",
          "kind": "LinkedField",
          "name": "claimFilters",
          "plural": true,
          "selections": [
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "FilterInput_data"
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "WaterfallView_waterfallFilters"
    }
  ],
  "type": "Query"
};
(node as any).hash = '645acef5fab51c9d70c2a589d90a9b72';
export default node;
