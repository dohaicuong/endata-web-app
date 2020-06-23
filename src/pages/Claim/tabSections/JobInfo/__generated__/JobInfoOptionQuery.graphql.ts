/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type JobInfoOptionQueryVariables = {
    companyId?: Array<string> | null;
    postcode?: string | null;
    claimId: string;
};
export type JobInfoOptionQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"JobInfoActions_data" | "JobInfoCustomerInfo_data" | "JobInfoClaimDetails_optionData" | "JobInfoQuotingBuilders_options" | "JobInfoQuotingRestorers_options">;
};
export type JobInfoOptionQuery = {
    readonly response: JobInfoOptionQueryResponse;
    readonly variables: JobInfoOptionQueryVariables;
};



/*
query JobInfoOptionQuery(
  $companyId: [ID!]
  $postcode: String
  $claimId: ID!
) {
  ...JobInfoCustomerInfo_data
  ...JobInfoClaimDetails_optionData
  ...JobInfoQuotingBuilders_options_1u8e06
  ...JobInfoQuotingRestorers_options_1u8e06
}

fragment CaseManagerComboBox_data_3znApl on Query {
  managers: claimFilterOptions(where: {subject: "managers", insurers: $companyId}) {
    label: name
    value
    id
  }
}

fragment CashSettle_data on Query {
  ...PaymentTypeSelect_data_15qNS2
  ...PaymentMethodSelect_data_15qNS2
}

fragment CatCodeComboBox_data_3znApl on Query {
  catCodes: claimFilterOptions(where: {subject: "catCodes", insurers: $companyId}) {
    label: name
    value
    id
  }
}

fragment ClaimFinaliseForm_data on Query {
  ...FinaliseReasonComboBox_data
}

fragment ClaimFinalise_data on Query {
  ...ClaimFinaliseForm_data
}

fragment DistributorComboBox_data_3znApl on Query {
  distributors: claimFilterOptions(where: {subject: "policyTypes", insurers: $companyId}) {
    label: name
    value
    id
  }
}

fragment EventTypeComboBox_data_3znApl on Query {
  eventTypes: claimFilterOptions(where: {subject: "eventTypes", insurers: $companyId}) {
    label: name
    value
    id
  }
}

fragment ExternalLossAdjusterComboBox_data_3znApl on Query {
  adjusters: claimFilterOptions(where: {subject: "adjusters", insurers: $companyId}) {
    label: name
    value
    id
  }
}

fragment FinaliseReasonComboBox_data on Query {
  reasons: claimFilterOptions(where: {subject: "finalisedReasons"}) {
    label: name
    value
    id
  }
}

fragment JobInfoClaimDetailsRow1_optionData on Query {
  ...CaseManagerComboBox_data_3znApl
  ...ExternalLossAdjusterComboBox_data_3znApl
}

fragment JobInfoClaimDetailsRow2_meta on Query {
  currentUser {
    userType
    id
  }
}

fragment JobInfoClaimDetailsRow4_optionData on Query {
  ...EventTypeComboBox_data_3znApl
  ...CatCodeComboBox_data_3znApl
}

fragment JobInfoClaimDetailsRow5_optionData on Query {
  ...DistributorComboBox_data_3znApl
  ...PdsReferenceComboBox_data_3znApl
}

fragment JobInfoClaimDetailsRow6_optionData on Query {
  ...SpecialistReviewComboBoxProps_data_3znApl
  ...CaseManagerComboBox_data_3znApl
  currentUser {
    userType
    id
  }
}

fragment JobInfoClaimDetails_optionData on Query {
  ...JobInfoClaimDetailsRow1_optionData
  ...JobInfoClaimDetailsRow2_meta
  ...JobInfoClaimDetailsRow4_optionData
  ...JobInfoClaimDetailsRow5_optionData
  ...JobInfoClaimDetailsRow6_optionData
}

fragment JobInfoCustomerInfoRow4_data on Query {
  ...ClaimFinalise_data
  ...CashSettle_data
}

fragment JobInfoCustomerInfo_data on Query {
  ...JobInfoCustomerInfoRow4_data
}

fragment JobInfoQuotingBuilders_options_1u8e06 on Query {
  quotingBuilders: claimFilterOptions(where: {subject: "suppliers", insurers: $companyId, postcode: $postcode, portfolios: [Building]}) {
    label: name
    value
    id
  }
}

fragment JobInfoQuotingRestorers_options_1u8e06 on Query {
  quotingRestorers: claimFilterOptions(where: {subject: "suppliers", insurers: $companyId, postcode: $postcode, portfolios: [Restoration]}) {
    label: name
    value
    id
  }
}

fragment PaymentMethodSelect_data_15qNS2 on Query {
  paymentMethods(where: {claimId: $claimId}) {
    label: name
    value: paymentMethodId
    id
  }
}

fragment PaymentTypeSelect_data_15qNS2 on Query {
  options: paymentTypes(where: {claimId: $claimId, claimPortfolioType: Building}) {
    label: name
    value: paymentTypeId
    id
  }
}

fragment PdsReferenceComboBox_data_3znApl on Query {
  pdsReferences: claimFilterOptions(where: {subject: "policyCovers", insurers: $companyId}) {
    label: name
    value
    id
  }
}

fragment SpecialistReviewComboBoxProps_data_3znApl on Query {
  internalAssessors: claimFilterOptions(where: {subject: "internalAssessors", insurers: $companyId}) {
    label: name
    value
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "companyId",
    "type": "[ID!]"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "postcode",
    "type": "String"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "claimId",
    "type": "ID!"
  }
],
v1 = {
  "kind": "Variable",
  "name": "postcode",
  "variableName": "postcode"
},
v2 = [
  {
    "kind": "Variable",
    "name": "companyIds",
    "variableName": "companyId"
  },
  (v1/*: any*/)
],
v3 = {
  "alias": "label",
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = [
  (v3/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "value",
    "storageKey": null
  },
  (v4/*: any*/)
],
v6 = {
  "kind": "Variable",
  "name": "claimId",
  "variableName": "claimId"
},
v7 = {
  "kind": "Variable",
  "name": "insurers",
  "variableName": "companyId"
},
v8 = {
  "kind": "Literal",
  "name": "subject",
  "value": "suppliers"
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "JobInfoOptionQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "JobInfoActions_data"
      },
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "JobInfoCustomerInfo_data"
      },
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "JobInfoClaimDetails_optionData"
      },
      {
        "args": (v2/*: any*/),
        "kind": "FragmentSpread",
        "name": "JobInfoQuotingBuilders_options"
      },
      {
        "args": (v2/*: any*/),
        "kind": "FragmentSpread",
        "name": "JobInfoQuotingRestorers_options"
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "JobInfoOptionQuery",
    "selections": [
      {
        "alias": "reasons",
        "args": [
          {
            "kind": "Literal",
            "name": "where",
            "value": {
              "subject": "finalisedReasons"
            }
          }
        ],
        "concreteType": "FilterOption",
        "kind": "LinkedField",
        "name": "claimFilterOptions",
        "plural": true,
        "selections": (v5/*: any*/),
        "storageKey": "claimFilterOptions(where:{\"subject\":\"finalisedReasons\"})"
      },
      {
        "alias": "options",
        "args": [
          {
            "fields": [
              (v6/*: any*/),
              {
                "kind": "Literal",
                "name": "claimPortfolioType",
                "value": "Building"
              }
            ],
            "kind": "ObjectValue",
            "name": "where"
          }
        ],
        "concreteType": "PaymentType",
        "kind": "LinkedField",
        "name": "paymentTypes",
        "plural": true,
        "selections": [
          (v3/*: any*/),
          {
            "alias": "value",
            "args": null,
            "kind": "ScalarField",
            "name": "paymentTypeId",
            "storageKey": null
          },
          (v4/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": [
          {
            "fields": [
              (v6/*: any*/)
            ],
            "kind": "ObjectValue",
            "name": "where"
          }
        ],
        "concreteType": "PaymentMethod",
        "kind": "LinkedField",
        "name": "paymentMethods",
        "plural": true,
        "selections": [
          (v3/*: any*/),
          {
            "alias": "value",
            "args": null,
            "kind": "ScalarField",
            "name": "paymentMethodId",
            "storageKey": null
          },
          (v4/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": "managers",
        "args": [
          {
            "fields": [
              (v7/*: any*/),
              {
                "kind": "Literal",
                "name": "subject",
                "value": "managers"
              }
            ],
            "kind": "ObjectValue",
            "name": "where"
          }
        ],
        "concreteType": "FilterOption",
        "kind": "LinkedField",
        "name": "claimFilterOptions",
        "plural": true,
        "selections": (v5/*: any*/),
        "storageKey": null
      },
      {
        "alias": "adjusters",
        "args": [
          {
            "fields": [
              (v7/*: any*/),
              {
                "kind": "Literal",
                "name": "postcode",
                "value": null
              },
              {
                "kind": "Literal",
                "name": "subject",
                "value": "adjusters"
              }
            ],
            "kind": "ObjectValue",
            "name": "where"
          }
        ],
        "concreteType": "FilterOption",
        "kind": "LinkedField",
        "name": "claimFilterOptions",
        "plural": true,
        "selections": (v5/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "AuthenticatedUser",
        "kind": "LinkedField",
        "name": "currentUser",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "userType",
            "storageKey": null
          },
          (v4/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": "eventTypes",
        "args": [
          {
            "fields": [
              (v7/*: any*/),
              {
                "kind": "Literal",
                "name": "subject",
                "value": "eventTypes"
              }
            ],
            "kind": "ObjectValue",
            "name": "where"
          }
        ],
        "concreteType": "FilterOption",
        "kind": "LinkedField",
        "name": "claimFilterOptions",
        "plural": true,
        "selections": (v5/*: any*/),
        "storageKey": null
      },
      {
        "alias": "catCodes",
        "args": [
          {
            "fields": [
              (v7/*: any*/),
              {
                "kind": "Literal",
                "name": "subject",
                "value": "catCodes"
              }
            ],
            "kind": "ObjectValue",
            "name": "where"
          }
        ],
        "concreteType": "FilterOption",
        "kind": "LinkedField",
        "name": "claimFilterOptions",
        "plural": true,
        "selections": (v5/*: any*/),
        "storageKey": null
      },
      {
        "alias": "distributors",
        "args": [
          {
            "fields": [
              (v7/*: any*/),
              {
                "kind": "Literal",
                "name": "subject",
                "value": "policyTypes"
              }
            ],
            "kind": "ObjectValue",
            "name": "where"
          }
        ],
        "concreteType": "FilterOption",
        "kind": "LinkedField",
        "name": "claimFilterOptions",
        "plural": true,
        "selections": (v5/*: any*/),
        "storageKey": null
      },
      {
        "alias": "pdsReferences",
        "args": [
          {
            "fields": [
              (v7/*: any*/),
              {
                "kind": "Literal",
                "name": "subject",
                "value": "policyCovers"
              }
            ],
            "kind": "ObjectValue",
            "name": "where"
          }
        ],
        "concreteType": "FilterOption",
        "kind": "LinkedField",
        "name": "claimFilterOptions",
        "plural": true,
        "selections": (v5/*: any*/),
        "storageKey": null
      },
      {
        "alias": "internalAssessors",
        "args": [
          {
            "fields": [
              (v7/*: any*/),
              {
                "kind": "Literal",
                "name": "subject",
                "value": "internalAssessors"
              }
            ],
            "kind": "ObjectValue",
            "name": "where"
          }
        ],
        "concreteType": "FilterOption",
        "kind": "LinkedField",
        "name": "claimFilterOptions",
        "plural": true,
        "selections": (v5/*: any*/),
        "storageKey": null
      },
      {
        "alias": "quotingBuilders",
        "args": [
          {
            "fields": [
              (v7/*: any*/),
              {
                "kind": "Literal",
                "name": "portfolios",
                "value": [
                  "Building"
                ]
              },
              (v1/*: any*/),
              (v8/*: any*/)
            ],
            "kind": "ObjectValue",
            "name": "where"
          }
        ],
        "concreteType": "FilterOption",
        "kind": "LinkedField",
        "name": "claimFilterOptions",
        "plural": true,
        "selections": (v5/*: any*/),
        "storageKey": null
      },
      {
        "alias": "quotingRestorers",
        "args": [
          {
            "fields": [
              (v7/*: any*/),
              {
                "kind": "Literal",
                "name": "portfolios",
                "value": [
                  "Restoration"
                ]
              },
              (v1/*: any*/),
              (v8/*: any*/)
            ],
            "kind": "ObjectValue",
            "name": "where"
          }
        ],
        "concreteType": "FilterOption",
        "kind": "LinkedField",
        "name": "claimFilterOptions",
        "plural": true,
        "selections": (v5/*: any*/),
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "JobInfoOptionQuery",
    "operationKind": "query",
    "text": "query JobInfoOptionQuery(\n  $companyId: [ID!]\n  $postcode: String\n  $claimId: ID!\n) {\n  ...JobInfoCustomerInfo_data\n  ...JobInfoClaimDetails_optionData\n  ...JobInfoQuotingBuilders_options_1u8e06\n  ...JobInfoQuotingRestorers_options_1u8e06\n}\n\nfragment CaseManagerComboBox_data_3znApl on Query {\n  managers: claimFilterOptions(where: {subject: \"managers\", insurers: $companyId}) {\n    label: name\n    value\n    id\n  }\n}\n\nfragment CashSettle_data on Query {\n  ...PaymentTypeSelect_data_15qNS2\n  ...PaymentMethodSelect_data_15qNS2\n}\n\nfragment CatCodeComboBox_data_3znApl on Query {\n  catCodes: claimFilterOptions(where: {subject: \"catCodes\", insurers: $companyId}) {\n    label: name\n    value\n    id\n  }\n}\n\nfragment ClaimFinaliseForm_data on Query {\n  ...FinaliseReasonComboBox_data\n}\n\nfragment ClaimFinalise_data on Query {\n  ...ClaimFinaliseForm_data\n}\n\nfragment DistributorComboBox_data_3znApl on Query {\n  distributors: claimFilterOptions(where: {subject: \"policyTypes\", insurers: $companyId}) {\n    label: name\n    value\n    id\n  }\n}\n\nfragment EventTypeComboBox_data_3znApl on Query {\n  eventTypes: claimFilterOptions(where: {subject: \"eventTypes\", insurers: $companyId}) {\n    label: name\n    value\n    id\n  }\n}\n\nfragment ExternalLossAdjusterComboBox_data_3znApl on Query {\n  adjusters: claimFilterOptions(where: {subject: \"adjusters\", insurers: $companyId}) {\n    label: name\n    value\n    id\n  }\n}\n\nfragment FinaliseReasonComboBox_data on Query {\n  reasons: claimFilterOptions(where: {subject: \"finalisedReasons\"}) {\n    label: name\n    value\n    id\n  }\n}\n\nfragment JobInfoClaimDetailsRow1_optionData on Query {\n  ...CaseManagerComboBox_data_3znApl\n  ...ExternalLossAdjusterComboBox_data_3znApl\n}\n\nfragment JobInfoClaimDetailsRow2_meta on Query {\n  currentUser {\n    userType\n    id\n  }\n}\n\nfragment JobInfoClaimDetailsRow4_optionData on Query {\n  ...EventTypeComboBox_data_3znApl\n  ...CatCodeComboBox_data_3znApl\n}\n\nfragment JobInfoClaimDetailsRow5_optionData on Query {\n  ...DistributorComboBox_data_3znApl\n  ...PdsReferenceComboBox_data_3znApl\n}\n\nfragment JobInfoClaimDetailsRow6_optionData on Query {\n  ...SpecialistReviewComboBoxProps_data_3znApl\n  ...CaseManagerComboBox_data_3znApl\n  currentUser {\n    userType\n    id\n  }\n}\n\nfragment JobInfoClaimDetails_optionData on Query {\n  ...JobInfoClaimDetailsRow1_optionData\n  ...JobInfoClaimDetailsRow2_meta\n  ...JobInfoClaimDetailsRow4_optionData\n  ...JobInfoClaimDetailsRow5_optionData\n  ...JobInfoClaimDetailsRow6_optionData\n}\n\nfragment JobInfoCustomerInfoRow4_data on Query {\n  ...ClaimFinalise_data\n  ...CashSettle_data\n}\n\nfragment JobInfoCustomerInfo_data on Query {\n  ...JobInfoCustomerInfoRow4_data\n}\n\nfragment JobInfoQuotingBuilders_options_1u8e06 on Query {\n  quotingBuilders: claimFilterOptions(where: {subject: \"suppliers\", insurers: $companyId, postcode: $postcode, portfolios: [Building]}) {\n    label: name\n    value\n    id\n  }\n}\n\nfragment JobInfoQuotingRestorers_options_1u8e06 on Query {\n  quotingRestorers: claimFilterOptions(where: {subject: \"suppliers\", insurers: $companyId, postcode: $postcode, portfolios: [Restoration]}) {\n    label: name\n    value\n    id\n  }\n}\n\nfragment PaymentMethodSelect_data_15qNS2 on Query {\n  paymentMethods(where: {claimId: $claimId}) {\n    label: name\n    value: paymentMethodId\n    id\n  }\n}\n\nfragment PaymentTypeSelect_data_15qNS2 on Query {\n  options: paymentTypes(where: {claimId: $claimId, claimPortfolioType: Building}) {\n    label: name\n    value: paymentTypeId\n    id\n  }\n}\n\nfragment PdsReferenceComboBox_data_3znApl on Query {\n  pdsReferences: claimFilterOptions(where: {subject: \"policyCovers\", insurers: $companyId}) {\n    label: name\n    value\n    id\n  }\n}\n\nfragment SpecialistReviewComboBoxProps_data_3znApl on Query {\n  internalAssessors: claimFilterOptions(where: {subject: \"internalAssessors\", insurers: $companyId}) {\n    label: name\n    value\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = 'fa37b7b511a1a734f6066e096d3e9ab9';
export default node;
