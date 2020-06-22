/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ReportActions_data = {
    readonly " $fragmentRefs": FragmentRefs<"NextStep_data">;
    readonly " $refType": "ReportActions_data";
};
export type ReportActions_data$data = ReportActions_data;
export type ReportActions_data$key = {
    readonly " $data"?: ReportActions_data$data;
    readonly " $fragmentRefs": FragmentRefs<"ReportActions_data">;
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
  "name": "ReportActions_data",
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
(node as any).hash = '0dea08b6ba946d19f2e6323dd860827a';
export default node;
