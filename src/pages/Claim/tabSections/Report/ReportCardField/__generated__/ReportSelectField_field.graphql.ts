/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ReportSelectField_field = {
    readonly name: string | null;
    readonly label: string | null;
    readonly options: ReadonlyArray<{
        readonly id: string;
        readonly label: string;
        readonly value: string;
    }> | null;
    readonly " $refType": "ReportSelectField_field";
};
export type ReportSelectField_field$data = ReportSelectField_field;
export type ReportSelectField_field$key = {
    readonly " $data"?: ReportSelectField_field$data;
    readonly " $fragmentRefs": FragmentRefs<"ReportSelectField_field">;
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
  "name": "ReportSelectField_field",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "SelectFieldOption",
      "kind": "LinkedField",
      "name": "options",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        },
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "value",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "SelectField"
};
})();
(node as any).hash = '736905d3e863787c3a1a0e35189cdf85';
export default node;
