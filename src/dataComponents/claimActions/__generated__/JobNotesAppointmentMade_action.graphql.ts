/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type JobNotesAppointmentMade_action = {
    readonly makeAppointment: {
        readonly " $fragmentRefs": FragmentRefs<"ActionButton_action">;
    };
    readonly " $refType": "JobNotesAppointmentMade_action";
};
export type JobNotesAppointmentMade_action$data = JobNotesAppointmentMade_action;
export type JobNotesAppointmentMade_action$key = {
    readonly " $data"?: JobNotesAppointmentMade_action$data;
    readonly " $fragmentRefs": FragmentRefs<"JobNotesAppointmentMade_action">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "JobNotesAppointmentMade_action",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "ActionControl",
      "kind": "LinkedField",
      "name": "makeAppointment",
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
(node as any).hash = 'd2e0db52934e7f4125f43e0771008b1a';
export default node;
