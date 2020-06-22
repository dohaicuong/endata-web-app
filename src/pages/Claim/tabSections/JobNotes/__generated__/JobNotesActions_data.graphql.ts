/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type JobNotesActions_data = {
    readonly " $fragmentRefs": FragmentRefs<"NextStep_data">;
    readonly " $refType": "JobNotesActions_data";
};
export type JobNotesActions_data$data = JobNotesActions_data;
export type JobNotesActions_data$key = {
    readonly " $data"?: JobNotesActions_data$data;
    readonly " $fragmentRefs": FragmentRefs<"JobNotesActions_data">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "claimId",
      "type": null
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "JobNotesActions_data",
  "selections": [
    {
      "args": [
        {
          "kind": "Variable",
          "name": "claimId",
          "variableName": "claimId"
        }
      ],
      "kind": "FragmentSpread",
      "name": "NextStep_data"
    }
  ],
  "type": "Query"
};
(node as any).hash = '2afa8a6b331b7bbf53114b9d2b7b2a0b';
export default node;
