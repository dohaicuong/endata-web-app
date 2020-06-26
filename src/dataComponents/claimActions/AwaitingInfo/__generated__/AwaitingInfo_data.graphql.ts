/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type UserType = "Administrator" | "Builder" | "ContentSupplier" | "Restorer" | "%future added value";
export type AwaitingInfo_data = {
    readonly currentUser: {
        readonly userType: UserType;
        readonly claimJob: {
            readonly id: string;
            readonly hasBuilding: boolean;
            readonly hasContents: boolean;
            readonly hasRestoration: boolean;
            readonly building: {
                readonly " $fragmentRefs": FragmentRefs<"AwaitingInfoPortfolio_portfolioData">;
            } | null;
            readonly contents: {
                readonly " $fragmentRefs": FragmentRefs<"AwaitingInfoPortfolio_portfolioData">;
            } | null;
            readonly restoration: {
                readonly " $fragmentRefs": FragmentRefs<"AwaitingInfoPortfolio_portfolioData">;
            } | null;
        } | null;
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"AwaitingInfoPortfolio_data">;
    readonly " $refType": "AwaitingInfo_data";
};
export type AwaitingInfo_data$data = AwaitingInfo_data;
export type AwaitingInfo_data$key = {
    readonly " $data"?: AwaitingInfo_data$data;
    readonly " $fragmentRefs": FragmentRefs<"AwaitingInfo_data">;
};



const node: ReaderFragment = (function(){
var v0 = [
  {
    "args": null,
    "kind": "FragmentSpread",
    "name": "AwaitingInfoPortfolio_portfolioData"
  }
];
return {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "claimId",
      "type": "ID!"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "AwaitingInfo_data",
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
        },
        {
          "alias": null,
          "args": [
            {
              "fields": [
                {
                  "kind": "Variable",
                  "name": "id",
                  "variableName": "claimId"
                }
              ],
              "kind": "ObjectValue",
              "name": "where"
            }
          ],
          "concreteType": "ClaimJob",
          "kind": "LinkedField",
          "name": "claimJob",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "id",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "hasBuilding",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "hasContents",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "hasRestoration",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "ClaimPortfolio",
              "kind": "LinkedField",
              "name": "building",
              "plural": false,
              "selections": (v0/*: any*/),
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "ClaimPortfolio",
              "kind": "LinkedField",
              "name": "contents",
              "plural": false,
              "selections": (v0/*: any*/),
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "ClaimPortfolio",
              "kind": "LinkedField",
              "name": "restoration",
              "plural": false,
              "selections": (v0/*: any*/),
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "AwaitingInfoPortfolio_data"
    }
  ],
  "type": "Query"
};
})();
(node as any).hash = 'cbeda5df508a2c43fc994810e22973df';
export default node;
