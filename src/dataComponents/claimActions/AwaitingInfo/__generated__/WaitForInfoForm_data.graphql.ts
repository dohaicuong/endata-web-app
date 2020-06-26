/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type WaitForInfoForm_data = {
    readonly " $fragmentRefs": FragmentRefs<"AwaitingInfoReasonSelect_data">;
    readonly " $refType": "WaitForInfoForm_data";
};
export type WaitForInfoForm_data$data = WaitForInfoForm_data;
export type WaitForInfoForm_data$key = {
    readonly " $data"?: WaitForInfoForm_data$data;
    readonly " $fragmentRefs": FragmentRefs<"WaitForInfoForm_data">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "WaitForInfoForm_data",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "AwaitingInfoReasonSelect_data"
    }
  ],
  "type": "Query"
};
(node as any).hash = '8ba4e5efc276982ef9bcbd69a65c1d75';
export default node;
