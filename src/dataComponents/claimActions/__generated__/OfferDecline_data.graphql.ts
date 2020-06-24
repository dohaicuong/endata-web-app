/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type UserType = "Administrator" | "Builder" | "ContentSupplier" | "Restorer" | "%future added value";
export type OfferDecline_data = {
    readonly currentUser: {
        readonly userType: UserType;
        readonly claimJob: {
            readonly building: {
                readonly jobSuppliers: ReadonlyArray<{
                    readonly id: string;
                    readonly quote: {
                        readonly id: string;
                    } | null;
                } | null> | null;
            } | null;
            readonly restoration: {
                readonly jobSuppliers: ReadonlyArray<{
                    readonly id: string;
                    readonly quote: {
                        readonly id: string;
                    } | null;
                } | null> | null;
            } | null;
        } | null;
    } | null;
    readonly " $refType": "OfferDecline_data";
};
export type OfferDecline_data$data = OfferDecline_data;
export type OfferDecline_data$key = {
    readonly " $data"?: OfferDecline_data$data;
    readonly " $fragmentRefs": FragmentRefs<"OfferDecline_data">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "JobSupplier",
    "kind": "LinkedField",
    "name": "jobSuppliers",
    "plural": true,
    "selections": [
      (v0/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "JobQuote",
        "kind": "LinkedField",
        "name": "quote",
        "plural": false,
        "selections": [
          (v0/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "claimId",
      "type": "ID!"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "OfferDecline_data",
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
              "concreteType": "ClaimPortfolio",
              "kind": "LinkedField",
              "name": "building",
              "plural": false,
              "selections": (v1/*: any*/),
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "ClaimPortfolio",
              "kind": "LinkedField",
              "name": "restoration",
              "plural": false,
              "selections": (v1/*: any*/),
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query"
};
})();
(node as any).hash = '3ab03797a14e9e59b1049e47893176a5';
export default node;
