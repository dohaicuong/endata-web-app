/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type JobNotesInitialCallMutationVariables = {
    claimId: string;
};
export type JobNotesInitialCallMutationResponse = {
    readonly claimInitialCall: {
        readonly success: boolean;
        readonly messages: ReadonlyArray<string>;
        readonly result: {
            readonly progress: {
                readonly initialCallMade: boolean;
            } | null;
        } | null;
    } | null;
};
export type JobNotesInitialCallMutation = {
    readonly response: JobNotesInitialCallMutationResponse;
    readonly variables: JobNotesInitialCallMutationVariables;
};



/*
mutation JobNotesInitialCallMutation(
  $claimId: ID!
) {
  claimInitialCall(where: {id: $claimId}) {
    success
    messages
    result {
      progress {
        initialCallMade
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
  }
],
v1 = [
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
  "concreteType": "ClaimProgress",
  "kind": "LinkedField",
  "name": "progress",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "initialCallMade",
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
    "name": "JobNotesInitialCallMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ClaimPortfolioPayload",
        "kind": "LinkedField",
        "name": "claimInitialCall",
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
              (v4/*: any*/)
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
    "name": "JobNotesInitialCallMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ClaimPortfolioPayload",
        "kind": "LinkedField",
        "name": "claimInitialCall",
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
    "name": "JobNotesInitialCallMutation",
    "operationKind": "mutation",
    "text": "mutation JobNotesInitialCallMutation(\n  $claimId: ID!\n) {\n  claimInitialCall(where: {id: $claimId}) {\n    success\n    messages\n    result {\n      progress {\n        initialCallMade\n      }\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '0ad02c64c3bb2206d41d3a65ec6fc573';
export default node;
