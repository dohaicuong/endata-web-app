/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ArrayField_data = {
    readonly label: string | null;
    readonly name: string | null;
    readonly fields: ReadonlyArray<{
        readonly __typename: string;
        readonly label: string | null;
        readonly grid: unknown | null;
        readonly " $fragmentRefs": FragmentRefs<"ReportInfoField_field" | "ReportTextField_field" | "ReportTextAreaField_field" | "ReportSelectField_field" | "ReportDateTimeField_field" | "ReportFileField_field">;
    }> | null;
    readonly " $refType": "ArrayField_data";
};
export type ArrayField_data$data = ArrayField_data;
export type ArrayField_data$key = {
    readonly " $data"?: ArrayField_data$data;
    readonly " $fragmentRefs": FragmentRefs<"ArrayField_data">;
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
  "name": "ArrayField_data",
  "selections": [
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
      "concreteType": null,
      "kind": "LinkedField",
      "name": "fields",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "__typename",
          "storageKey": null
        },
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "grid",
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
          "name": "ReportFileField_field"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "GroupField"
};
})();
(node as any).hash = '4584569fbe839bf866f84d0b133db55e';
export default node;
