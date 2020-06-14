/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ExternalLossAdjusterComboBoxRefetchQueryVariables = {
    companyIds?: Array<string> | null;
    postcode?: string | null;
};
export type ExternalLossAdjusterComboBoxRefetchQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"ExternalLossAdjusterComboBox_data">;
};
export type ExternalLossAdjusterComboBoxRefetchQuery = {
    readonly response: ExternalLossAdjusterComboBoxRefetchQueryResponse;
    readonly variables: ExternalLossAdjusterComboBoxRefetchQueryVariables;
};



/*
query ExternalLossAdjusterComboBoxRefetchQuery(
  $companyIds: [ID!]
  $postcode: String
) {
  ...ExternalLossAdjusterComboBox_data_1RToer
}

fragment ExternalLossAdjusterComboBox_data_1RToer on Query {
  adjusters: claimFilterOptions(where: {subject: "adjusters", insurers: $companyIds, postcode: $postcode}) {
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
    "name": "companyIds",
    "type": "[ID!]"
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
  "name": "postcode",
  "variableName": "postcode"
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ExternalLossAdjusterComboBoxRefetchQuery",
    "selections": [
      {
        "args": [
          {
            "kind": "Variable",
            "name": "companyIds",
            "variableName": "companyIds"
          },
          (v1/*: any*/)
        ],
        "kind": "FragmentSpread",
        "name": "ExternalLossAdjusterComboBox_data"
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ExternalLossAdjusterComboBoxRefetchQuery",
    "selections": [
      {
        "alias": "adjusters",
        "args": [
          {
            "fields": [
              {
                "kind": "Variable",
                "name": "insurers",
                "variableName": "companyIds"
              },
              (v1/*: any*/),
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
        "selections": [
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
    ]
  },
  "params": {
    "id": null,
    "metadata": {
      "derivedFrom": "ExternalLossAdjusterComboBox_data",
      "isRefetchableQuery": true
    },
    "name": "ExternalLossAdjusterComboBoxRefetchQuery",
    "operationKind": "query",
    "text": "query ExternalLossAdjusterComboBoxRefetchQuery(\n  $companyIds: [ID!]\n  $postcode: String\n) {\n  ...ExternalLossAdjusterComboBox_data_1RToer\n}\n\nfragment ExternalLossAdjusterComboBox_data_1RToer on Query {\n  adjusters: claimFilterOptions(where: {subject: \"adjusters\", insurers: $companyIds, postcode: $postcode}) {\n    label: name\n    value\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = 'a86a8db9f43a2847d1e44aec0e06022d';
export default node;
