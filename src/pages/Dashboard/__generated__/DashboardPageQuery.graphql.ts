/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type DashboardPageQueryVariables = {};
export type DashboardPageQueryResponse = {
    readonly currentUser: {
        readonly dashboardFilters: ReadonlyArray<{
            readonly id: string;
            readonly " $fragmentRefs": FragmentRefs<"FilterInput_data">;
        } | null> | null;
    } | null;
};
export type DashboardPageQuery = {
    readonly response: DashboardPageQueryResponse;
    readonly variables: DashboardPageQueryVariables;
};



/*
query DashboardPageQuery {
  currentUser {
    dashboardFilters {
      id
      ...FilterInput_data
    }
    id
  }
}

fragment FilterInput_data on FilterInput {
  type
  label
  name
  options {
    group
    label
    value: id
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "label",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "DashboardPageQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "AuthenticatedUser",
        "kind": "LinkedField",
        "name": "currentUser",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "FilterInput",
            "kind": "LinkedField",
            "name": "dashboardFilters",
            "plural": true,
            "selections": [
              (v0/*: any*/),
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "FilterInput_data"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "DashboardPageQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "AuthenticatedUser",
        "kind": "LinkedField",
        "name": "currentUser",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "FilterInput",
            "kind": "LinkedField",
            "name": "dashboardFilters",
            "plural": true,
            "selections": [
              (v0/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "type",
                "storageKey": null
              },
              (v1/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "name",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "FilterInputOption",
                "kind": "LinkedField",
                "name": "options",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "group",
                    "storageKey": null
                  },
                  (v1/*: any*/),
                  {
                    "alias": "value",
                    "args": null,
                    "kind": "ScalarField",
                    "name": "id",
                    "storageKey": null
                  },
                  (v0/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v0/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "DashboardPageQuery",
    "operationKind": "query",
    "text": "query DashboardPageQuery {\n  currentUser {\n    dashboardFilters {\n      id\n      ...FilterInput_data\n    }\n    id\n  }\n}\n\nfragment FilterInput_data on FilterInput {\n  type\n  label\n  name\n  options {\n    group\n    label\n    value: id\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '42446764fcbf98fe9eb872fb227f6bc3';
export default node;
