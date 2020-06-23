/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type ClaimCategory = "NonUrgent" | "SemiUrgent" | "Urgent" | "%future added value";
export type LogLevel = "Critical" | "Debug" | "Error" | "Information" | "None" | "Trace" | "Warning" | "%future added value";
export type PortfolioType = "Building" | "Contents" | "Restoration" | "%future added value";
export type State = "ACT" | "NSW" | "NT" | "QLD" | "SA" | "TAS" | "VIC" | "WA" | "%future added value";
export type ClaimJobInput = {
    refNumber?: string | null;
    contentsRefNum?: string | null;
    additionalRefNumber?: string | null;
    claimDescription?: string | null;
    policyCoverId?: string | null;
    policyTypeId?: string | null;
    mapRef?: string | null;
    lotNumber?: string | null;
    planNumber?: string | null;
    eventTypeId?: string | null;
    catCodeId?: string | null;
    incidentDate?: unknown | null;
    habitableProperty?: boolean | null;
    asbestos?: boolean | null;
    hold?: boolean | null;
    makeSafeRequired?: boolean | null;
    casemanagerId?: string | null;
    brcId?: string | null;
    homeAssessorId?: string | null;
    visitTypeId?: string | null;
    externalLossAdjusterId?: string | null;
    managedByENData?: boolean | null;
    riskname?: string | null;
    multipleRisks?: boolean | null;
    associatedRiskJobId?: number | null;
    requireCustomLogin?: boolean | null;
    customLoginEmail?: string | null;
    insuredSalutation?: unknown | null;
    insuredName?: unknown | null;
    insuredPhone1?: unknown | null;
    insuredPhone2?: unknown | null;
    insuredPhone3?: unknown | null;
    insuredFax?: unknown | null;
    insuredEmail?: unknown | null;
    postalAddressLine1?: string | null;
    postalAddressLine2?: string | null;
    postalAddressSuburb?: string | null;
    postalAddressState?: State | null;
    postalAddressPostcode?: string | null;
    riskAddressLine1?: string | null;
    riskAddressLine2?: string | null;
    riskAddressSuburb?: string | null;
    riskAddressState?: State | null;
    riskAddressPostcode?: string | null;
    tenantName?: unknown | null;
    tenantPhone1?: unknown | null;
    tenantPhone2?: unknown | null;
    tenantPhone3?: unknown | null;
    category?: ClaimCategory | null;
    portfolios?: Array<ClaimPortfolioInput | null> | null;
};
export type ClaimPortfolioInput = {
    portfolioType: PortfolioType;
    policyCoverId?: string | null;
    policyTypeId?: string | null;
    description?: string | null;
    sumInsured?: number | null;
    excessValue?: number | null;
    toCollectExcess?: boolean | null;
    quotingSupplierIds?: Array<string> | null;
};
export type JobInfoMutationVariables = {
    input: ClaimJobInput;
    claimId: string;
};
export type JobInfoMutationResponse = {
    readonly updateClaimJob: {
        readonly success: boolean;
        readonly messages: ReadonlyArray<string>;
        readonly fieldErrors: ReadonlyArray<{
            readonly fieldName: string;
            readonly level: LogLevel | null;
            readonly message: string;
        } | null> | null;
    } | null;
};
export type JobInfoMutation = {
    readonly response: JobInfoMutationResponse;
    readonly variables: JobInfoMutationVariables;
};



/*
mutation JobInfoMutation(
  $input: ClaimJobInput!
  $claimId: ID!
) {
  updateClaimJob(input: $input, where: {id: $claimId}) {
    success
    messages
    fieldErrors {
      fieldName
      level
      message
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input",
    "type": "ClaimJobInput!"
  },
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
    "concreteType": "ClaimJobPayload",
    "kind": "LinkedField",
    "name": "updateClaimJob",
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
        "concreteType": "EntityFieldError",
        "kind": "LinkedField",
        "name": "fieldErrors",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "fieldName",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "level",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "message",
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
    "name": "JobInfoMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "JobInfoMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "JobInfoMutation",
    "operationKind": "mutation",
    "text": "mutation JobInfoMutation(\n  $input: ClaimJobInput!\n  $claimId: ID!\n) {\n  updateClaimJob(input: $input, where: {id: $claimId}) {\n    success\n    messages\n    fieldErrors {\n      fieldName\n      level\n      message\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '4d2f4cf579100e507fe7d9f7534fbcdc';
export default node;
