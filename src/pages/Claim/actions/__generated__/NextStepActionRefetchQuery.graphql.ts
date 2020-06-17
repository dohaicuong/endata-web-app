/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type NextStepActionRefetchQueryVariables = {
    isOpen?: boolean | null;
    claimId: string;
};
export type NextStepActionRefetchQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"NextStepAction_data">;
};
export type NextStepActionRefetchQuery = {
    readonly response: NextStepActionRefetchQueryResponse;
    readonly variables: NextStepActionRefetchQueryVariables;
};



/*
query NextStepActionRefetchQuery(
  $isOpen: Boolean = false
  $claimId: ID!
) {
  ...NextStepAction_data_2ChpTy
}

fragment NextStepAction_data_2ChpTy on Query {
  claimNextStep(where: {id: $claimId}) @include(if: $isOpen) {
    statusName
    description
    nextStep
    portfolioType
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": false,
    "kind": "LocalArgument",
    "name": "isOpen",
    "type": "Boolean"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "claimId",
    "type": "ID!"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "NextStepActionRefetchQuery",
    "selections": [
      {
        "args": [
          {
            "kind": "Variable",
            "name": "claimId",
            "variableName": "claimId"
          },
          {
            "kind": "Variable",
            "name": "isOpen",
            "variableName": "isOpen"
          }
        ],
        "kind": "FragmentSpread",
        "name": "NextStepAction_data"
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "NextStepActionRefetchQuery",
    "selections": [
      {
        "condition": "isOpen",
        "kind": "Condition",
        "passingValue": true,
        "selections": [
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
            "concreteType": "ClaimJobStatusInfo",
            "kind": "LinkedField",
            "name": "claimNextStep",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "statusName",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "description",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "nextStep",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "portfolioType",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {
      "derivedFrom": "NextStepAction_data",
      "isRefetchableQuery": true
    },
    "name": "NextStepActionRefetchQuery",
    "operationKind": "query",
    "text": "query NextStepActionRefetchQuery(\n  $isOpen: Boolean = false\n  $claimId: ID!\n) {\n  ...NextStepAction_data_2ChpTy\n}\n\nfragment NextStepAction_data_2ChpTy on Query {\n  claimNextStep(where: {id: $claimId}) @include(if: $isOpen) {\n    statusName\n    description\n    nextStep\n    portfolioType\n  }\n}\n"
  }
};
})();
(node as any).hash = 'e4253cc711330b480ebed36c34e3001f';
export default node;
