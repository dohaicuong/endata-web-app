/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type commitAppMetaQueryVariables = {};
export type commitAppMetaQueryResponse = {
    readonly __typename: string;
    readonly meta: {
        readonly accessToken: string | null;
        readonly refreshToken: string | null;
        readonly rootRoute: string | null;
        readonly redirectFrom: string | null;
    } | null;
};
export type commitAppMetaQuery = {
    readonly response: commitAppMetaQueryResponse;
    readonly variables: commitAppMetaQueryVariables;
};



/*
query commitAppMetaQuery {
  __typename
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "__typename",
    "storageKey": null
  },
  {
    "kind": "ClientExtension",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "AppMeta",
        "kind": "LinkedField",
        "name": "meta",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "accessToken",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "refreshToken",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "rootRoute",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "redirectFrom",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "commitAppMetaQuery",
    "selections": (v0/*: any*/),
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "commitAppMetaQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "commitAppMetaQuery",
    "operationKind": "query",
    "text": "query commitAppMetaQuery {\n  __typename\n}\n"
  }
};
})();
(node as any).hash = '744650d4cb178265763b332c59d3cc87';
export default node;
