/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type PortfolioType = "Building" | "Contents" | "Restoration" | "%future added value";
export type CommunicationAcknowledgeMutationVariables = {
    id: string;
    portfolio: PortfolioType;
};
export type CommunicationAcknowledgeMutationResponse = {
    readonly claimCommunicationAcknoledge: {
        readonly success: boolean;
        readonly messages: ReadonlyArray<string>;
        readonly result: {
            readonly id: string;
            readonly acknowledged: boolean;
        } | null;
    } | null;
};
export type CommunicationAcknowledgeMutation = {
    readonly response: CommunicationAcknowledgeMutationResponse;
    readonly variables: CommunicationAcknowledgeMutationVariables;
};



/*
mutation CommunicationAcknowledgeMutation(
  $id: ID!
  $portfolio: PortfolioType!
) {
  claimCommunicationAcknoledge(where: {id: $id, portfolioType: $portfolio}) {
    success
    messages
    result {
      id
      acknowledged
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id",
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
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "id"
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
    "concreteType": "ClaimCommunicationPayload",
    "kind": "LinkedField",
    "name": "claimCommunicationAcknoledge",
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
        "concreteType": "ClaimCommunication",
        "kind": "LinkedField",
        "name": "result",
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
            "name": "acknowledged",
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
    "name": "CommunicationAcknowledgeMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CommunicationAcknowledgeMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "CommunicationAcknowledgeMutation",
    "operationKind": "mutation",
    "text": "mutation CommunicationAcknowledgeMutation(\n  $id: ID!\n  $portfolio: PortfolioType!\n) {\n  claimCommunicationAcknoledge(where: {id: $id, portfolioType: $portfolio}) {\n    success\n    messages\n    result {\n      id\n      acknowledged\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '049f65b0be4d3dbc32d6008edc31b2a7';
export default node;
