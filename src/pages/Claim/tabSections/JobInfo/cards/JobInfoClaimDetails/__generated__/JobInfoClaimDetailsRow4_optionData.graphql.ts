/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type JobInfoClaimDetailsRow4_optionData = {
    readonly " $fragmentRefs": FragmentRefs<"EventTypeComboBox_data" | "CatCodeComboBox_data">;
    readonly " $refType": "JobInfoClaimDetailsRow4_optionData";
};
export type JobInfoClaimDetailsRow4_optionData$data = JobInfoClaimDetailsRow4_optionData;
export type JobInfoClaimDetailsRow4_optionData$key = {
    readonly " $data"?: JobInfoClaimDetailsRow4_optionData$data;
    readonly " $fragmentRefs": FragmentRefs<"JobInfoClaimDetailsRow4_optionData">;
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
  "name": "JobInfoClaimDetailsRow4_optionData",
  "selections": [
    {
      "args": (v0/*: any*/),
      "kind": "FragmentSpread",
      "name": "EventTypeComboBox_data"
    },
    {
      "args": (v0/*: any*/),
      "kind": "FragmentSpread",
      "name": "CatCodeComboBox_data"
    }
  ],
  "type": "Query"
};
})();
(node as any).hash = 'bda78b8b4851c83f460d4d531c00f495';
export default node;
