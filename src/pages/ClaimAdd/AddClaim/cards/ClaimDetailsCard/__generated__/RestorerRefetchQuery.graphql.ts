/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type RestorerRefetchQueryVariables = {
    companyId?: Array<string> | null;
    postcode?: string | null;
};
export type RestorerRefetchQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"Restorer_options">;
};
export type RestorerRefetchQuery = {
    readonly response: RestorerRefetchQueryResponse;
    readonly variables: RestorerRefetchQueryVariables;
};



/*
query RestorerRefetchQuery(
  $companyId: [ID!] = "0"
  $postcode: String = "0"
) {
  ...Restorer_options_2W2fkl
}

fragment Restorer_options_2W2fkl on Query {
  restorers: claimFilterOptions(where: {subject: "suppliers", insurers: $companyId, postcode: $postcode, portfolios: [Restoration]}) {
    label: name
    value
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": "0",
    "kind": "LocalArgument",
    "name": "companyId",
    "type": "[ID!]"
  },
  {
    "defaultValue": "0",
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
    "name": "RestorerRefetchQuery",
    "selections": [
      {
        "args": [
          {
            "kind": "Variable",
            "name": "companyId",
            "variableName": "companyId"
          },
          (v1/*: any*/)
        ],
        "kind": "FragmentSpread",
        "name": "Restorer_options"
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "RestorerRefetchQuery",
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
      "derivedFrom": "Restorer_options",
      "isRefetchableQuery": true
    },
    "name": "RestorerRefetchQuery",
    "operationKind": "query",
    "text": "query RestorerRefetchQuery(\n  $companyId: [ID!] = \"0\"\n  $postcode: String = \"0\"\n) {\n  ...Restorer_options_2W2fkl\n}\n\nfragment Restorer_options_2W2fkl on Query {\n  restorers: claimFilterOptions(where: {subject: \"suppliers\", insurers: $companyId, postcode: $postcode, portfolios: [Restoration]}) {\n    label: name\n    value\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '9ff0baa47da4b2d5d7369bedd3bfb7f7';
export default node;
