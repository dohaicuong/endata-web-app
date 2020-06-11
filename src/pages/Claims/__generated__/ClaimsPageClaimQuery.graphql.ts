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
export type ClaimsPageClaimQueryVariables = {
    where?: ClaimJobFilter | null;
    count: number;
    cursor: string;
};
export type ClaimsPageClaimQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"ClaimList_claims">;
};
export type ClaimsPageClaimQuery = {
    readonly response: ClaimsPageClaimQueryResponse;
    readonly variables: ClaimsPageClaimQueryVariables;
};



/*
query ClaimsPageClaimQuery(
  $where: ClaimJobFilter
  $count: Int!
  $cursor: String!
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
    "name": "where",
    "type": "ClaimJobFilter"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "count",
    "type": "Int!"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "cursor",
    "type": "String!"
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
    "name": "ClaimsPageClaimQuery",
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
    "name": "ClaimsPageClaimQuery",
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
    "metadata": {},
    "name": "ClaimsPageClaimQuery",
    "operationKind": "query",
    "text": "query ClaimsPageClaimQuery(\n  $where: ClaimJobFilter\n  $count: Int!\n  $cursor: String!\n) {\n  ...ClaimList_claims\n}\n\nfragment ClaimList_claims on Query {\n  claimJobs(first: $count, after: $cursor, where: $where) {\n    edges {\n      node {\n        id\n        insurer {\n          companyName\n        }\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '739b47a09ed0bdcda60bf1f5839440b8';
export default node;
