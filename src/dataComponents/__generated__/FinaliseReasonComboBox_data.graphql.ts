/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type FinaliseReasonComboBox_data = {
    readonly reasons: ReadonlyArray<{
        readonly label: string;
        readonly value: string;
    } | null> | null;
    readonly " $refType": "FinaliseReasonComboBox_data";
};
export type FinaliseReasonComboBox_data$data = FinaliseReasonComboBox_data;
export type FinaliseReasonComboBox_data$key = {
    readonly " $data"?: FinaliseReasonComboBox_data$data;
    readonly " $fragmentRefs": FragmentRefs<"FinaliseReasonComboBox_data">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FinaliseReasonComboBox_data",
  "selections": [
    {
      "alias": "reasons",
      "args": [
        {
          "kind": "Literal",
          "name": "where",
          "value": {
            "subject": "finalisedReasons"
          }
        }
      ],
      "concreteType": "FilterOption",
      "kind": "LinkedField",
      "name": "claimFilterOptions",
      "plural": true,
      "selections": [
        {
          "alias": "label",
          "args": null,
          "kind": "ScalarField",
          "name": "name",
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
      "storageKey": "claimFilterOptions(where:{\"subject\":\"finalisedReasons\"})"
    }
  ],
  "type": "Query"
};
(node as any).hash = '1cfa12d3a254160bde62907e6a7b47c3';
export default node;
