/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type JobInfoClaimDetailsRow1_optionData = {
    readonly " $fragmentRefs": FragmentRefs<"CaseManager_options" | "ExternalLossFirm_options">;
    readonly " $refType": "JobInfoClaimDetailsRow1_optionData";
};
export type JobInfoClaimDetailsRow1_optionData$data = JobInfoClaimDetailsRow1_optionData;
export type JobInfoClaimDetailsRow1_optionData$key = {
    readonly " $data"?: JobInfoClaimDetailsRow1_optionData$data;
    readonly " $fragmentRefs": FragmentRefs<"JobInfoClaimDetailsRow1_optionData">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "companyId",
      "type": null
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "JobInfoClaimDetailsRow1_optionData",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CaseManager_options"
    },
    {
      "args": [
        {
          "kind": "Variable",
          "name": "companyId",
          "variableName": "companyId"
        }
      ],
      "kind": "FragmentSpread",
      "name": "ExternalLossFirm_options"
    }
  ],
  "type": "Query"
};
(node as any).hash = 'b067a0897c1f35de94ee9fd48c9e1c7c';
export default node;
