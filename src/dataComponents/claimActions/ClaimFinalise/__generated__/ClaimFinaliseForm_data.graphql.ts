/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ClaimFinaliseForm_data = {
    readonly " $fragmentRefs": FragmentRefs<"FinaliseReasonComboBox_data">;
    readonly " $refType": "ClaimFinaliseForm_data";
};
export type ClaimFinaliseForm_data$data = ClaimFinaliseForm_data;
export type ClaimFinaliseForm_data$key = {
    readonly " $data"?: ClaimFinaliseForm_data$data;
    readonly " $fragmentRefs": FragmentRefs<"ClaimFinaliseForm_data">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ClaimFinaliseForm_data",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "FinaliseReasonComboBox_data"
    }
  ],
  "type": "Query"
};
(node as any).hash = '79dd2ae3fbeeb1242ac3c7ef2a38deca';
export default node;
