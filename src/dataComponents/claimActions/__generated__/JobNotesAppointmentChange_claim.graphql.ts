/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type JobNotesAppointmentChange_claim = {
    readonly claimJob: {
        readonly id: string;
    } | null;
    readonly " $refType": "JobNotesAppointmentChange_claim";
};
export type JobNotesAppointmentChange_claim$data = JobNotesAppointmentChange_claim;
export type JobNotesAppointmentChange_claim$key = {
    readonly " $data"?: JobNotesAppointmentChange_claim$data;
    readonly " $fragmentRefs": FragmentRefs<"JobNotesAppointmentChange_claim">;
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
  "name": "JobNotesAppointmentChange_claim",
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
(node as any).hash = 'b51552538dc686ef69510c29ecffa4ed';
export default node;
