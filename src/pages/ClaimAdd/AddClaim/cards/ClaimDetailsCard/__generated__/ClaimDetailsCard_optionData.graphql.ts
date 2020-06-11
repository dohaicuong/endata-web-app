/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type UserType = "Administrator" | "Builder" | "ContentSupplier" | "Restorer" | "%future added value";
export type ClaimDetailsCard_optionData = {
    readonly me: {
        readonly userType: UserType;
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"CaseManager_options" | "ExternalLossFirm_options" | "Builder_options" | "Restorer_options" | "EventType_options" | "CatCode_options" | "Distributor_options" | "PdsReference_options" | "SpecialistReview_options" | "LossAdjuster_options">;
    readonly " $refType": "ClaimDetailsCard_optionData";
};
export type ClaimDetailsCard_optionData$data = ClaimDetailsCard_optionData;
export type ClaimDetailsCard_optionData$key = {
    readonly " $data"?: ClaimDetailsCard_optionData$data;
    readonly " $fragmentRefs": FragmentRefs<"ClaimDetailsCard_optionData">;
};



const node: ReaderFragment = (function(){
var v0 = [
  {
    "kind": "Variable",
    "name": "companyId",
    "variableName": "companyId"
  },
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
      "args": null,
      "kind": "FragmentSpread",
      "name": "CaseManager_options"
    },
    {
      "args": (v0/*: any*/),
      "kind": "FragmentSpread",
      "name": "ExternalLossFirm_options"
    },
    {
      "args": (v0/*: any*/),
      "kind": "FragmentSpread",
      "name": "Builder_options"
    },
    {
      "args": (v0/*: any*/),
      "kind": "FragmentSpread",
      "name": "Restorer_options"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "EventType_options"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CatCode_options"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "Distributor_options"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "PdsReference_options"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "SpecialistReview_options"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "LossAdjuster_options"
    }
  ],
  "type": "Query"
};
})();
(node as any).hash = '3a3fa350b25e8aad5652d1b914effe91';
export default node;
