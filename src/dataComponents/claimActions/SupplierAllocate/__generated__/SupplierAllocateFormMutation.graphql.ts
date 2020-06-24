/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type PortfolioType = "Building" | "Contents" | "Restoration" | "%future added value";
export type ReallocateScopingSupplierInput = {
    supplierId: number;
    availableForQuoting: boolean;
    note?: string | null;
};
export type ENDataPortfolioKey = {
    id: string;
    portfolioType: PortfolioType;
};
export type SupplierAllocateFormMutationVariables = {
    input: ReallocateScopingSupplierInput;
    where: ENDataPortfolioKey;
};
export type SupplierAllocateFormMutationResponse = {
    readonly claimReallocateScopingSupplier: {
        readonly success: boolean;
        readonly messages: ReadonlyArray<string>;
        readonly result: {
            readonly reallocate: boolean;
            readonly scopingSupplier: {
                readonly companyName: string;
            } | null;
        } | null;
    } | null;
};
export type SupplierAllocateFormMutation = {
    readonly response: SupplierAllocateFormMutationResponse;
    readonly variables: SupplierAllocateFormMutationVariables;
};



/*
mutation SupplierAllocateFormMutation(
  $input: ReallocateScopingSupplierInput!
  $where: ENDataPortfolioKey!
) {
  claimReallocateScopingSupplier(where: $where, input: $input) {
    success
    messages
    result {
      reallocate
      scopingSupplier {
        companyName
      }
      id
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input",
    "type": "ReallocateScopingSupplierInput!"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "where",
    "type": "ENDataPortfolioKey!"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  },
  {
    "kind": "Variable",
    "name": "where",
    "variableName": "where"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "success",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "messages",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "reallocate",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "concreteType": "Company",
  "kind": "LinkedField",
  "name": "scopingSupplier",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "companyName",
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SupplierAllocateFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ClaimPortfolioPayload",
        "kind": "LinkedField",
        "name": "claimReallocateScopingSupplier",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "ClaimPortfolio",
            "kind": "LinkedField",
            "name": "result",
            "plural": false,
            "selections": [
              (v4/*: any*/),
              (v5/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SupplierAllocateFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ClaimPortfolioPayload",
        "kind": "LinkedField",
        "name": "claimReallocateScopingSupplier",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "ClaimPortfolio",
            "kind": "LinkedField",
            "name": "result",
            "plural": false,
            "selections": [
              (v4/*: any*/),
              (v5/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "SupplierAllocateFormMutation",
    "operationKind": "mutation",
    "text": "mutation SupplierAllocateFormMutation(\n  $input: ReallocateScopingSupplierInput!\n  $where: ENDataPortfolioKey!\n) {\n  claimReallocateScopingSupplier(where: $where, input: $input) {\n    success\n    messages\n    result {\n      reallocate\n      scopingSupplier {\n        companyName\n      }\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'a803de045834eee0fb59987d15a7d661';
export default node;
