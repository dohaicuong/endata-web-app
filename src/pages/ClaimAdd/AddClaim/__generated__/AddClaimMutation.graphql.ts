/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type ClaimCategory = "NonUrgent" | "SemiUrgent" | "Urgent" | "%future added value";
export type LogLevel = "Critical" | "Debug" | "Error" | "Information" | "None" | "Trace" | "Warning" | "%future added value";
export type PortfolioType = "Building" | "Contents" | "Restoration" | "%future added value";
export type State = "ACT" | "NSW" | "NT" | "QLD" | "SA" | "TAS" | "VIC" | "WA" | "%future added value";
export type ClaimJobCreate = {
    refNumber: string;
    contentsRefNum?: string | null;
    claimDescription: string;
    insurerId: string;
    mapRef?: string | null;
    lotNumber?: string | null;
    planNumber?: string | null;
    casemanagerId: string;
    brcId?: string | null;
    homeAssessorId?: string | null;
    visitTypeID?: string | null;
    externalLossAdjusterId?: string | null;
    multipleRisks?: boolean | null;
    riskname?: string | null;
    additionalRefNumber?: string | null;
    associatedRiskJobId?: number | null;
    requireCustomLogin?: boolean | null;
    customLoginEmail?: string | null;
    policyCoverId?: string | null;
    policyTypeId?: string | null;
    incidentDetail: IncidentDetailNewType;
    insured: ContactDetailInput;
    tenantDetails?: ContactInput | null;
    portfolios?: Array<ClaimPortfolioCreate | null> | null;
};
export type IncidentDetailNewType = {
    eventTypeId: string;
    catCodeId: string;
    habitableProperty?: boolean | null;
    asbestos?: boolean | null;
    hold?: boolean | null;
    makeSafeRequired: boolean;
    incidentDate: unknown;
    riskAddress: AddressInput;
    category?: ClaimCategory | null;
};
export type AddressInput = {
    line1?: string | null;
    line2?: string | null;
    suburb?: string | null;
    postcode?: string | null;
    state?: State | null;
};
export type ContactDetailInput = {
    name?: string | null;
    phone1?: string | null;
    phone2?: string | null;
    phone3?: string | null;
    salutation?: string | null;
    email?: string | null;
    fax?: string | null;
    postalAddress?: AddressInput | null;
};
export type ContactInput = {
    name?: string | null;
    phone1?: string | null;
    phone2?: string | null;
    phone3?: string | null;
};
export type ClaimPortfolioCreate = {
    portfolioType: PortfolioType;
    toProvideSiteReport: boolean;
    sumInsured: number;
    excessValue: number;
    toCollectExcess: boolean;
    scopingSupplierId: string;
    quotingSupplierIds?: Array<string> | null;
};
export type AddClaimMutationVariables = {
    input: ClaimJobCreate;
};
export type AddClaimMutationResponse = {
    readonly createClaimJob: {
        readonly success: boolean;
        readonly messages: ReadonlyArray<string>;
        readonly fieldErrors: ReadonlyArray<{
            readonly fieldName: string;
            readonly level: LogLevel | null;
            readonly message: string;
        } | null> | null;
        readonly result: {
            readonly id: string;
            readonly claimId: number;
        } | null;
    } | null;
};
export type AddClaimMutation = {
    readonly response: AddClaimMutationResponse;
    readonly variables: AddClaimMutationVariables;
};



/*
mutation AddClaimMutation(
  $input: ClaimJobCreate!
) {
  createClaimJob(input: $input) {
    success
    messages
    fieldErrors {
      fieldName
      level
      message
    }
    result {
      id
      claimId
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
    "type": "ClaimJobCreate!"
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
      }
    ],
    "concreteType": "ClaimJobPayload",
    "kind": "LinkedField",
    "name": "createClaimJob",
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
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "ClaimJob",
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
            "name": "claimId",
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
    "name": "AddClaimMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AddClaimMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "AddClaimMutation",
    "operationKind": "mutation",
    "text": "mutation AddClaimMutation(\n  $input: ClaimJobCreate!\n) {\n  createClaimJob(input: $input) {\n    success\n    messages\n    fieldErrors {\n      fieldName\n      level\n      message\n    }\n    result {\n      id\n      claimId\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '3c45a1622b3183ca339fd5ab9c4d418c';
export default node;
