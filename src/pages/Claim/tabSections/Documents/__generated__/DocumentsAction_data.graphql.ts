/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type DocumentsAction_data = {
    readonly " $fragmentRefs": FragmentRefs<"NextStep_data">;
    readonly " $refType": "DocumentsAction_data";
};
export type DocumentsAction_data$data = DocumentsAction_data;
export type DocumentsAction_data$key = {
    readonly " $data"?: DocumentsAction_data$data;
    readonly " $fragmentRefs": FragmentRefs<"DocumentsAction_data">;
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
  "name": "DocumentsAction_data",
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
(node as any).hash = '8e8a8779152956f9180dd1809727fe6d';
export default node;
