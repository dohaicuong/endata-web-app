/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ReportFileField_field = {
    readonly label: string | null;
    readonly name: string | null;
    readonly " $refType": "ReportFileField_field";
};
export type ReportFileField_field$data = ReportFileField_field;
export type ReportFileField_field$key = {
    readonly " $data"?: ReportFileField_field$data;
    readonly " $fragmentRefs": FragmentRefs<"ReportFileField_field">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ReportFileField_field",
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
    }
  ],
  "type": "FileField"
};
(node as any).hash = 'ee461901cfb4ab9456bc9e6a7edb8c5b';
export default node;
