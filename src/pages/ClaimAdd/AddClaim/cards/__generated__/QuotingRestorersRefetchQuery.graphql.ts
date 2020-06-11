/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type QuotingRestorersRefetchQueryVariables = {
    companyId?: Array<string> | null;
    postcode?: string | null;
};
export type QuotingRestorersRefetchQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"QuotingRestorersCard_options">;
};
export type QuotingRestorersRefetchQuery = {
    readonly response: QuotingRestorersRefetchQueryResponse;
    readonly variables: QuotingRestorersRefetchQueryVariables;
};



/*
query QuotingRestorersRefetchQuery(
  $companyId: [ID!] = "0"
  $postcode: String = "0"
) {
  ...QuotingRestorersCard_options_2W2fkl
}

fragment QuotingRestorersCard_options_2W2fkl on Query {
  quotingRestorers: claimFilterOptions(where: {subject: "suppliers", insurers: $companyId, postcode: $postcode, portfolios: [Restoration]}) {
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
    "name": "QuotingRestorersRefetchQuery",
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
        "name": "QuotingRestorersCard_options"
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "QuotingRestorersRefetchQuery",
    "selections": [
      {
        "alias": "quotingRestorers",
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
      "derivedFrom": "QuotingRestorersCard_options",
      "isRefetchableQuery": true
    },
    "name": "QuotingRestorersRefetchQuery",
    "operationKind": "query",
    "text": "query QuotingRestorersRefetchQuery(\n  $companyId: [ID!] = \"0\"\n  $postcode: String = \"0\"\n) {\n  ...QuotingRestorersCard_options_2W2fkl\n}\n\nfragment QuotingRestorersCard_options_2W2fkl on Query {\n  quotingRestorers: claimFilterOptions(where: {subject: \"suppliers\", insurers: $companyId, postcode: $postcode, portfolios: [Restoration]}) {\n    label: name\n    value\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '19cbca658997a8a3958ce31e6e87598a';
export default node;
