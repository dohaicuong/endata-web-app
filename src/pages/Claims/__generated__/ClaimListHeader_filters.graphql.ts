/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type FilterType = "ComboBox" | "ComboBox_multiple" | "Date" | "DateTime" | "Search" | "Select" | "Select_multiple" | "Text" | "Time" | "%future added value";
export type ClaimListHeader_filters = {
    readonly currentUser: {
        readonly claimFilters: ReadonlyArray<{
            readonly id: string;
            readonly type: FilterType;
            readonly label: string | null;
            readonly name: string;
            readonly options: ReadonlyArray<{
                readonly group: string | null;
                readonly label: string;
                readonly value: string | null;
            } | null> | null;
        } | null> | null;
    } | null;
    readonly " $refType": "ClaimListHeader_filters";
};
export type ClaimListHeader_filters$data = ClaimListHeader_filters;
export type ClaimListHeader_filters$key = {
    readonly " $data"?: ClaimListHeader_filters$data;
    readonly " $fragmentRefs": FragmentRefs<"ClaimListHeader_filters">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "label",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ClaimListHeader_filters",
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
              "name": "type",
              "storageKey": null
            },
            (v0/*: any*/),
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "name",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "FilterInputOption",
              "kind": "LinkedField",
              "name": "options",
              "plural": true,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "group",
                  "storageKey": null
                },
                (v0/*: any*/),
                {
                  "alias": "value",
                  "args": null,
                  "kind": "ScalarField",
                  "name": "id",
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
})();
(node as any).hash = '9d36cb9c6d3932e853bead5fd62f685b';
export default node;