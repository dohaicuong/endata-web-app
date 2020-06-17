/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type JobNotesActions_actions = {
    readonly makeLossAdjusterInitialCall: {
        readonly " $fragmentRefs": FragmentRefs<"ActionButton_action">;
    };
    readonly makeLossAdjusterAppointment: {
        readonly " $fragmentRefs": FragmentRefs<"ActionButton_action">;
    };
    readonly updateReserve: {
        readonly " $fragmentRefs": FragmentRefs<"ActionButton_action">;
    };
    readonly awaitingInfo: {
        readonly " $fragmentRefs": FragmentRefs<"ActionButton_action">;
    };
    readonly addJobNote: {
        readonly " $fragmentRefs": FragmentRefs<"ActionButton_action">;
    };
    readonly " $refType": "JobNotesActions_actions";
};
export type JobNotesActions_actions$data = JobNotesActions_actions;
export type JobNotesActions_actions$key = {
    readonly " $data"?: JobNotesActions_actions$data;
    readonly " $fragmentRefs": FragmentRefs<"JobNotesActions_actions">;
};



const node: ReaderFragment = (function(){
var v0 = [
  {
    "args": null,
    "kind": "FragmentSpread",
    "name": "ActionButton_action"
  }
];
return {
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
      "name": "makeLossAdjusterInitialCall",
      "plural": false,
      "selections": (v0/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "ActionControl",
      "kind": "LinkedField",
      "name": "makeLossAdjusterAppointment",
      "plural": false,
      "selections": (v0/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "ActionControl",
      "kind": "LinkedField",
      "name": "updateReserve",
      "plural": false,
      "selections": (v0/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "ActionControl",
      "kind": "LinkedField",
      "name": "awaitingInfo",
      "plural": false,
      "selections": (v0/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "ActionControl",
      "kind": "LinkedField",
      "name": "addJobNote",
      "plural": false,
      "selections": (v0/*: any*/),
      "storageKey": null
    }
  ],
  "type": "ClaimJobAction"
};
})();
(node as any).hash = '93837750164f34098ffa9e82001a5e48';
export default node;
