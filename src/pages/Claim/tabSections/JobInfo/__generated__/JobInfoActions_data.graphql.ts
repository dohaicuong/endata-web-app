/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type JobInfoActions_data = {
    readonly " $fragmentRefs": FragmentRefs<"NextStep_data">;
    readonly " $refType": "JobInfoActions_data";
};
export type JobInfoActions_data$data = JobInfoActions_data;
export type JobInfoActions_data$key = {
    readonly " $data"?: JobInfoActions_data$data;
    readonly " $fragmentRefs": FragmentRefs<"JobInfoActions_data">;
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
  "name": "JobInfoActions_data",
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
(node as any).hash = '5f2f35f48d933e61839ee84aa04968fb';
export default node;
