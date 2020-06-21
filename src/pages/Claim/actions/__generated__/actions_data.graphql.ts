/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type actions_data = {
    readonly " $fragmentRefs": FragmentRefs<"NextStepAction_data">;
    readonly " $refType": "actions_data";
};
export type actions_data$data = actions_data;
export type actions_data$key = {
    readonly " $data"?: actions_data$data;
    readonly " $fragmentRefs": FragmentRefs<"actions_data">;
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
  "name": "actions_data",
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
      "name": "NextStepAction_data"
    }
  ],
  "type": "Query"
};
(node as any).hash = 'cbc598ef26ef86ebec2a789b58068346';
export default node;
