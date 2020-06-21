/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type FilterType = "ComboBox" | "ComboBox_multiple" | "Date" | "DateTime" | "Search" | "Select" | "Select_multiple" | "Text" | "Time" | "%future added value";
export type FilterInput_data = {
    readonly type: FilterType;
    readonly label: string | null;
    readonly name: string;
    readonly options: ReadonlyArray<{
        readonly group: string | null;
        readonly label: string;
        readonly value: string | null;
    } | null> | null;
    readonly " $refType": "FilterInput_data";
};
export type FilterInput_data$data = FilterInput_data;
export type FilterInput_data$key = {
    readonly " $data"?: FilterInput_data$data;
    readonly " $fragmentRefs": FragmentRefs<"FilterInput_data">;
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
  "name": "FilterInput_data",
  "selections": [
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
  "type": "FilterInput"
};
})();
(node as any).hash = '6c7a75dea0fc8d4b51274311882e7c68';
export default node;
