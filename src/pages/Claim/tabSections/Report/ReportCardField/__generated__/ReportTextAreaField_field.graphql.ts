/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ReportTextAreaField_field = {
    readonly label: string | null;
    readonly name: string | null;
    readonly rows: number | null;
    readonly rowsMax: number | null;
    readonly " $refType": "ReportTextAreaField_field";
};
export type ReportTextAreaField_field$data = ReportTextAreaField_field;
export type ReportTextAreaField_field$key = {
    readonly " $data"?: ReportTextAreaField_field$data;
    readonly " $fragmentRefs": FragmentRefs<"ReportTextAreaField_field">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ReportTextAreaField_field",
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
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "rows",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "rowsMax",
      "storageKey": null
    }
  ],
  "type": "TextAreaField"
};
(node as any).hash = '0e1ab015ece8d43094d6ebbb8f8d4209';
export default node;
