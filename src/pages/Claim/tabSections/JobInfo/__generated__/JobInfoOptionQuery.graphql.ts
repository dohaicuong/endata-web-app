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
    readonly " $fragmentRefs": FragmentRefs<"JobInfoActions_data" | "JobInfoClaimDetails_optionData" | "JobInfoQuotingBuilders_options" | "JobInfoQuotingRestorers_options">;
};
export type JobInfoOptionQuery = {
    readonly response: JobInfoOptionQueryResponse;
    readonly variables: JobInfoOptionQueryVariables;
};



/*
query JobInfoOptionQuery(
  $companyId: [ID!]
  $postcode: String
) {
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

fragment CatCodeComboBox_data_3znApl on Query {
  catCodes: claimFilterOptions(where: {subject: "catCodes", insurers: $companyId}) {
    label: name
    value
    id
  }
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
  "kind": "Variable",
  "name": "insurers",
  "variableName": "companyId"
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = [
  {
    "alias": "label",
    "args": null,
    "kind": "ScalarField",
    "name": "name",
    "storageKey": null
  },
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
        "alias": "managers",
        "args": [
          {
            "fields": [
              (v3/*: any*/),
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
              (v3/*: any*/),
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
              (v3/*: any*/),
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
              (v3/*: any*/),
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
              (v3/*: any*/),
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
              (v3/*: any*/),
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
              (v3/*: any*/),
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
              (v3/*: any*/),
              {
                "kind": "Literal",
                "name": "portfolios",
                "value": [
                  "Building"
                ]
              },
              (v1/*: any*/),
              (v6/*: any*/)
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
              (v3/*: any*/),
              {
                "kind": "Literal",
                "name": "portfolios",
                "value": [
                  "Restoration"
                ]
              },
              (v1/*: any*/),
              (v6/*: any*/)
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
    "text": "query JobInfoOptionQuery(\n  $companyId: [ID!]\n  $postcode: String\n) {\n  ...JobInfoClaimDetails_optionData\n  ...JobInfoQuotingBuilders_options_1u8e06\n  ...JobInfoQuotingRestorers_options_1u8e06\n}\n\nfragment CaseManagerComboBox_data_3znApl on Query {\n  managers: claimFilterOptions(where: {subject: \"managers\", insurers: $companyId}) {\n    label: name\n    value\n    id\n  }\n}\n\nfragment CatCodeComboBox_data_3znApl on Query {\n  catCodes: claimFilterOptions(where: {subject: \"catCodes\", insurers: $companyId}) {\n    label: name\n    value\n    id\n  }\n}\n\nfragment DistributorComboBox_data_3znApl on Query {\n  distributors: claimFilterOptions(where: {subject: \"policyTypes\", insurers: $companyId}) {\n    label: name\n    value\n    id\n  }\n}\n\nfragment EventTypeComboBox_data_3znApl on Query {\n  eventTypes: claimFilterOptions(where: {subject: \"eventTypes\", insurers: $companyId}) {\n    label: name\n    value\n    id\n  }\n}\n\nfragment ExternalLossAdjusterComboBox_data_3znApl on Query {\n  adjusters: claimFilterOptions(where: {subject: \"adjusters\", insurers: $companyId}) {\n    label: name\n    value\n    id\n  }\n}\n\nfragment JobInfoClaimDetailsRow1_optionData on Query {\n  ...CaseManagerComboBox_data_3znApl\n  ...ExternalLossAdjusterComboBox_data_3znApl\n}\n\nfragment JobInfoClaimDetailsRow2_meta on Query {\n  currentUser {\n    userType\n    id\n  }\n}\n\nfragment JobInfoClaimDetailsRow4_optionData on Query {\n  ...EventTypeComboBox_data_3znApl\n  ...CatCodeComboBox_data_3znApl\n}\n\nfragment JobInfoClaimDetailsRow5_optionData on Query {\n  ...DistributorComboBox_data_3znApl\n  ...PdsReferenceComboBox_data_3znApl\n}\n\nfragment JobInfoClaimDetailsRow6_optionData on Query {\n  ...SpecialistReviewComboBoxProps_data_3znApl\n  ...CaseManagerComboBox_data_3znApl\n  currentUser {\n    userType\n    id\n  }\n}\n\nfragment JobInfoClaimDetails_optionData on Query {\n  ...JobInfoClaimDetailsRow1_optionData\n  ...JobInfoClaimDetailsRow2_meta\n  ...JobInfoClaimDetailsRow4_optionData\n  ...JobInfoClaimDetailsRow5_optionData\n  ...JobInfoClaimDetailsRow6_optionData\n}\n\nfragment JobInfoQuotingBuilders_options_1u8e06 on Query {\n  quotingBuilders: claimFilterOptions(where: {subject: \"suppliers\", insurers: $companyId, postcode: $postcode, portfolios: [Building]}) {\n    label: name\n    value\n    id\n  }\n}\n\nfragment JobInfoQuotingRestorers_options_1u8e06 on Query {\n  quotingRestorers: claimFilterOptions(where: {subject: \"suppliers\", insurers: $companyId, postcode: $postcode, portfolios: [Restoration]}) {\n    label: name\n    value\n    id\n  }\n}\n\nfragment PdsReferenceComboBox_data_3znApl on Query {\n  pdsReferences: claimFilterOptions(where: {subject: \"policyCovers\", insurers: $companyId}) {\n    label: name\n    value\n    id\n  }\n}\n\nfragment SpecialistReviewComboBoxProps_data_3znApl on Query {\n  internalAssessors: claimFilterOptions(where: {subject: \"internalAssessors\", insurers: $companyId}) {\n    label: name\n    value\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '01ab8430b39570920829dc98fe8dbbfe';
export default node;
