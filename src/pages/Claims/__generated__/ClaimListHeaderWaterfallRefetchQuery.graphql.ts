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
export type ClaimListHeaderWaterfallRefetchQueryVariables = {
    waterfallWhere: ClaimStatusVolumeWhere;
};
export type ClaimListHeaderWaterfallRefetchQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"ClaimListHeaderWaterfall_WaterfallFilters">;
};
export type ClaimListHeaderWaterfallRefetchQuery = {
    readonly response: ClaimListHeaderWaterfallRefetchQueryResponse;
    readonly variables: ClaimListHeaderWaterfallRefetchQueryVariables;
};



/*
query ClaimListHeaderWaterfallRefetchQuery(
  $waterfallWhere: ClaimStatusVolumeWhere!
) {
  ...ClaimListHeaderWaterfall_WaterfallFilters
}

fragment ClaimListHeaderWaterfall_WaterfallFilters on Query {
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
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "waterfallWhere",
    "type": "ClaimStatusVolumeWhere!"
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
    "name": "ClaimListHeaderWaterfallRefetchQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "ClaimListHeaderWaterfall_WaterfallFilters"
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ClaimListHeaderWaterfallRefetchQuery",
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
      "derivedFrom": "ClaimListHeaderWaterfall_WaterfallFilters",
      "isRefetchableQuery": true
    },
    "name": "ClaimListHeaderWaterfallRefetchQuery",
    "operationKind": "query",
    "text": "query ClaimListHeaderWaterfallRefetchQuery(\n  $waterfallWhere: ClaimStatusVolumeWhere!\n) {\n  ...ClaimListHeaderWaterfall_WaterfallFilters\n}\n\nfragment ClaimListHeaderWaterfall_WaterfallFilters on Query {\n  currentUser {\n    waterfallFilters(where: $waterfallWhere) {\n      id\n      items {\n        value: id\n        label\n        claimCount\n        color\n        id\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '9646500336aa2276f8b95f7504dff66d';
export default node;
