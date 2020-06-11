/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type JobInfoOptionQueryVariables = {
    companyId?: Array<string> | null;
};
export type JobInfoOptionQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"JobInfoClaimDetails_optionData">;
};
export type JobInfoOptionQuery = {
    readonly response: JobInfoOptionQueryResponse;
    readonly variables: JobInfoOptionQueryVariables;
};



/*
query JobInfoOptionQuery(
  $companyId: [ID!]
) {
  ...JobInfoClaimDetails_optionData
}

fragment CaseManager_options on Query {
  managers: claimFilterOptions(where: {subject: "managers", insurers: $companyId}) {
    label: name
    value
    id
  }
}

fragment ExternalLossFirm_options_MWiJC on Query {
  adjusters: claimFilterOptions(where: {subject: "adjusters", insurers: $companyId}) {
    label: name
    value
    id
  }
}

fragment JobInfoClaimDetailsRow1_optionData on Query {
  ...CaseManager_options
  ...ExternalLossFirm_options_MWiJC
}

fragment JobInfoClaimDetailsRow2_meta on Query {
  currentUser {
    userType
    id
  }
}

fragment JobInfoClaimDetails_optionData on Query {
  ...JobInfoClaimDetailsRow1_optionData
  ...JobInfoClaimDetailsRow2_meta
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "companyId",
    "type": "[ID!]"
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
];
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
        "name": "JobInfoClaimDetails_optionData"
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
        "selections": (v3/*: any*/),
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
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "JobInfoOptionQuery",
    "operationKind": "query",
    "text": "query JobInfoOptionQuery(\n  $companyId: [ID!]\n) {\n  ...JobInfoClaimDetails_optionData\n}\n\nfragment CaseManager_options on Query {\n  managers: claimFilterOptions(where: {subject: \"managers\", insurers: $companyId}) {\n    label: name\n    value\n    id\n  }\n}\n\nfragment ExternalLossFirm_options_MWiJC on Query {\n  adjusters: claimFilterOptions(where: {subject: \"adjusters\", insurers: $companyId}) {\n    label: name\n    value\n    id\n  }\n}\n\nfragment JobInfoClaimDetailsRow1_optionData on Query {\n  ...CaseManager_options\n  ...ExternalLossFirm_options_MWiJC\n}\n\nfragment JobInfoClaimDetailsRow2_meta on Query {\n  currentUser {\n    userType\n    id\n  }\n}\n\nfragment JobInfoClaimDetails_optionData on Query {\n  ...JobInfoClaimDetailsRow1_optionData\n  ...JobInfoClaimDetailsRow2_meta\n}\n"
  }
};
})();
(node as any).hash = '69a5358fb443ed164fb1efaca1575dc5';
export default node;
