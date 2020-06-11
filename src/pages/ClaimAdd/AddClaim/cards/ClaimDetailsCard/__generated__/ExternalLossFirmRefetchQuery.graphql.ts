/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ExternalLossFirmRefetchQueryVariables = {
    companyId?: Array<string> | null;
    postcode?: string | null;
};
export type ExternalLossFirmRefetchQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"ExternalLossFirm_options">;
};
export type ExternalLossFirmRefetchQuery = {
    readonly response: ExternalLossFirmRefetchQueryResponse;
    readonly variables: ExternalLossFirmRefetchQueryVariables;
};



/*
query ExternalLossFirmRefetchQuery(
  $companyId: [ID!] = "0"
  $postcode: String = "0"
) {
  ...ExternalLossFirm_options_2W2fkl
}

fragment ExternalLossFirm_options_2W2fkl on Query {
  adjusters: claimFilterOptions(where: {subject: "adjusters", insurers: $companyId, postcode: $postcode}) {
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
    "name": "ExternalLossFirmRefetchQuery",
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
        "name": "ExternalLossFirm_options"
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ExternalLossFirmRefetchQuery",
    "selections": [
      {
        "alias": "adjusters",
        "args": [
          {
            "fields": [
              {
                "kind": "Variable",
                "name": "insurers",
                "variableName": "companyId"
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
      "derivedFrom": "ExternalLossFirm_options",
      "isRefetchableQuery": true
    },
    "name": "ExternalLossFirmRefetchQuery",
    "operationKind": "query",
    "text": "query ExternalLossFirmRefetchQuery(\n  $companyId: [ID!] = \"0\"\n  $postcode: String = \"0\"\n) {\n  ...ExternalLossFirm_options_2W2fkl\n}\n\nfragment ExternalLossFirm_options_2W2fkl on Query {\n  adjusters: claimFilterOptions(where: {subject: \"adjusters\", insurers: $companyId, postcode: $postcode}) {\n    label: name\n    value\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '503414799b45c861b83e1d8092318d1d';
export default node;
