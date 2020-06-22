/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CommunicationsActions_data = {
    readonly " $fragmentRefs": FragmentRefs<"NextStep_data">;
    readonly " $refType": "CommunicationsActions_data";
};
export type CommunicationsActions_data$data = CommunicationsActions_data;
export type CommunicationsActions_data$key = {
    readonly " $data"?: CommunicationsActions_data$data;
    readonly " $fragmentRefs": FragmentRefs<"CommunicationsActions_data">;
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
  "name": "CommunicationsActions_data",
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
(node as any).hash = 'b4c0790deb2a908c55a75215cc0296d5';
export default node;
