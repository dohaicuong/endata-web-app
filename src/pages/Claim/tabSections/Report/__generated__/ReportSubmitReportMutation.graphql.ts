/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type ReportSubmitReportMutationVariables = {
    claimId: string;
};
export type ReportSubmitReportMutationResponse = {
    readonly claimReportSubmit: {
        readonly id: string;
    };
};
export type ReportSubmitReportMutation = {
    readonly response: ReportSubmitReportMutationResponse;
    readonly variables: ReportSubmitReportMutationVariables;
};



/*
mutation ReportSubmitReportMutation(
  $claimId: ID!
) {
  claimReportSubmit(claimId: $claimId) {
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
      }
    ],
    "concreteType": "Report",
    "kind": "LinkedField",
    "name": "claimReportSubmit",
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
    "name": "ReportSubmitReportMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ReportSubmitReportMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "ReportSubmitReportMutation",
    "operationKind": "mutation",
    "text": "mutation ReportSubmitReportMutation(\n  $claimId: ID!\n) {\n  claimReportSubmit(claimId: $claimId) {\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = 'f678bde43f7e0476e942110ba4a6073e';
export default node;
