/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ActionButton_action = {
    readonly label: string;
    readonly isDisabled: boolean;
    readonly isDisplay: boolean;
    readonly " $refType": "ActionButton_action";
};
export type ActionButton_action$data = ActionButton_action;
export type ActionButton_action$key = {
    readonly " $data"?: ActionButton_action$data;
    readonly " $fragmentRefs": FragmentRefs<"ActionButton_action">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ActionButton_action",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "label",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isDisabled",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isDisplay",
      "storageKey": null
    }
  ],
  "type": "ActionControl"
};
(node as any).hash = '006b361e359b68a20a92ce79bbd518fd';
export default node;
