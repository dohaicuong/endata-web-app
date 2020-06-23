/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type PortfolioType = "Building" | "Contents" | "Restoration" | "%future added value";
export type ENDataPortfolioKey = {
    id: string;
    portfolioType: PortfolioType;
};
export type FinaliseClaimInput = {
    finaliseReasonId: number;
    settlementValue?: number | null;
    noPanelSupplier?: string | null;
    dateCompleted?: unknown | null;
};
export type ClaimFinaliseFormMutationVariables = {
    where: ENDataPortfolioKey;
    input: FinaliseClaimInput;
};
export type ClaimFinaliseFormMutationResponse = {
    readonly claimFinalise: {
        readonly success: boolean;
        readonly messages: ReadonlyArray<string>;
        readonly result: {
            readonly claimStatus: {
                readonly statusId: number;
                readonly statusName: string | null;
            } | null;
            readonly finaliseReason: {
                readonly name: string;
            } | null;
            readonly dateCompleted: string | null;
        } | null;
    } | null;
};
export type ClaimFinaliseFormMutation = {
    readonly response: ClaimFinaliseFormMutationResponse;
    readonly variables: ClaimFinaliseFormMutationVariables;
};



/*
mutation ClaimFinaliseFormMutation(
  $where: ENDataPortfolioKey!
  $input: FinaliseClaimInput!
) {
  claimFinalise(input: $input, where: $where) {
    success
    messages
    result {
      claimStatus {
        statusId
        statusName
        id
      }
      finaliseReason {
        name
        id
      }
      dateCompleted
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
    "name": "where",
    "type": "ENDataPortfolioKey!"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input",
    "type": "FinaliseClaimInput!"
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
  "name": "name",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "dateCompleted",
  "storageKey": null
},
v8 = {
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
    "name": "ClaimFinaliseFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ClaimPortfolioPayload",
        "kind": "LinkedField",
        "name": "claimFinalise",
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
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "ClaimFinaliseReason",
                "kind": "LinkedField",
                "name": "finaliseReason",
                "plural": false,
                "selections": [
                  (v6/*: any*/)
                ],
                "storageKey": null
              },
              (v7/*: any*/)
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
    "name": "ClaimFinaliseFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ClaimPortfolioPayload",
        "kind": "LinkedField",
        "name": "claimFinalise",
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
                  (v8/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "ClaimFinaliseReason",
                "kind": "LinkedField",
                "name": "finaliseReason",
                "plural": false,
                "selections": [
                  (v6/*: any*/),
                  (v8/*: any*/)
                ],
                "storageKey": null
              },
              (v7/*: any*/),
              (v8/*: any*/)
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
    "name": "ClaimFinaliseFormMutation",
    "operationKind": "mutation",
    "text": "mutation ClaimFinaliseFormMutation(\n  $where: ENDataPortfolioKey!\n  $input: FinaliseClaimInput!\n) {\n  claimFinalise(input: $input, where: $where) {\n    success\n    messages\n    result {\n      claimStatus {\n        statusId\n        statusName\n        id\n      }\n      finaliseReason {\n        name\n        id\n      }\n      dateCompleted\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '7c41e0e626251ce26361eff11324f332';
export default node;
