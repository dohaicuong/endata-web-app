/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type PortfolioType = "Building" | "Contents" | "Restoration" | "%future added value";
export type PaymentTypeSelectRefetchQueryVariables = {
    claimId: string;
    claimPortfolioType: PortfolioType;
};
export type PaymentTypeSelectRefetchQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"PaymentTypeSelect_data">;
};
export type PaymentTypeSelectRefetchQuery = {
    readonly response: PaymentTypeSelectRefetchQueryResponse;
    readonly variables: PaymentTypeSelectRefetchQueryVariables;
};



/*
query PaymentTypeSelectRefetchQuery(
  $claimId: ID!
  $claimPortfolioType: PortfolioType! = Building
) {
  ...PaymentTypeSelect_data_240hyH
}

fragment PaymentTypeSelect_data_240hyH on Query {
  options: paymentTypes(where: {claimId: $claimId, claimPortfolioType: $claimPortfolioType}) {
    label: name
    value: paymentTypeId
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "claimId",
    "type": "ID!"
  },
  {
    "defaultValue": "Building",
    "kind": "LocalArgument",
    "name": "claimPortfolioType",
    "type": "PortfolioType!"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "claimId",
    "variableName": "claimId"
  },
  {
    "kind": "Variable",
    "name": "claimPortfolioType",
    "variableName": "claimPortfolioType"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "PaymentTypeSelectRefetchQuery",
    "selections": [
      {
        "args": (v1/*: any*/),
        "kind": "FragmentSpread",
        "name": "PaymentTypeSelect_data"
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PaymentTypeSelectRefetchQuery",
    "selections": [
      {
        "alias": "options",
        "args": [
          {
            "fields": (v1/*: any*/),
            "kind": "ObjectValue",
            "name": "where"
          }
        ],
        "concreteType": "PaymentType",
        "kind": "LinkedField",
        "name": "paymentTypes",
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
            "alias": "value",
            "args": null,
            "kind": "ScalarField",
            "name": "paymentTypeId",
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
      "derivedFrom": "PaymentTypeSelect_data",
      "isRefetchableQuery": true
    },
    "name": "PaymentTypeSelectRefetchQuery",
    "operationKind": "query",
    "text": "query PaymentTypeSelectRefetchQuery(\n  $claimId: ID!\n  $claimPortfolioType: PortfolioType! = Building\n) {\n  ...PaymentTypeSelect_data_240hyH\n}\n\nfragment PaymentTypeSelect_data_240hyH on Query {\n  options: paymentTypes(where: {claimId: $claimId, claimPortfolioType: $claimPortfolioType}) {\n    label: name\n    value: paymentTypeId\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '0bd2f17cf0f57dad49500a4d4d866436';
export default node;
