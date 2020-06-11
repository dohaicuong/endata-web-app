/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type ReportSaveReportMutationVariables = {
    claimId: string;
    data: unknown;
};
export type ReportSaveReportMutationResponse = {
    readonly claimReportUpsert: {
        readonly id: string;
    };
};
export type ReportSaveReportMutation = {
    readonly response: ReportSaveReportMutationResponse;
    readonly variables: ReportSaveReportMutationVariables;
};



/*
mutation ReportSaveReportMutation(
  $claimId: ID!
  $data: Json!
) {
  claimReportUpsert(claimId: $claimId, data: $data) {
    id
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
    "name": "data",
    "type": "Json!"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "claimId",
        "variableName": "claimId"
      },
      {
        "kind": "Variable",
        "name": "data",
        "variableName": "data"
      }
    ],
    "concreteType": "Report",
    "kind": "LinkedField",
    "name": "claimReportUpsert",
    "plural": false,
    "selections": [
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ReportSaveReportMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ReportSaveReportMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "ReportSaveReportMutation",
    "operationKind": "mutation",
    "text": "mutation ReportSaveReportMutation(\n  $claimId: ID!\n  $data: Json!\n) {\n  claimReportUpsert(claimId: $claimId, data: $data) {\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = 'b4b52fc3506ee280f6e2ac4e4e2a037c';
export default node;
