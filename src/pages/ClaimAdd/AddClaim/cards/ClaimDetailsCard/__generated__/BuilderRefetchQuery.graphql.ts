/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type BuilderRefetchQueryVariables = {
    companyId?: Array<string> | null;
    postcode?: string | null;
};
export type BuilderRefetchQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"Builder_options">;
};
export type BuilderRefetchQuery = {
    readonly response: BuilderRefetchQueryResponse;
    readonly variables: BuilderRefetchQueryVariables;
};



/*
query BuilderRefetchQuery(
  $companyId: [ID!] = "0"
  $postcode: String = "0"
) {
  ...Builder_options_2W2fkl
}

fragment Builder_options_2W2fkl on Query {
  builders: claimFilterOptions(where: {subject: "suppliers", insurers: $companyId, postcode: $postcode, portfolios: [Building]}) {
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
    "name": "BuilderRefetchQuery",
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
        "name": "Builder_options"
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "BuilderRefetchQuery",
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
      "derivedFrom": "Builder_options",
      "isRefetchableQuery": true
    },
    "name": "BuilderRefetchQuery",
    "operationKind": "query",
    "text": "query BuilderRefetchQuery(\n  $companyId: [ID!] = \"0\"\n  $postcode: String = \"0\"\n) {\n  ...Builder_options_2W2fkl\n}\n\nfragment Builder_options_2W2fkl on Query {\n  builders: claimFilterOptions(where: {subject: \"suppliers\", insurers: $companyId, postcode: $postcode, portfolios: [Building]}) {\n    label: name\n    value\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '55b0c6d0ea0aacc8b7aa20004f580128';
export default node;
