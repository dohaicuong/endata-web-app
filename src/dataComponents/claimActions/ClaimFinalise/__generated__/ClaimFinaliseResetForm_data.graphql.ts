/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ClaimFinaliseResetForm_data = {
    readonly finaliseReason: {
        readonly name: string;
    } | null;
    readonly dateCompleted: string | null;
    readonly " $refType": "ClaimFinaliseResetForm_data";
};
export type ClaimFinaliseResetForm_data$data = ClaimFinaliseResetForm_data;
export type ClaimFinaliseResetForm_data$key = {
    readonly " $data"?: ClaimFinaliseResetForm_data$data;
    readonly " $fragmentRefs": FragmentRefs<"ClaimFinaliseResetForm_data">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ClaimFinaliseResetForm_data",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "ClaimFinaliseReason",
      "kind": "LinkedField",
      "name": "finaliseReason",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "dateCompleted",
      "storageKey": null
    }
  ],
  "type": "ClaimPortfolio"
};
(node as any).hash = 'dd0eb87e8dec368bb24af0a674fe004f';
export default node;
