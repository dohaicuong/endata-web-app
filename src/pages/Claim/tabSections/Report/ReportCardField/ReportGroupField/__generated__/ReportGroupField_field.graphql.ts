/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ReportGroupField_field = {
    readonly label: string | null;
    readonly name: string | null;
    readonly " $fragmentRefs": FragmentRefs<"ArrayField_data">;
    readonly " $refType": "ReportGroupField_field";
};
export type ReportGroupField_field$data = ReportGroupField_field;
export type ReportGroupField_field$key = {
    readonly " $data"?: ReportGroupField_field$data;
    readonly " $fragmentRefs": FragmentRefs<"ReportGroupField_field">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ReportGroupField_field",
  "selections": [
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
      "name": "name",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ArrayField_data"
    }
  ],
  "type": "GroupField"
};
(node as any).hash = '2723dac6a268915e5fdaf9c24c1b2a2c';
export default node;
