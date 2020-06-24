/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type JobNotesInitialCall_claim = {
    readonly claimJob: {
        readonly id: string;
    } | null;
    readonly " $refType": "JobNotesInitialCall_claim";
};
export type JobNotesInitialCall_claim$data = JobNotesInitialCall_claim;
export type JobNotesInitialCall_claim$key = {
    readonly " $data"?: JobNotesInitialCall_claim$data;
    readonly " $fragmentRefs": FragmentRefs<"JobNotesInitialCall_claim">;
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
  "name": "JobNotesInitialCall_claim",
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
(node as any).hash = '1210759dd422b211a15d9e0af600bbd1';
export default node;
