/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type RestorerComboBoxRefetchQueryVariables = {
    companyIds?: Array<string> | null;
    postcode?: string | null;
    companyId?: Array<string> | null;
};
export type RestorerComboBoxRefetchQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"RestorerComboBox_data">;
};
export type RestorerComboBoxRefetchQuery = {
    readonly response: RestorerComboBoxRefetchQueryResponse;
    readonly variables: RestorerComboBoxRefetchQueryVariables;
};



/*
query RestorerComboBoxRefetchQuery(
  $postcode: String
  $companyId: [ID!]
) {
  ...RestorerComboBox_data_1RToer
}

fragment RestorerComboBox_data_1RToer on Query {
  restorers: claimFilterOptions(where: {subject: "suppliers", portfolios: [Restoration], insurers: $companyId, postcode: $postcode}) {
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
    "name": "RestorerComboBoxRefetchQuery",
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
        "name": "RestorerComboBox_data"
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "RestorerComboBoxRefetchQuery",
    "selections": [
      {
        "alias": "restorers",
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
                  "Restoration"
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
      "derivedFrom": "RestorerComboBox_data",
      "isRefetchableQuery": true
    },
    "name": "RestorerComboBoxRefetchQuery",
    "operationKind": "query",
    "text": "query RestorerComboBoxRefetchQuery(\n  $postcode: String\n  $companyId: [ID!]\n) {\n  ...RestorerComboBox_data_1RToer\n}\n\nfragment RestorerComboBox_data_1RToer on Query {\n  restorers: claimFilterOptions(where: {subject: \"suppliers\", portfolios: [Restoration], insurers: $companyId, postcode: $postcode}) {\n    label: name\n    value\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '770f5be88ee2a80b6c3721b3f210920f';
export default node;
