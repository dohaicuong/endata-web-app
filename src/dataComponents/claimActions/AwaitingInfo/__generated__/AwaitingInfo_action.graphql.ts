/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type AwaitingInfo_action = {
    readonly awaitingInfo: {
        readonly " $fragmentRefs": FragmentRefs<"ActionButton_action">;
    };
    readonly " $refType": "AwaitingInfo_action";
};
export type AwaitingInfo_action$data = AwaitingInfo_action;
export type AwaitingInfo_action$key = {
    readonly " $data"?: AwaitingInfo_action$data;
    readonly " $fragmentRefs": FragmentRefs<"AwaitingInfo_action">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AwaitingInfo_action",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "ActionControl",
      "kind": "LinkedField",
      "name": "awaitingInfo",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ActionButton_action"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "ClaimJobAction"
};
(node as any).hash = '8928cb6768232766e5969b8bca99d8b1';
export default node;
