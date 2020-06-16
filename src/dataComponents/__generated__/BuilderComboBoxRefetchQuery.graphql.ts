/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type BuilderComboBoxRefetchQueryVariables = {
    companyIds?: Array<string> | null;
    postcode?: string | null;
    companyId?: Array<string> | null;
};
export type BuilderComboBoxRefetchQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"BuilderComboBox_data">;
};
export type BuilderComboBoxRefetchQuery = {
    readonly response: BuilderComboBoxRefetchQueryResponse;
    readonly variables: BuilderComboBoxRefetchQueryVariables;
};



/*
query BuilderComboBoxRefetchQuery(
  $postcode: String
  $companyId: [ID!]
) {
  ...BuilderComboBox_data_1RToer
}

fragment BuilderComboBox_data_1RToer on Query {
  builders: claimFilterOptions(where: {subject: "suppliers", portfolios: [Building], insurers: $companyId, postcode: $postcode}) {
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
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "companyId",
    "type": "[ID!]"
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
    "name": "BuilderComboBoxRefetchQuery",
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
        "name": "BuilderComboBox_data"
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "BuilderComboBoxRefetchQuery",
    "selections": [
      {
        "alias": "builders",
        "args": [
          {
            "fields": [
              {
                "kind": "Variable",
                "name": "insurers",
                "variableName": "companyId"
              },
              {
                "kind": "Literal",
                "name": "portfolios",
                "value": [
                  "Building"
                ]
              },
              (v1/*: any*/),
              {
                "kind": "Literal",
                "name": "subject",
                "value": "suppliers"
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
      "derivedFrom": "BuilderComboBox_data",
      "isRefetchableQuery": true
    },
    "name": "BuilderComboBoxRefetchQuery",
    "operationKind": "query",
    "text": "query BuilderComboBoxRefetchQuery(\n  $postcode: String\n  $companyId: [ID!]\n) {\n  ...BuilderComboBox_data_1RToer\n}\n\nfragment BuilderComboBox_data_1RToer on Query {\n  builders: claimFilterOptions(where: {subject: \"suppliers\", portfolios: [Building], insurers: $companyId, postcode: $postcode}) {\n    label: name\n    value\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = 'aa6cc473051e9e24ba92fdeae9bc625c';
export default node;
