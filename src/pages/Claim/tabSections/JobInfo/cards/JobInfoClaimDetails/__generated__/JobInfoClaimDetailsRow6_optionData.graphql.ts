/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type UserType = "Administrator" | "Builder" | "ContentSupplier" | "Restorer" | "%future added value";
export type JobInfoClaimDetailsRow6_optionData = {
    readonly currentUser: {
        readonly userType: UserType;
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"SpecialistReviewComboBoxProps_data" | "CaseManagerComboBox_data">;
    readonly " $refType": "JobInfoClaimDetailsRow6_optionData";
};
export type JobInfoClaimDetailsRow6_optionData$data = JobInfoClaimDetailsRow6_optionData;
export type JobInfoClaimDetailsRow6_optionData$key = {
    readonly " $data"?: JobInfoClaimDetailsRow6_optionData$data;
    readonly " $fragmentRefs": FragmentRefs<"JobInfoClaimDetailsRow6_optionData">;
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
  "name": "JobInfoClaimDetailsRow6_optionData",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "AuthenticatedUser",
      "kind": "LinkedField",
      "name": "currentUser",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "userType",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "args": (v0/*: any*/),
      "kind": "FragmentSpread",
      "name": "SpecialistReviewComboBoxProps_data"
    },
    {
      "args": (v0/*: any*/),
      "kind": "FragmentSpread",
      "name": "CaseManagerComboBox_data"
    }
  ],
  "type": "Query"
};
})();
(node as any).hash = '92ef5ad60ccd0cf22ef42f3001e6e890';
export default node;
