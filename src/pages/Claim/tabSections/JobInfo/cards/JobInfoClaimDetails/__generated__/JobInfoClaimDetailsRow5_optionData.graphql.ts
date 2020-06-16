/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type JobInfoClaimDetailsRow5_optionData = {
    readonly " $fragmentRefs": FragmentRefs<"DistributorComboBox_data" | "PdsReferenceComboBox_data">;
    readonly " $refType": "JobInfoClaimDetailsRow5_optionData";
};
export type JobInfoClaimDetailsRow5_optionData$data = JobInfoClaimDetailsRow5_optionData;
export type JobInfoClaimDetailsRow5_optionData$key = {
    readonly " $data"?: JobInfoClaimDetailsRow5_optionData$data;
    readonly " $fragmentRefs": FragmentRefs<"JobInfoClaimDetailsRow5_optionData">;
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
  "name": "JobInfoClaimDetailsRow5_optionData",
  "selections": [
    {
      "args": (v0/*: any*/),
      "kind": "FragmentSpread",
      "name": "DistributorComboBox_data"
    },
    {
      "args": (v0/*: any*/),
      "kind": "FragmentSpread",
      "name": "PdsReferenceComboBox_data"
    }
  ],
  "type": "Query"
};
})();
(node as any).hash = '431ad702486ada881782332e2eaef42a';
export default node;
