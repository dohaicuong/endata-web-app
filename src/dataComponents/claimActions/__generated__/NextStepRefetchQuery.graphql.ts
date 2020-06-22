/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type NextStepRefetchQueryVariables = {
    isOpen?: boolean | null;
    claimId: string;
};
export type NextStepRefetchQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"NextStep_data">;
};
export type NextStepRefetchQuery = {
    readonly response: NextStepRefetchQueryResponse;
    readonly variables: NextStepRefetchQueryVariables;
};



/*
query NextStepRefetchQuery(
  $isOpen: Boolean = false
  $claimId: ID!
) {
  ...NextStep_data_2ChpTy
}

fragment NextStep_data_2ChpTy on Query {
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
    "name": "NextStepRefetchQuery",
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
        "name": "NextStep_data"
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "NextStepRefetchQuery",
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
      "derivedFrom": "NextStep_data",
      "isRefetchableQuery": true
    },
    "name": "NextStepRefetchQuery",
    "operationKind": "query",
    "text": "query NextStepRefetchQuery(\n  $isOpen: Boolean = false\n  $claimId: ID!\n) {\n  ...NextStep_data_2ChpTy\n}\n\nfragment NextStep_data_2ChpTy on Query {\n  claimNextStep(where: {id: $claimId}) @include(if: $isOpen) {\n    statusName\n    description\n    nextStep\n    portfolioType\n  }\n}\n"
  }
};
})();
(node as any).hash = 'ca9f20b4df4c2b9a413d2a52c7a7b4d5';
export default node;
