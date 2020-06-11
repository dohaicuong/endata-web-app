/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type JobRecommendationStatus = "NotRecommended" | "Recommended" | "%future added value";
export type JobVariationStatus = "Approved" | "Pending" | "Rejected" | "Reset" | "%future added value";
export type PortfolioType = "Building" | "Contents" | "Restoration" | "%future added value";
export type QuoteRequestStatus = "AdditionalItems" | "AppointmentMade" | "AwaitingInfo" | "AwaitingInfoContents" | "ClaimFinalised" | "InitialCallMade" | "JobAuthorised" | "JobLost" | "NewClaims" | "OfferScopeAcc" | "QuoteSubmitted" | "WaitingQuotes" | "WaitingResult" | "WaitingScope" | "%future added value";
export type State = "ACT" | "NSW" | "NT" | "QLD" | "SA" | "TAS" | "VIC" | "WA" | "%future added value";
export type ClaimJobFilter = {
    id?: string | null;
    parentId?: string | null;
    subject?: string | null;
    createDateFrom?: unknown | null;
    createDateTo?: unknown | null;
    incidentDate?: unknown | null;
    incidentDateFrom?: unknown | null;
    incidentDateTo?: unknown | null;
    keyWords?: string | null;
    refNumber?: string | null;
    postcode?: string | null;
    managerTeams?: Array<string | null> | null;
    managers?: Array<string> | null;
    insurers?: Array<string> | null;
    adjusters?: Array<string> | null;
    catCodes?: Array<string> | null;
    eventTypes?: Array<string> | null;
    buildingSuppliers?: Array<string> | null;
    contentsSuppliers?: Array<string> | null;
    restorationSuppliers?: Array<string> | null;
    buildingStatus?: Array<string> | null;
    contentsStatus?: Array<string> | null;
    restorationStatus?: Array<string> | null;
    suppliers?: Array<string> | null;
    status?: Array<string> | null;
    internalAssessors?: Array<string> | null;
    jobStatuses?: Array<string> | null;
    claimStatusStageIds?: Array<string> | null;
    portfolios?: Array<PortfolioType | null> | null;
    states?: Array<State | null> | null;
    variationStatuses?: Array<JobVariationStatus | null> | null;
    requestStatuses?: Array<QuoteRequestStatus | null> | null;
    recommendationStatus?: Array<JobRecommendationStatus> | null;
    or?: ClaimJobFilter | null;
    and?: ClaimJobFilter | null;
    not?: ClaimJobFilter | null;
};
export type ClaimListPaginationQueryVariables = {
    count?: number | null;
    cursor?: string | null;
    where?: ClaimJobFilter | null;
};
export type ClaimListPaginationQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"ClaimList_claims">;
};
export type ClaimListPaginationQuery = {
    readonly response: ClaimListPaginationQueryResponse;
    readonly variables: ClaimListPaginationQueryVariables;
};



/*
query ClaimListPaginationQuery(
  $count: Int
  $cursor: String
  $where: ClaimJobFilter
) {
  ...ClaimList_claims
}

fragment ClaimList_claims on Query {
  claimJobs(first: $count, after: $cursor, where: $where) {
    edges {
      node {
        id
        insurer {
          companyName
        }
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "count",
    "type": "Int"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "cursor",
    "type": "String"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "where",
    "type": "ClaimJobFilter"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "cursor"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count"
  },
  {
    "kind": "Variable",
    "name": "where",
    "variableName": "where"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ClaimListPaginationQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "ClaimList_claims"
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ClaimListPaginationQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ClaimJobConnection",
        "kind": "LinkedField",
        "name": "claimJobs",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ClaimJobEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "ClaimJob",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "id",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Company",
                    "kind": "LinkedField",
                    "name": "insurer",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "companyName",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "__typename",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "cursor",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "PageInfo",
            "kind": "LinkedField",
            "name": "pageInfo",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "endCursor",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasNextPage",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v1/*: any*/),
        "filters": [
          "where"
        ],
        "handle": "connection",
        "key": "ClaimList_query_claimJobs",
        "kind": "LinkedHandle",
        "name": "claimJobs"
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {
      "derivedFrom": "ClaimList_claims",
      "isRefetchableQuery": true
    },
    "name": "ClaimListPaginationQuery",
    "operationKind": "query",
    "text": "query ClaimListPaginationQuery(\n  $count: Int\n  $cursor: String\n  $where: ClaimJobFilter\n) {\n  ...ClaimList_claims\n}\n\nfragment ClaimList_claims on Query {\n  claimJobs(first: $count, after: $cursor, where: $where) {\n    edges {\n      node {\n        id\n        insurer {\n          companyName\n        }\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'd38ff3aa92d37e0e21609d9daeab6697';
export default node;
