/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type JobNotesInitialCall_action = {
    readonly makeInitialCall: {
        readonly " $fragmentRefs": FragmentRefs<"ActionButton_action">;
    };
    readonly " $refType": "JobNotesInitialCall_action";
};
export type JobNotesInitialCall_action$data = JobNotesInitialCall_action;
export type JobNotesInitialCall_action$key = {
    readonly " $data"?: JobNotesInitialCall_action$data;
    readonly " $fragmentRefs": FragmentRefs<"JobNotesInitialCall_action">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "JobNotesInitialCall_action",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "ActionControl",
      "kind": "LinkedField",
      "name": "makeInitialCall",
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
(node as any).hash = 'b41b974c68f15d821a3b69c715eb9257';
export default node;
