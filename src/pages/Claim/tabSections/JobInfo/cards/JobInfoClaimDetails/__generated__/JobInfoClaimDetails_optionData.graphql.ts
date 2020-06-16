/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type JobInfoClaimDetails_optionData = {
    readonly " $fragmentRefs": FragmentRefs<"JobInfoClaimDetailsRow1_optionData" | "JobInfoClaimDetailsRow2_meta" | "JobInfoClaimDetailsRow4_optionData" | "JobInfoClaimDetailsRow5_optionData" | "JobInfoClaimDetailsRow6_optionData">;
    readonly " $refType": "JobInfoClaimDetails_optionData";
};
export type JobInfoClaimDetails_optionData$data = JobInfoClaimDetails_optionData;
export type JobInfoClaimDetails_optionData$key = {
    readonly " $data"?: JobInfoClaimDetails_optionData$data;
    readonly " $fragmentRefs": FragmentRefs<"JobInfoClaimDetails_optionData">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "JobInfoClaimDetails_optionData",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "JobInfoClaimDetailsRow1_optionData"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "JobInfoClaimDetailsRow2_meta"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "JobInfoClaimDetailsRow4_optionData"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "JobInfoClaimDetailsRow5_optionData"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "JobInfoClaimDetailsRow6_optionData"
    }
  ],
  "type": "Query"
};
(node as any).hash = '0236579b0249bf186d33ebefe707214d';
export default node;
