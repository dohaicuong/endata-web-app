/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type AddClaimRoot_data = {
    readonly company: {
        readonly " $fragmentRefs": FragmentRefs<"CustomerDetailsCard_company" | "ClaimDetailsCard_company" | "QuotingBuildersCard_meta" | "QuotingRestorersCard_meta">;
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"ClaimDetailsCard_optionData" | "QuotingBuildersCard_options" | "QuotingRestorersCard_options">;
    readonly " $refType": "AddClaimRoot_data";
};
export type AddClaimRoot_data$data = AddClaimRoot_data;
export type AddClaimRoot_data$key = {
    readonly " $data"?: AddClaimRoot_data$data;
    readonly " $fragmentRefs": FragmentRefs<"AddClaimRoot_data">;
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
      "name": "compId",
      "type": "ID!"
    },
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
  "name": "AddClaimRoot_data",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "fields": [
            {
              "kind": "Variable",
              "name": "id",
              "variableName": "compId"
            },
            {
              "kind": "Literal",
              "name": "portfolioType",
              "value": "Building"
            }
          ],
          "kind": "ObjectValue",
          "name": "where"
        }
      ],
      "concreteType": "CompanyProfile",
      "kind": "LinkedField",
      "name": "company",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "CustomerDetailsCard_company"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ClaimDetailsCard_company"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "QuotingBuildersCard_meta"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "QuotingRestorersCard_meta"
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ClaimDetailsCard_optionData"
    },
    {
      "args": (v0/*: any*/),
      "kind": "FragmentSpread",
      "name": "QuotingBuildersCard_options"
    },
    {
      "args": (v0/*: any*/),
      "kind": "FragmentSpread",
      "name": "QuotingRestorersCard_options"
    }
  ],
  "type": "Query"
};
})();
(node as any).hash = '749ca66456b571bd0045d3a8ae661ad8';
export default node;
