/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type PortfolioType = "Building" | "Contents" | "Restoration" | "%future added value";
export type AwaitingInfoReasonSelectRefetchQueryVariables = {
    portfolios?: Array<PortfolioType | null> | null;
};
export type AwaitingInfoReasonSelectRefetchQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"AwaitingInfoReasonSelect_data">;
};
export type AwaitingInfoReasonSelectRefetchQuery = {
    readonly response: AwaitingInfoReasonSelectRefetchQueryResponse;
    readonly variables: AwaitingInfoReasonSelectRefetchQueryVariables;
};



/*
query AwaitingInfoReasonSelectRefetchQuery(
  $portfolios: [PortfolioType]
) {
  ...AwaitingInfoReasonSelect_data_1DhJG1
}

fragment AwaitingInfoReasonSelect_data_1DhJG1 on Query {
  claimFilterOptions(where: {subject: "awaitingInfoReasons", portfolios: $portfolios}) {
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
    "name": "portfolios",
    "type": "[PortfolioType]"
  }
],
v1 = {
  "kind": "Variable",
  "name": "portfolios",
  "variableName": "portfolios"
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AwaitingInfoReasonSelectRefetchQuery",
    "selections": [
      {
        "args": [
          (v1/*: any*/)
        ],
        "kind": "FragmentSpread",
        "name": "AwaitingInfoReasonSelect_data"
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AwaitingInfoReasonSelectRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": [
          {
            "fields": [
              (v1/*: any*/),
              {
                "kind": "Literal",
                "name": "subject",
                "value": "awaitingInfoReasons"
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
      "derivedFrom": "AwaitingInfoReasonSelect_data",
      "isRefetchableQuery": true
    },
    "name": "AwaitingInfoReasonSelectRefetchQuery",
    "operationKind": "query",
    "text": "query AwaitingInfoReasonSelectRefetchQuery(\n  $portfolios: [PortfolioType]\n) {\n  ...AwaitingInfoReasonSelect_data_1DhJG1\n}\n\nfragment AwaitingInfoReasonSelect_data_1DhJG1 on Query {\n  claimFilterOptions(where: {subject: \"awaitingInfoReasons\", portfolios: $portfolios}) {\n    label: name\n    value\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = 'cf242f5157ab7df95b950d30e2fba55f';
export default node;
