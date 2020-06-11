/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type JobInfoClaimDetails_optionData = {
    readonly " $fragmentRefs": FragmentRefs<"CaseManager_options" | "ExternalLossFirm_options">;
    readonly " $refType": "JobInfoClaimDetails_optionData";
};
export type JobInfoClaimDetails_optionData$data = JobInfoClaimDetails_optionData;
export type JobInfoClaimDetails_optionData$key = {
    readonly " $data"?: JobInfoClaimDetails_optionData$data;
    readonly " $fragmentRefs": FragmentRefs<"JobInfoClaimDetails_optionData">;
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
  "name": "JobInfoClaimDetails_optionData",
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
(node as any).hash = '67c7537053206ea8303d57aaf374154c';
export default node;
