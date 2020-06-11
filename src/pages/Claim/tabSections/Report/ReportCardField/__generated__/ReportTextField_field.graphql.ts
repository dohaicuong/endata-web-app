/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ReportTextField_field = {
    readonly label: string | null;
    readonly name: string | null;
    readonly " $refType": "ReportTextField_field";
};
export type ReportTextField_field$data = ReportTextField_field;
export type ReportTextField_field$key = {
    readonly " $data"?: ReportTextField_field$data;
    readonly " $fragmentRefs": FragmentRefs<"ReportTextField_field">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ReportTextField_field",
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
  "type": "TextField"
};
(node as any).hash = '5bef77d6aeaa80cea0ca663136e61607';
export default node;
