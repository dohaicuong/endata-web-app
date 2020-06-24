/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type UserType = "Administrator" | "Builder" | "ContentSupplier" | "Restorer" | "%future added value";
export type SupplierAllocate_data = {
    readonly currentUser: {
        readonly userType: UserType;
        readonly claimJob: {
            readonly id: string;
            readonly hasBuilding: boolean;
            readonly building: {
                readonly reallocate: boolean;
            } | null;
            readonly hasRestoration: boolean;
            readonly restoration: {
                readonly reallocate: boolean;
            } | null;
            readonly insurer: {
                readonly companyId: number;
            } | null;
            readonly incidentDetail: {
                readonly riskAddress: {
                    readonly postcode: string | null;
                } | null;
            } | null;
        } | null;
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"BuilderComboBox_data" | "RestorerComboBox_data">;
    readonly " $refType": "SupplierAllocate_data";
};
export type SupplierAllocate_data$data = SupplierAllocate_data;
export type SupplierAllocate_data$key = {
    readonly " $data"?: SupplierAllocate_data$data;
    readonly " $fragmentRefs": FragmentRefs<"SupplierAllocate_data">;
};



const node: ReaderFragment = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "reallocate",
    "storageKey": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "companyIds",
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
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "claimId",
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
  "name": "SupplierAllocate_data",
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
              "kind": "ScalarField",
              "name": "hasRestoration",
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
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "Company",
              "kind": "LinkedField",
              "name": "insurer",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "companyId",
                  "storageKey": null
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "IncidentDetail",
              "kind": "LinkedField",
              "name": "incidentDetail",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "Address",
                  "kind": "LinkedField",
                  "name": "riskAddress",
                  "plural": false,
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "postcode",
                      "storageKey": null
                    }
                  ],
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "args": (v1/*: any*/),
      "kind": "FragmentSpread",
      "name": "BuilderComboBox_data"
    },
    {
      "args": (v1/*: any*/),
      "kind": "FragmentSpread",
      "name": "RestorerComboBox_data"
    }
  ],
  "type": "Query"
};
})();
(node as any).hash = '67ad294716dbb1c4a1f160d6dbf7b9d4';
export default node;
