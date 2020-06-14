/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type UserType = "Administrator" | "Builder" | "ContentSupplier" | "Restorer" | "%future added value";
export type ClaimDetailsCard_optionData = {
    readonly me: {
        readonly userType: UserType;
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"CaseManagerComboBox_data" | "ExternalLossAdjusterComboBox_data" | "BuilderComboBox_data" | "RestorerComboBox_data" | "EventTypeComboBox_data" | "CatCodeComboBox_data" | "DistributorComboBox_data" | "PdsReferenceComboBox_data" | "SpecialistReviewComboBoxProps_data">;
    readonly " $refType": "ClaimDetailsCard_optionData";
};
export type ClaimDetailsCard_optionData$data = ClaimDetailsCard_optionData;
export type ClaimDetailsCard_optionData$key = {
    readonly " $data"?: ClaimDetailsCard_optionData$data;
    readonly " $fragmentRefs": FragmentRefs<"ClaimDetailsCard_optionData">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "kind": "Variable",
  "name": "companyIds",
  "variableName": "companyId"
},
v1 = [
  (v0/*: any*/)
],
v2 = [
  (v0/*: any*/),
  {
    "kind": "Variable",
    "name": "postcode",
    "variableName": "postcode"
  }
];
return {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "companyId",
      "type": null
    },
    {
      "kind": "RootArgument",
      "name": "postcode",
      "type": null
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "ClaimDetailsCard_optionData",
  "selections": [
    {
      "alias": "me",
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
      "args": (v1/*: any*/),
      "kind": "FragmentSpread",
      "name": "CaseManagerComboBox_data"
    },
    {
      "args": (v2/*: any*/),
      "kind": "FragmentSpread",
      "name": "ExternalLossAdjusterComboBox_data"
    },
    {
      "args": (v2/*: any*/),
      "kind": "FragmentSpread",
      "name": "BuilderComboBox_data"
    },
    {
      "args": (v2/*: any*/),
      "kind": "FragmentSpread",
      "name": "RestorerComboBox_data"
    },
    {
      "args": (v1/*: any*/),
      "kind": "FragmentSpread",
      "name": "EventTypeComboBox_data"
    },
    {
      "args": (v1/*: any*/),
      "kind": "FragmentSpread",
      "name": "CatCodeComboBox_data"
    },
    {
      "args": (v1/*: any*/),
      "kind": "FragmentSpread",
      "name": "DistributorComboBox_data"
    },
    {
      "args": (v1/*: any*/),
      "kind": "FragmentSpread",
      "name": "PdsReferenceComboBox_data"
    },
    {
      "args": (v1/*: any*/),
      "kind": "FragmentSpread",
      "name": "SpecialistReviewComboBoxProps_data"
    }
  ],
  "type": "Query"
};
})();
(node as any).hash = 'b6c657c5bc9738dcc41582283663e34d';
export default node;
