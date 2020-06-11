/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ReportInfoField_field = {
    readonly label: string | null;
    readonly value: string | null;
    readonly " $refType": "ReportInfoField_field";
};
export type ReportInfoField_field$data = ReportInfoField_field;
export type ReportInfoField_field$key = {
    readonly " $data"?: ReportInfoField_field$data;
    readonly " $fragmentRefs": FragmentRefs<"ReportInfoField_field">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ReportInfoField_field",
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
      "name": "value",
      "storageKey": null
    }
  ],
  "type": "InfoField"
};
(node as any).hash = 'c8c5500acd76da569a8c7e10f5ac106f';
export default node;
