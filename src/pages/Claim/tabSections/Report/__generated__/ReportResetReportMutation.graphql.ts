/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type ReportResetReportMutationVariables = {
    claimId: string;
};
export type ReportResetReportMutationResponse = {
    readonly claimReportReset: {
        readonly id: string;
    };
};
export type ReportResetReportMutation = {
    readonly response: ReportResetReportMutationResponse;
    readonly variables: ReportResetReportMutationVariables;
};



/*
mutation ReportResetReportMutation(
  $claimId: ID!
) {
  claimReportReset(claimId: $claimId) {
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
    "name": "claimReportReset",
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
    "name": "ReportResetReportMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ReportResetReportMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "ReportResetReportMutation",
    "operationKind": "mutation",
    "text": "mutation ReportResetReportMutation(\n  $claimId: ID!\n) {\n  claimReportReset(claimId: $claimId) {\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '871424cc3f34af2fe286ca980ec043ba';
export default node;
