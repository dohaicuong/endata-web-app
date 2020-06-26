/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type PortfolioType = "Building" | "Contents" | "Restoration" | "%future added value";
export type WaitForInfoCancelMutationVariables = {
    claimId: string;
    portfolio: PortfolioType;
};
export type WaitForInfoCancelMutationResponse = {
    readonly claimCancelAwaitingInfo: {
        readonly success: boolean;
        readonly messages: ReadonlyArray<string>;
        readonly result: {
            readonly claimStatus: {
                readonly statusId: number;
                readonly statusName: string | null;
            } | null;
        } | null;
    } | null;
};
export type WaitForInfoCancelMutation = {
    readonly response: WaitForInfoCancelMutationResponse;
    readonly variables: WaitForInfoCancelMutationVariables;
};



/*
mutation WaitForInfoCancelMutation(
  $claimId: ID!
  $portfolio: PortfolioType!
) {
  claimCancelAwaitingInfo(where: {id: $claimId, portfolioType: $portfolio}) {
    success
    messages
    result {
      claimStatus {
        statusId
        statusName
        id
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
    "name": "claimId",
    "type": "ID!"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "portfolio",
    "type": "PortfolioType!"
  }
],
v1 = [
  {
    "fields": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "claimId"
      },
      {
        "kind": "Variable",
        "name": "portfolioType",
        "variableName": "portfolio"
      }
    ],
    "kind": "ObjectValue",
    "name": "where"
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
  "name": "statusId",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "statusName",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "WaitForInfoCancelMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ClaimPortfolioPayload",
        "kind": "LinkedField",
        "name": "claimCancelAwaitingInfo",
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
              {
                "alias": null,
                "args": null,
                "concreteType": "ClaimStatus",
                "kind": "LinkedField",
                "name": "claimStatus",
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
        "storageKey": null
      }
    ],
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "WaitForInfoCancelMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ClaimPortfolioPayload",
        "kind": "LinkedField",
        "name": "claimCancelAwaitingInfo",
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
              {
                "alias": null,
                "args": null,
                "concreteType": "ClaimStatus",
                "kind": "LinkedField",
                "name": "claimStatus",
                "plural": false,
                "selections": [
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v6/*: any*/)
                ],
                "storageKey": null
              },
              (v6/*: any*/)
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
    "name": "WaitForInfoCancelMutation",
    "operationKind": "mutation",
    "text": "mutation WaitForInfoCancelMutation(\n  $claimId: ID!\n  $portfolio: PortfolioType!\n) {\n  claimCancelAwaitingInfo(where: {id: $claimId, portfolioType: $portfolio}) {\n    success\n    messages\n    result {\n      claimStatus {\n        statusId\n        statusName\n        id\n      }\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '5eff0e8d9670f862bd1cb3b4fafeda96';
export default node;
