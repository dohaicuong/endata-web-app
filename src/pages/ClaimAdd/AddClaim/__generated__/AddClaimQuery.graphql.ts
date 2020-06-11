/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type AddClaimQueryVariables = {
    companyId?: Array<string> | null;
    compId: string;
    postcode?: string | null;
};
export type AddClaimQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"AddClaimRoot_data">;
};
export type AddClaimQuery = {
    readonly response: AddClaimQueryResponse;
    readonly variables: AddClaimQueryVariables;
};



/*
query AddClaimQuery(
  $companyId: [ID!]
  $compId: ID!
  $postcode: String
) {
  ...AddClaimRoot_data
}

fragment AddClaimRoot_data on Query {
  company(where: {portfolioType: Building, id: $compId}) {
    ...CustomerDetailsCard_company
    ...ClaimDetailsCard_company
    ...QuotingBuildersCard_meta
    ...QuotingRestorersCard_meta
  }
  ...ClaimDetailsCard_optionData
  ...QuotingBuildersCard_options_2W2fkl
  ...QuotingRestorersCard_options_2W2fkl
}

fragment Builder_options_2W2fkl on Query {
  builders: claimFilterOptions(where: {subject: "suppliers", insurers: $companyId, postcode: $postcode, portfolios: [Building]}) {
    label: name
    value
    id
  }
}

fragment CaseManager_options on Query {
  managers: claimFilterOptions(where: {subject: "managers", insurers: $companyId}) {
    label: name
    value
    id
  }
}

fragment CatCode_options on Query {
  catCodes: claimFilterOptions(where: {subject: "catCodes", insurers: $companyId}) {
    label: name
    value
    id
  }
}

fragment ClaimDetailsCard_company on CompanyProfile {
  companyName
  contentsref
  quickrepair
  policyTypeSuppliersView
  policyCoverSuppliersView
  isToProvideSiteReportView
  useInternalAssessor
  enableMultipleRisks
  cm2nd
  ...InsuranceCompany_company
}

fragment ClaimDetailsCard_optionData on Query {
  ...CaseManager_options
  ...ExternalLossFirm_options_2W2fkl
  ...Builder_options_2W2fkl
  ...Restorer_options_2W2fkl
  ...EventType_options
  ...CatCode_options
  ...Distributor_options
  ...PdsReference_options
  ...SpecialistReview_options
  ...LossAdjuster_options
  me: currentUser {
    userType
    id
  }
}

fragment CustomerDetailsCard_company on CompanyProfile {
  removeHabitableAsbestos
  setupcustomerlogin
  hideCategoryOfClaim
}

fragment Distributor_options on Query {
  distributors: claimFilterOptions(where: {subject: "policyCovers", insurers: $companyId}) {
    label: name
    value
    id
  }
}

fragment EventType_options on Query {
  eventTypes: claimFilterOptions(where: {subject: "eventTypes", insurers: $companyId}) {
    label: name
    value
    id
  }
}

fragment ExternalLossFirm_options_2W2fkl on Query {
  adjusters: claimFilterOptions(where: {subject: "adjusters", insurers: $companyId, postcode: $postcode}) {
    label: name
    value
    id
  }
}

fragment InsuranceCompany_company on CompanyProfile {
  companyName
}

fragment LossAdjuster_options on Query {
  managers: claimFilterOptions(where: {subject: "managers", insurers: $companyId}) {
    label: name
    value
    id
  }
}

fragment PdsReference_options on Query {
  pdsReferences: claimFilterOptions(where: {subject: "policyCovers", insurers: $companyId}) {
    label: name
    value
    id
  }
}

fragment QuotingBuildersCard_meta on CompanyProfile {
  quotesperclaim
}

fragment QuotingBuildersCard_options_2W2fkl on Query {
  quotingBuilders: claimFilterOptions(where: {subject: "suppliers", insurers: $companyId, postcode: $postcode, portfolios: [Building]}) {
    label: name
    value
    id
  }
}

fragment QuotingRestorersCard_meta on CompanyProfile {
  quotesperclaim
}

fragment QuotingRestorersCard_options_2W2fkl on Query {
  quotingRestorers: claimFilterOptions(where: {subject: "suppliers", insurers: $companyId, postcode: $postcode, portfolios: [Restoration]}) {
    label: name
    value
    id
  }
}

fragment Restorer_options_2W2fkl on Query {
  restorers: claimFilterOptions(where: {subject: "suppliers", insurers: $companyId, postcode: $postcode, portfolios: [Restoration]}) {
    label: name
    value
    id
  }
}

fragment SpecialistReview_options on Query {
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
    "name": "compId",
    "type": "ID!"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "postcode",
    "type": "String"
  }
],
v1 = {
  "kind": "Variable",
  "name": "insurers",
  "variableName": "companyId"
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = [
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
  (v2/*: any*/)
],
v4 = {
  "kind": "Variable",
  "name": "postcode",
  "variableName": "postcode"
},
v5 = {
  "kind": "Literal",
  "name": "subject",
  "value": "suppliers"
},
v6 = [
  {
    "fields": [
      (v1/*: any*/),
      {
        "kind": "Literal",
        "name": "portfolios",
        "value": [
          "Building"
        ]
      },
      (v4/*: any*/),
      (v5/*: any*/)
    ],
    "kind": "ObjectValue",
    "name": "where"
  }
],
v7 = [
  {
    "fields": [
      (v1/*: any*/),
      {
        "kind": "Literal",
        "name": "portfolios",
        "value": [
          "Restoration"
        ]
      },
      (v4/*: any*/),
      (v5/*: any*/)
    ],
    "kind": "ObjectValue",
    "name": "where"
  }
],
v8 = [
  {
    "fields": [
      (v1/*: any*/),
      {
        "kind": "Literal",
        "name": "subject",
        "value": "policyCovers"
      }
    ],
    "kind": "ObjectValue",
    "name": "where"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AddClaimQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "AddClaimRoot_data"
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AddClaimQuery",
    "selections": [
      {
        "alias": null,
        "args": [
          {
            "fields": [
              {
                "kind": "Variable",
                "name": "id",
                "variableName": "compId"
              },
              {
                "kind": "Literal",
                "name": "portfolioType",
                "value": "Building"
              }
            ],
            "kind": "ObjectValue",
            "name": "where"
          }
        ],
        "concreteType": "CompanyProfile",
        "kind": "LinkedField",
        "name": "company",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "removeHabitableAsbestos",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "setupcustomerlogin",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "hideCategoryOfClaim",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "companyName",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "contentsref",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "quickrepair",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "policyTypeSuppliersView",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "policyCoverSuppliersView",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "isToProvideSiteReportView",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "useInternalAssessor",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "enableMultipleRisks",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "cm2nd",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "quotesperclaim",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": "managers",
        "args": [
          {
            "fields": [
              (v1/*: any*/),
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
        "selections": (v3/*: any*/),
        "storageKey": null
      },
      {
        "alias": "adjusters",
        "args": [
          {
            "fields": [
              (v1/*: any*/),
              (v4/*: any*/),
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
        "selections": (v3/*: any*/),
        "storageKey": null
      },
      {
        "alias": "builders",
        "args": (v6/*: any*/),
        "concreteType": "FilterOption",
        "kind": "LinkedField",
        "name": "claimFilterOptions",
        "plural": true,
        "selections": (v3/*: any*/),
        "storageKey": null
      },
      {
        "alias": "restorers",
        "args": (v7/*: any*/),
        "concreteType": "FilterOption",
        "kind": "LinkedField",
        "name": "claimFilterOptions",
        "plural": true,
        "selections": (v3/*: any*/),
        "storageKey": null
      },
      {
        "alias": "eventTypes",
        "args": [
          {
            "fields": [
              (v1/*: any*/),
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
        "selections": (v3/*: any*/),
        "storageKey": null
      },
      {
        "alias": "catCodes",
        "args": [
          {
            "fields": [
              (v1/*: any*/),
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
        "selections": (v3/*: any*/),
        "storageKey": null
      },
      {
        "alias": "distributors",
        "args": (v8/*: any*/),
        "concreteType": "FilterOption",
        "kind": "LinkedField",
        "name": "claimFilterOptions",
        "plural": true,
        "selections": (v3/*: any*/),
        "storageKey": null
      },
      {
        "alias": "pdsReferences",
        "args": (v8/*: any*/),
        "concreteType": "FilterOption",
        "kind": "LinkedField",
        "name": "claimFilterOptions",
        "plural": true,
        "selections": (v3/*: any*/),
        "storageKey": null
      },
      {
        "alias": "internalAssessors",
        "args": [
          {
            "fields": [
              (v1/*: any*/),
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
        "selections": (v3/*: any*/),
        "storageKey": null
      },
      {
        "alias": "me",
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
          (v2/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": "quotingBuilders",
        "args": (v6/*: any*/),
        "concreteType": "FilterOption",
        "kind": "LinkedField",
        "name": "claimFilterOptions",
        "plural": true,
        "selections": (v3/*: any*/),
        "storageKey": null
      },
      {
        "alias": "quotingRestorers",
        "args": (v7/*: any*/),
        "concreteType": "FilterOption",
        "kind": "LinkedField",
        "name": "claimFilterOptions",
        "plural": true,
        "selections": (v3/*: any*/),
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "AddClaimQuery",
    "operationKind": "query",
    "text": "query AddClaimQuery(\n  $companyId: [ID!]\n  $compId: ID!\n  $postcode: String\n) {\n  ...AddClaimRoot_data\n}\n\nfragment AddClaimRoot_data on Query {\n  company(where: {portfolioType: Building, id: $compId}) {\n    ...CustomerDetailsCard_company\n    ...ClaimDetailsCard_company\n    ...QuotingBuildersCard_meta\n    ...QuotingRestorersCard_meta\n  }\n  ...ClaimDetailsCard_optionData\n  ...QuotingBuildersCard_options_2W2fkl\n  ...QuotingRestorersCard_options_2W2fkl\n}\n\nfragment Builder_options_2W2fkl on Query {\n  builders: claimFilterOptions(where: {subject: \"suppliers\", insurers: $companyId, postcode: $postcode, portfolios: [Building]}) {\n    label: name\n    value\n    id\n  }\n}\n\nfragment CaseManager_options on Query {\n  managers: claimFilterOptions(where: {subject: \"managers\", insurers: $companyId}) {\n    label: name\n    value\n    id\n  }\n}\n\nfragment CatCode_options on Query {\n  catCodes: claimFilterOptions(where: {subject: \"catCodes\", insurers: $companyId}) {\n    label: name\n    value\n    id\n  }\n}\n\nfragment ClaimDetailsCard_company on CompanyProfile {\n  companyName\n  contentsref\n  quickrepair\n  policyTypeSuppliersView\n  policyCoverSuppliersView\n  isToProvideSiteReportView\n  useInternalAssessor\n  enableMultipleRisks\n  cm2nd\n  ...InsuranceCompany_company\n}\n\nfragment ClaimDetailsCard_optionData on Query {\n  ...CaseManager_options\n  ...ExternalLossFirm_options_2W2fkl\n  ...Builder_options_2W2fkl\n  ...Restorer_options_2W2fkl\n  ...EventType_options\n  ...CatCode_options\n  ...Distributor_options\n  ...PdsReference_options\n  ...SpecialistReview_options\n  ...LossAdjuster_options\n  me: currentUser {\n    userType\n    id\n  }\n}\n\nfragment CustomerDetailsCard_company on CompanyProfile {\n  removeHabitableAsbestos\n  setupcustomerlogin\n  hideCategoryOfClaim\n}\n\nfragment Distributor_options on Query {\n  distributors: claimFilterOptions(where: {subject: \"policyCovers\", insurers: $companyId}) {\n    label: name\n    value\n    id\n  }\n}\n\nfragment EventType_options on Query {\n  eventTypes: claimFilterOptions(where: {subject: \"eventTypes\", insurers: $companyId}) {\n    label: name\n    value\n    id\n  }\n}\n\nfragment ExternalLossFirm_options_2W2fkl on Query {\n  adjusters: claimFilterOptions(where: {subject: \"adjusters\", insurers: $companyId, postcode: $postcode}) {\n    label: name\n    value\n    id\n  }\n}\n\nfragment InsuranceCompany_company on CompanyProfile {\n  companyName\n}\n\nfragment LossAdjuster_options on Query {\n  managers: claimFilterOptions(where: {subject: \"managers\", insurers: $companyId}) {\n    label: name\n    value\n    id\n  }\n}\n\nfragment PdsReference_options on Query {\n  pdsReferences: claimFilterOptions(where: {subject: \"policyCovers\", insurers: $companyId}) {\n    label: name\n    value\n    id\n  }\n}\n\nfragment QuotingBuildersCard_meta on CompanyProfile {\n  quotesperclaim\n}\n\nfragment QuotingBuildersCard_options_2W2fkl on Query {\n  quotingBuilders: claimFilterOptions(where: {subject: \"suppliers\", insurers: $companyId, postcode: $postcode, portfolios: [Building]}) {\n    label: name\n    value\n    id\n  }\n}\n\nfragment QuotingRestorersCard_meta on CompanyProfile {\n  quotesperclaim\n}\n\nfragment QuotingRestorersCard_options_2W2fkl on Query {\n  quotingRestorers: claimFilterOptions(where: {subject: \"suppliers\", insurers: $companyId, postcode: $postcode, portfolios: [Restoration]}) {\n    label: name\n    value\n    id\n  }\n}\n\nfragment Restorer_options_2W2fkl on Query {\n  restorers: claimFilterOptions(where: {subject: \"suppliers\", insurers: $companyId, postcode: $postcode, portfolios: [Restoration]}) {\n    label: name\n    value\n    id\n  }\n}\n\nfragment SpecialistReview_options on Query {\n  internalAssessors: claimFilterOptions(where: {subject: \"internalAssessors\", insurers: $companyId}) {\n    label: name\n    value\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = 'bf0b1153056077d30de445ed2f3bd052';
export default node;
