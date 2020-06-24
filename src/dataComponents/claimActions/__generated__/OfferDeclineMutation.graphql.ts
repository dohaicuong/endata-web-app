/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type PortfolioType = "Building" | "Contents" | "Restoration" | "%future added value";
export type OfferDeclineMutationVariables = {
    id: string;
    portfolio: PortfolioType;
};
export type OfferDeclineMutationResponse = {
    readonly claimDeclineRequest: {
        readonly messages: ReadonlyArray<string>;
        readonly success: boolean;
    } | null;
};
export type OfferDeclineMutation = {
    readonly response: OfferDeclineMutationResponse;
    readonly variables: OfferDeclineMutationVariables;
};



/*
mutation OfferDeclineMutation(
  $id: ID!
  $portfolio: PortfolioType!
) {
  claimDeclineRequest(where: {id: $id, portfolioType: $portfolio}) {
    messages
    success
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
    "concreteType": "ClaimPortfolioPayload",
    "kind": "LinkedField",
    "name": "claimDeclineRequest",
    "plural": false,
    "selections": [
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
        "kind": "ScalarField",
        "name": "success",
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
    "name": "OfferDeclineMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "OfferDeclineMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "OfferDeclineMutation",
    "operationKind": "mutation",
    "text": "mutation OfferDeclineMutation(\n  $id: ID!\n  $portfolio: PortfolioType!\n) {\n  claimDeclineRequest(where: {id: $id, portfolioType: $portfolio}) {\n    messages\n    success\n  }\n}\n"
  }
};
})();
(node as any).hash = 'c1cc70a87ce2d2634ad13fe6e0eedb75';
export default node;
