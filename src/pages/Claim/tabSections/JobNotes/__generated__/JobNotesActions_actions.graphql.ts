/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type JobNotesActions_actions = {
    readonly addJobNote: {
        readonly id: string;
    };
    readonly " $fragmentRefs": FragmentRefs<"AwaitingInfo_action">;
    readonly " $refType": "JobNotesActions_actions";
};
export type JobNotesActions_actions$data = JobNotesActions_actions;
export type JobNotesActions_actions$key = {
    readonly " $data"?: JobNotesActions_actions$data;
    readonly " $fragmentRefs": FragmentRefs<"JobNotesActions_actions">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "JobNotesActions_actions",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "ActionControl",
      "kind": "LinkedField",
      "name": "addJobNote",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "AwaitingInfo_action"
    }
  ],
  "type": "ClaimJobAction"
};
(node as any).hash = '7ab16e0f72a15aba5dbc9126d978381c';
export default node;
