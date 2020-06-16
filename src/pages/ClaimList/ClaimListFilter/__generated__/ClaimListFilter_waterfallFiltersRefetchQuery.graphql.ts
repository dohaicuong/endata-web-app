/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type PortfolioType = "Building" | "Contents" | "Restoration" | "%future added value";
export type State = "ACT" | "NSW" | "NT" | "QLD" | "SA" | "TAS" | "VIC" | "WA" | "%future added value";
export type ClaimStatusVolumeWhere = {
    createDateFrom?: unknown | null;
    createDateTo?: unknown | null;
    incidentDate?: unknown | null;
    incidentDateFrom?: unknown | null;
    incidentDateTo?: unknown | null;
    keyWords?: string | null;
    managerTeams?: Array<string | null> | null;
    insurers?: Array<string> | null;
    managers?: Array<string> | null;
    adjusters?: Array<string> | null;
    catCodes?: Array<string> | null;
    eventTypes?: Array<string> | null;
    buildingSuppliers?: Array<string> | null;
    contentsSuppliers?: Array<string> | null;
    restorationSuppliers?: Array<string> | null;
    internalAssessors?: Array<string> | null;
    states?: Array<State | null> | null;
    claimPortfolioType: PortfolioType;
};
export type ClaimListFilter_waterfallFiltersRefetchQueryVariables = {
    waterfallWhere?: ClaimStatusVolumeWhere | null;
};
export type ClaimListFilter_waterfallFiltersRefetchQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"ClaimListFilter_waterfallFilters">;
};
export type ClaimListFilter_waterfallFiltersRefetchQuery = {
    readonly response: ClaimListFilter_waterfallFiltersRefetchQueryResponse;
    readonly variables: ClaimListFilter_waterfallFiltersRefetchQueryVariables;
};



/*
query ClaimListFilter_waterfallFiltersRefetchQuery(
  $waterfallWhere: ClaimStatusVolumeWhere = {claimPortfolioType: Building}
) {
  ...ClaimListFilter_waterfallFilters_Yc3zi
}

fragment ClaimListFilter_waterfallFilters_Yc3zi on Query {
  currentUser {
    waterfallFilters(where: $waterfallWhere) {
      id
      items {
        value: id
        label
        claimCount
        color
        id
      }
    }
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": {
      "claimPortfolioType": "Building"
    },
    "kind": "LocalArgument",
    "name": "waterfallWhere",
    "type": "ClaimStatusVolumeWhere"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ClaimListFilter_waterfallFiltersRefetchQuery",
    "selections": [
      {
        "args": [
          {
            "kind": "Variable",
            "name": "waterfallWhere",
            "variableName": "waterfallWhere"
          }
        ],
        "kind": "FragmentSpread",
        "name": "ClaimListFilter_waterfallFilters"
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ClaimListFilter_waterfallFiltersRefetchQuery",
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
            "args": [
              {
                "kind": "Variable",
                "name": "where",
                "variableName": "waterfallWhere"
              }
            ],
            "concreteType": "ClaimStatusVolumeGroup",
            "kind": "LinkedField",
            "name": "waterfallFilters",
            "plural": true,
            "selections": [
              (v1/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "ClaimStatusVolume",
                "kind": "LinkedField",
                "name": "items",
                "plural": true,
                "selections": [
                  {
                    "alias": "value",
                    "args": null,
                    "kind": "ScalarField",
                    "name": "id",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "label",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "claimCount",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "color",
                    "storageKey": null
                  },
                  (v1/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v1/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {
      "derivedFrom": "ClaimListFilter_waterfallFilters",
      "isRefetchableQuery": true
    },
    "name": "ClaimListFilter_waterfallFiltersRefetchQuery",
    "operationKind": "query",
    "text": "query ClaimListFilter_waterfallFiltersRefetchQuery(\n  $waterfallWhere: ClaimStatusVolumeWhere = {claimPortfolioType: Building}\n) {\n  ...ClaimListFilter_waterfallFilters_Yc3zi\n}\n\nfragment ClaimListFilter_waterfallFilters_Yc3zi on Query {\n  currentUser {\n    waterfallFilters(where: $waterfallWhere) {\n      id\n      items {\n        value: id\n        label\n        claimCount\n        color\n        id\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '9501fd2df540197d6671bd49b0c7c3bd';
export default node;
