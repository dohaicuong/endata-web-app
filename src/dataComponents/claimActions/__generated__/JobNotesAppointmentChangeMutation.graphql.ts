/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type AppointmentInput = {
    appointmentDate: unknown;
    note?: string | null;
};
export type JobNotesAppointmentChangeMutationVariables = {
    claimId: string;
    input: AppointmentInput;
};
export type JobNotesAppointmentChangeMutationResponse = {
    readonly claimMakeAppointment: {
        readonly success: boolean;
        readonly messages: ReadonlyArray<string>;
        readonly result: {
            readonly progress: {
                readonly appointmentBooked: boolean;
            } | null;
            readonly claimStatus: {
                readonly statusId: number;
            } | null;
        } | null;
    } | null;
};
export type JobNotesAppointmentChangeMutation = {
    readonly response: JobNotesAppointmentChangeMutationResponse;
    readonly variables: JobNotesAppointmentChangeMutationVariables;
};



/*
mutation JobNotesAppointmentChangeMutation(
  $claimId: ID!
  $input: AppointmentInput!
) {
  claimMakeAppointment(where: {id: $claimId}, input: $input) {
    success
    messages
    result {
      progress {
        appointmentBooked
      }
      claimStatus {
        statusId
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
    "name": "input",
    "type": "AppointmentInput!"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  },
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
      "name": "appointmentBooked",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "statusId",
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
    "name": "JobNotesAppointmentChangeMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ClaimPortfolioPayload",
        "kind": "LinkedField",
        "name": "claimMakeAppointment",
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
                "concreteType": "ClaimStatus",
                "kind": "LinkedField",
                "name": "claimStatus",
                "plural": false,
                "selections": [
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
    "name": "JobNotesAppointmentChangeMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ClaimPortfolioPayload",
        "kind": "LinkedField",
        "name": "claimMakeAppointment",
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
                "concreteType": "ClaimStatus",
                "kind": "LinkedField",
                "name": "claimStatus",
                "plural": false,
                "selections": [
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
    "name": "JobNotesAppointmentChangeMutation",
    "operationKind": "mutation",
    "text": "mutation JobNotesAppointmentChangeMutation(\n  $claimId: ID!\n  $input: AppointmentInput!\n) {\n  claimMakeAppointment(where: {id: $claimId}, input: $input) {\n    success\n    messages\n    result {\n      progress {\n        appointmentBooked\n      }\n      claimStatus {\n        statusId\n        id\n      }\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '83e39ba964eb46d50fc77f4d80729a30';
export default node;
