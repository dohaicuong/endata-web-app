/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type PortfolioType = "Building" | "Contents" | "Restoration" | "%future added value";
export type AwaitingInfoClaimInputType = {
    note?: string | null;
    awaitingInfoReasonId: unknown;
};
export type ENDataPortfolioKey = {
    id: string;
    portfolioType: PortfolioType;
};
export type WaitForInfoFormMutationVariables = {
    input: AwaitingInfoClaimInputType;
    where: ENDataPortfolioKey;
};
export type WaitForInfoFormMutationResponse = {
    readonly claimAwaitingInfo: {
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
export type WaitForInfoFormMutation = {
    readonly response: WaitForInfoFormMutationResponse;
    readonly variables: WaitForInfoFormMutationVariables;
};



/*
mutation WaitForInfoFormMutation(
  $input: AwaitingInfoClaimInputType!
  $where: ENDataPortfolioKey!
) {
  claimAwaitingInfo(input: $input, where: $where) {
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
    "name": "input",
    "type": "AwaitingInfoClaimInputType!"
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
    "name": "WaitForInfoFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ClaimPortfolioPayload",
        "kind": "LinkedField",
        "name": "claimAwaitingInfo",
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
    "name": "WaitForInfoFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ClaimPortfolioPayload",
        "kind": "LinkedField",
        "name": "claimAwaitingInfo",
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
    "name": "WaitForInfoFormMutation",
    "operationKind": "mutation",
    "text": "mutation WaitForInfoFormMutation(\n  $input: AwaitingInfoClaimInputType!\n  $where: ENDataPortfolioKey!\n) {\n  claimAwaitingInfo(input: $input, where: $where) {\n    success\n    messages\n    result {\n      claimStatus {\n        statusId\n        statusName\n        id\n      }\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'e20d1b326872fa5e428675936f50005c';
export default node;
