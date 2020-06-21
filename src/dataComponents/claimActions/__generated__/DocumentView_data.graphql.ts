/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type DocumentView_data = {
    readonly url: string;
    readonly " $refType": "DocumentView_data";
};
export type DocumentView_data$data = DocumentView_data;
export type DocumentView_data$key = {
    readonly " $data"?: DocumentView_data$data;
    readonly " $fragmentRefs": FragmentRefs<"DocumentView_data">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DocumentView_data",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "url",
      "storageKey": null
    }
  ],
  "type": "ClaimDocument"
};
(node as any).hash = 'd4a1f110972d8e4beb8f9a7c2b707a97';
export default node;
