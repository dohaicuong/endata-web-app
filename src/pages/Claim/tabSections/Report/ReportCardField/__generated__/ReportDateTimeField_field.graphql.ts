/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ReportDateTimeField_field = {
    readonly label: string | null;
    readonly name: string | null;
    readonly " $refType": "ReportDateTimeField_field";
};
export type ReportDateTimeField_field$data = ReportDateTimeField_field;
export type ReportDateTimeField_field$key = {
    readonly " $data"?: ReportDateTimeField_field$data;
    readonly " $fragmentRefs": FragmentRefs<"ReportDateTimeField_field">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ReportDateTimeField_field",
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
  "type": "DateTimeField"
};
(node as any).hash = 'f8e0a50b638b76f07ef46f44a11f39e3';
export default node;
