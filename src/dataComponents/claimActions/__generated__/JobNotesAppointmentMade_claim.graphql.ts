/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type JobNotesAppointmentMade_claim = {
    readonly claimJob: {
        readonly id: string;
    } | null;
    readonly " $refType": "JobNotesAppointmentMade_claim";
};
export type JobNotesAppointmentMade_claim$data = JobNotesAppointmentMade_claim;
export type JobNotesAppointmentMade_claim$key = {
    readonly " $data"?: JobNotesAppointmentMade_claim$data;
    readonly " $fragmentRefs": FragmentRefs<"JobNotesAppointmentMade_claim">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "claimId",
      "type": "ID!"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "JobNotesAppointmentMade_claim",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "fields": [
            {
              "kind": "Variable",
              "name": "id",
              "variableName": "claimId"
            }
          ],
          "kind": "ObjectValue",
          "name": "where"
        }
      ],
      "concreteType": "ClaimJob",
      "kind": "LinkedField",
      "name": "claimJob",
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
    }
  ],
  "type": "Query"
};
(node as any).hash = 'be4f75dbf62bdb94b22041b7c36ab571';
export default node;
