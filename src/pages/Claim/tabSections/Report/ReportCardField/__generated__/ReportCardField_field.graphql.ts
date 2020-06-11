/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ReportCardField_field = {
    readonly __typename: string;
    readonly label: string | null;
    readonly " $fragmentRefs": FragmentRefs<"ReportInfoField_field" | "ReportTextField_field" | "ReportTextAreaField_field" | "ReportSelectField_field" | "ReportDateTimeField_field" | "ReportGroupField_field" | "ReportFileField_field">;
    readonly " $refType": "ReportCardField_field";
};
export type ReportCardField_field$data = ReportCardField_field;
export type ReportCardField_field$key = {
    readonly " $data"?: ReportCardField_field$data;
    readonly " $fragmentRefs": FragmentRefs<"ReportCardField_field">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ReportCardField_field",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "__typename",
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
      "args": null,
      "kind": "FragmentSpread",
      "name": "ReportInfoField_field"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ReportTextField_field"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ReportTextAreaField_field"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ReportSelectField_field"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ReportDateTimeField_field"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ReportGroupField_field"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ReportFileField_field"
    }
  ],
  "type": "Field"
};
(node as any).hash = 'ced87e640a669d7546e1d593ffc23cff';
export default node;
