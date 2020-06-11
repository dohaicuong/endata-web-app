/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type JobInfoClaimDetails_optionData = {
    readonly " $fragmentRefs": FragmentRefs<"JobInfoClaimDetailsRow1_optionData" | "JobInfoClaimDetailsRow2_meta">;
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
    }
  ],
  "type": "Query"
};
(node as any).hash = '4ef18c475b895f49acf2e039f2ffbe64';
export default node;
