/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type ChooseCompanyQueryVariables = {};
export type ChooseCompanyQueryResponse = {
    readonly company: ReadonlyArray<{
        readonly label: string;
        readonly value: string;
    } | null> | null;
};
export type ChooseCompanyQuery = {
    readonly response: ChooseCompanyQueryResponse;
    readonly variables: ChooseCompanyQueryVariables;
};



/*
query ChooseCompanyQuery {
  company: claimFilterOptions(where: {subject: "insurers"}) {
    label: name
    value
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "where",
    "value": {
      "subject": "insurers"
    }
  }
],
v1 = {
  "alias": "label",
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "value",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ChooseCompanyQuery",
    "selections": [
      {
        "alias": "company",
        "args": (v0/*: any*/),
        "concreteType": "FilterOption",
        "kind": "LinkedField",
        "name": "claimFilterOptions",
        "plural": true,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/)
        ],
        "storageKey": "claimFilterOptions(where:{\"subject\":\"insurers\"})"
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ChooseCompanyQuery",
    "selections": [
      {
        "alias": "company",
        "args": (v0/*: any*/),
        "concreteType": "FilterOption",
        "kind": "LinkedField",
        "name": "claimFilterOptions",
        "plural": true,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": "claimFilterOptions(where:{\"subject\":\"insurers\"})"
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "ChooseCompanyQuery",
    "operationKind": "query",
    "text": "query ChooseCompanyQuery {\n  company: claimFilterOptions(where: {subject: \"insurers\"}) {\n    label: name\n    value\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '403f77ee90522b7d878872e749e447cf';
export default node;
