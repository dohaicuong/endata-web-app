/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type JobNotesActions_data = {
    readonly " $fragmentRefs": FragmentRefs<"NextStep_data" | "JobNotesInitialCall_claim">;
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
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "JobNotesInitialCall_claim"
    }
  ],
  "type": "Query"
};
(node as any).hash = '2220150053e3ebdd9c970135f855a6dd';
export default node;
