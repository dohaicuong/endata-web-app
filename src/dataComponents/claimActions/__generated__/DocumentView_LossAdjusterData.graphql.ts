/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type DocumentView_LossAdjusterData = {
    readonly url: string;
    readonly " $refType": "DocumentView_LossAdjusterData";
};
export type DocumentView_LossAdjusterData$data = DocumentView_LossAdjusterData;
export type DocumentView_LossAdjusterData$key = {
    readonly " $data"?: DocumentView_LossAdjusterData$data;
    readonly " $fragmentRefs": FragmentRefs<"DocumentView_LossAdjusterData">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DocumentView_LossAdjusterData",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "url",
      "storageKey": null
    }
  ],
  "type": "ClaimLossAdjusterDocument"
};
(node as any).hash = '62827e53d2567cd97d2683a2aa40334e';
export default node;
