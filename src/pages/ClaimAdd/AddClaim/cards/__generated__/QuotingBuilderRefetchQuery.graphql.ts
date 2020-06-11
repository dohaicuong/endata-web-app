/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type QuotingBuilderRefetchQueryVariables = {
    companyId?: Array<string> | null;
    postcode?: string | null;
};
export type QuotingBuilderRefetchQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"QuotingBuildersCard_options">;
};
export type QuotingBuilderRefetchQuery = {
    readonly response: QuotingBuilderRefetchQueryResponse;
    readonly variables: QuotingBuilderRefetchQueryVariables;
};



/*
query QuotingBuilderRefetchQuery(
  $companyId: [ID!] = "0"
  $postcode: String = "0"
) {
  ...QuotingBuildersCard_options_2W2fkl
}

fragment QuotingBuildersCard_options_2W2fkl on Query {
  quotingBuilders: claimFilterOptions(where: {subject: "suppliers", insurers: $companyId, postcode: $postcode, portfolios: [Building]}) {
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
    "name": "QuotingBuilderRefetchQuery",
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
        "name": "QuotingBuildersCard_options"
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "QuotingBuilderRefetchQuery",
    "selections": [
      {
        "alias": "quotingBuilders",
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
      "derivedFrom": "QuotingBuildersCard_options",
      "isRefetchableQuery": true
    },
    "name": "QuotingBuilderRefetchQuery",
    "operationKind": "query",
    "text": "query QuotingBuilderRefetchQuery(\n  $companyId: [ID!] = \"0\"\n  $postcode: String = \"0\"\n) {\n  ...QuotingBuildersCard_options_2W2fkl\n}\n\nfragment QuotingBuildersCard_options_2W2fkl on Query {\n  quotingBuilders: claimFilterOptions(where: {subject: \"suppliers\", insurers: $companyId, postcode: $postcode, portfolios: [Building]}) {\n    label: name\n    value\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '980cf66774d977358f99d0028ea856d8';
export default node;
