/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ClaimFinalise_data = {
    readonly " $fragmentRefs": FragmentRefs<"ClaimFinaliseForm_data">;
    readonly " $refType": "ClaimFinalise_data";
};
export type ClaimFinalise_data$data = ClaimFinalise_data;
export type ClaimFinalise_data$key = {
    readonly " $data"?: ClaimFinalise_data$data;
    readonly " $fragmentRefs": FragmentRefs<"ClaimFinalise_data">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ClaimFinalise_data",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ClaimFinaliseForm_data"
    }
  ],
  "type": "Query"
};
(node as any).hash = '6cfdd620b5844cc8b6f8144252c2ff9f';
export default node;
