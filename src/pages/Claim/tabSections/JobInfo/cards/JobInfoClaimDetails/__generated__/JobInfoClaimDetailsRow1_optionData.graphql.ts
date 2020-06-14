/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type JobInfoClaimDetailsRow1_optionData = {
    readonly " $fragmentRefs": FragmentRefs<"CaseManagerComboBox_data" | "ExternalLossAdjusterComboBox_data">;
    readonly " $refType": "JobInfoClaimDetailsRow1_optionData";
};
export type JobInfoClaimDetailsRow1_optionData$data = JobInfoClaimDetailsRow1_optionData;
export type JobInfoClaimDetailsRow1_optionData$key = {
    readonly " $data"?: JobInfoClaimDetailsRow1_optionData$data;
    readonly " $fragmentRefs": FragmentRefs<"JobInfoClaimDetailsRow1_optionData">;
};



const node: ReaderFragment = (function(){
var v0 = [
  {
    "kind": "Variable",
    "name": "companyIds",
    "variableName": "companyId"
  }
];
return {
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
      "args": (v0/*: any*/),
      "kind": "FragmentSpread",
      "name": "CaseManagerComboBox_data"
    },
    {
      "args": (v0/*: any*/),
      "kind": "FragmentSpread",
      "name": "ExternalLossAdjusterComboBox_data"
    }
  ],
  "type": "Query"
};
})();
(node as any).hash = '504b7a24e0f3a7d867507d5dfcd60fab';
export default node;
