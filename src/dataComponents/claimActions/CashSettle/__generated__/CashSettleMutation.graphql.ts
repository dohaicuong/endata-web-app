/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type LogLevel = "Critical" | "Debug" | "Error" | "Information" | "None" | "Trace" | "Warning" | "%future added value";
export type PortfolioType = "Building" | "Contents" | "Restoration" | "%future added value";
export type ClaimCashSettleInput = {
    claimId: string;
    settlementValue: unknown;
    paymentTypeId: number;
    paymentMethodId: number;
    bankName?: string | null;
    bsb?: string | null;
    account?: string | null;
    comments?: string | null;
    claimPortfolioType: PortfolioType;
    settlementDate: unknown;
};
export type CashSettleMutationVariables = {
    input: ClaimCashSettleInput;
};
export type CashSettleMutationResponse = {
    readonly claimCaseSettleCreate: {
        readonly success: boolean;
        readonly messages: ReadonlyArray<string>;
        readonly fieldErrors: ReadonlyArray<{
            readonly fieldName: string;
            readonly level: LogLevel | null;
            readonly message: string;
        } | null> | null;
    } | null;
};
export type CashSettleMutation = {
    readonly response: CashSettleMutationResponse;
    readonly variables: CashSettleMutationVariables;
};



/*
mutation CashSettleMutation(
  $input: ClaimCashSettleInput!
) {
  claimCaseSettleCreate(input: $input) {
    success
    messages
    fieldErrors {
      fieldName
      level
      message
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
    "type": "ClaimCashSettleInput!"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "GeneralPayload",
    "kind": "LinkedField",
    "name": "claimCaseSettleCreate",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "success",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "messages",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "EntityFieldError",
        "kind": "LinkedField",
        "name": "fieldErrors",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "fieldName",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "level",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "message",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CashSettleMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CashSettleMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "CashSettleMutation",
    "operationKind": "mutation",
    "text": "mutation CashSettleMutation(\n  $input: ClaimCashSettleInput!\n) {\n  claimCaseSettleCreate(input: $input) {\n    success\n    messages\n    fieldErrors {\n      fieldName\n      level\n      message\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '07218a33753d7869d7869219f86c6283';
export default node;
