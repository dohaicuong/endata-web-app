/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type AccessRole = "Adjustor" | "Administrator" | "Builder" | "ContentSupplier" | "Estimator" | "Insurance" | "InternalAB" | "LossAdjuster" | "Restorer" | "Specialist" | "SystemAdmin" | "UNDEFINED" | "%future added value";
export type ClaimCommunicationCreate = {
    claimId: string;
    message: string;
    receiverCompanyId: number;
    private: boolean;
    receiverRole: AccessRole;
};
export type CommunicationReplyMutationVariables = {
    input: ClaimCommunicationCreate;
};
export type CommunicationReplyMutationResponse = {
    readonly createClaimCommunication: {
        readonly success: boolean;
        readonly messages: ReadonlyArray<string>;
    } | null;
};
export type CommunicationReplyMutation = {
    readonly response: CommunicationReplyMutationResponse;
    readonly variables: CommunicationReplyMutationVariables;
};



/*
mutation CommunicationReplyMutation(
  $input: ClaimCommunicationCreate!
) {
  createClaimCommunication(input: $input) {
    success
    messages
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input",
    "type": "ClaimCommunicationCreate!"
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
    "concreteType": "ClaimCommunicationPayload",
    "kind": "LinkedField",
    "name": "createClaimCommunication",
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
    "name": "CommunicationReplyMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CommunicationReplyMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "CommunicationReplyMutation",
    "operationKind": "mutation",
    "text": "mutation CommunicationReplyMutation(\n  $input: ClaimCommunicationCreate!\n) {\n  createClaimCommunication(input: $input) {\n    success\n    messages\n  }\n}\n"
  }
};
})();
(node as any).hash = '4bc19769c014e3d4fe7076e6c3059cf0';
export default node;
