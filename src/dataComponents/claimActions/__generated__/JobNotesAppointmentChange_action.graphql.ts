/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type JobNotesAppointmentChange_action = {
    readonly changeAppointment: {
        readonly " $fragmentRefs": FragmentRefs<"ActionButton_action">;
    };
    readonly " $refType": "JobNotesAppointmentChange_action";
};
export type JobNotesAppointmentChange_action$data = JobNotesAppointmentChange_action;
export type JobNotesAppointmentChange_action$key = {
    readonly " $data"?: JobNotesAppointmentChange_action$data;
    readonly " $fragmentRefs": FragmentRefs<"JobNotesAppointmentChange_action">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "JobNotesAppointmentChange_action",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "ActionControl",
      "kind": "LinkedField",
      "name": "changeAppointment",
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
(node as any).hash = 'fc00796ed3b68150ae68eb064d010640';
export default node;
