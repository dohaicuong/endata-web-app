/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type State = "ACT" | "NSW" | "NT" | "QLD" | "SA" | "TAS" | "VIC" | "WA" | "%future added value";
export type UserType = "Administrator" | "Builder" | "ContentSupplier" | "Restorer" | "%future added value";
export type ClaimListTable_data = {
    readonly currentUser: {
        readonly userType: UserType;
    } | null;
    readonly claimConnection: {
        readonly totalCount: number | null;
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly hasBuilding: boolean;
                readonly hasContents: boolean;
                readonly hasRestoration: boolean;
                readonly refNumber: string;
                readonly insurer: {
                    readonly companyName: string;
                } | null;
                readonly lodgeDate: unknown | null;
                readonly building: {
                    readonly jobSuppliers: ReadonlyArray<{
                        readonly requestDate: unknown | null;
                        readonly requestType: string | null;
                        readonly quote: {
                            readonly total: unknown | null;
                            readonly quoteStatus: {
                                readonly statusName: string | null;
                            } | null;
                        } | null;
                    } | null> | null;
                    readonly authorisedValue: unknown | null;
                    readonly scopedValue: unknown | null;
                    readonly claimStatus: {
                        readonly statusName: string | null;
                    } | null;
                    readonly authorisedSupplier: {
                        readonly companyName: string;
                    } | null;
                    readonly scopingSupplier: {
                        readonly companyName: string;
                    } | null;
                    readonly daysAtStatus: number | null;
                } | null;
                readonly contents: {
                    readonly jobSuppliers: ReadonlyArray<{
                        readonly requestDate: unknown | null;
                        readonly requestType: string | null;
                        readonly quote: {
                            readonly total: unknown | null;
                            readonly quoteStatus: {
                                readonly statusName: string | null;
                            } | null;
                        } | null;
                    } | null> | null;
                    readonly claimStatus: {
                        readonly statusName: string | null;
                    } | null;
                } | null;
                readonly restoration: {
                    readonly jobSuppliers: ReadonlyArray<{
                        readonly requestDate: unknown | null;
                        readonly requestType: string | null;
                        readonly quote: {
                            readonly total: unknown | null;
                            readonly quoteStatus: {
                                readonly statusName: string | null;
                            } | null;
                        } | null;
                    } | null> | null;
                    readonly claimStatus: {
                        readonly statusName: string | null;
                    } | null;
                    readonly authorisedSupplier: {
                        readonly companyName: string;
                    } | null;
                    readonly scopingSupplier: {
                        readonly companyName: string;
                    } | null;
                } | null;
                readonly insured: {
                    readonly name: string | null;
                } | null;
                readonly incidentDetail: {
                    readonly riskAddress: {
                        readonly suburb: string | null;
                        readonly state: State | null;
                    } | null;
                } | null;
            } | null;
        } | null> | null;
    } | null;
    readonly " $refType": "ClaimListTable_data";
};
export type ClaimListTable_data$data = ClaimListTable_data;
export type ClaimListTable_data$key = {
    readonly " $data"?: ClaimListTable_data$data;
    readonly " $fragmentRefs": FragmentRefs<"ClaimListTable_data">;
};



const node: ReaderFragment = (function(){
var v0 = [
  "claimConnection"
],
v1 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "companyName",
    "storageKey": null
  }
],
v2 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "statusName",
    "storageKey": null
  }
],
v3 = {
  "alias": null,
  "args": null,
  "concreteType": "JobSupplier",
  "kind": "LinkedField",
  "name": "jobSuppliers",
  "plural": true,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "requestDate",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "requestType",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "JobQuote",
      "kind": "LinkedField",
      "name": "quote",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "total",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "ClaimStatus",
          "kind": "LinkedField",
          "name": "quoteStatus",
          "plural": false,
          "selections": (v2/*: any*/),
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "concreteType": "ClaimStatus",
  "kind": "LinkedField",
  "name": "claimStatus",
  "plural": false,
  "selections": (v2/*: any*/),
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "concreteType": "Company",
  "kind": "LinkedField",
  "name": "authorisedSupplier",
  "plural": false,
  "selections": (v1/*: any*/),
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "concreteType": "Company",
  "kind": "LinkedField",
  "name": "scopingSupplier",
  "plural": false,
  "selections": (v1/*: any*/),
  "storageKey": null
};
return {
  "argumentDefinitions": [
    {
      "defaultValue": 30,
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
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "cursor",
        "direction": "forward",
        "path": (v0/*: any*/)
      }
    ],
    "refetch": {
      "connection": {
        "forward": {
          "count": "count",
          "cursor": "cursor"
        },
        "backward": null,
        "path": (v0/*: any*/)
      },
      "fragmentPathInResult": [],
      "operation": require('./ClaimListTablePaginationQuery.graphql.ts')
    }
  },
  "name": "ClaimListTable_data",
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
          "kind": "ScalarField",
          "name": "userType",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": "claimConnection",
      "args": [
        {
          "kind": "Variable",
          "name": "where",
          "variableName": "where"
        }
      ],
      "concreteType": "ClaimJobConnection",
      "kind": "LinkedField",
      "name": "__ClaimListTable_data_claimConnection_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "totalCount",
          "storageKey": null
        },
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
                  "name": "hasBuilding",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "hasContents",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "hasRestoration",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "refNumber",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "Company",
                  "kind": "LinkedField",
                  "name": "insurer",
                  "plural": false,
                  "selections": (v1/*: any*/),
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "lodgeDate",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "ClaimPortfolio",
                  "kind": "LinkedField",
                  "name": "building",
                  "plural": false,
                  "selections": [
                    (v3/*: any*/),
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "authorisedValue",
                      "storageKey": null
                    },
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "scopedValue",
                      "storageKey": null
                    },
                    (v4/*: any*/),
                    (v5/*: any*/),
                    (v6/*: any*/),
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "daysAtStatus",
                      "storageKey": null
                    }
                  ],
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "ClaimPortfolio",
                  "kind": "LinkedField",
                  "name": "contents",
                  "plural": false,
                  "selections": [
                    (v3/*: any*/),
                    (v4/*: any*/)
                  ],
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "ClaimPortfolio",
                  "kind": "LinkedField",
                  "name": "restoration",
                  "plural": false,
                  "selections": [
                    (v3/*: any*/),
                    (v4/*: any*/),
                    (v5/*: any*/),
                    (v6/*: any*/)
                  ],
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "ContactDetail",
                  "kind": "LinkedField",
                  "name": "insured",
                  "plural": false,
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "name",
                      "storageKey": null
                    }
                  ],
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "IncidentDetail",
                  "kind": "LinkedField",
                  "name": "incidentDetail",
                  "plural": false,
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "concreteType": "Address",
                      "kind": "LinkedField",
                      "name": "riskAddress",
                      "plural": false,
                      "selections": [
                        {
                          "alias": null,
                          "args": null,
                          "kind": "ScalarField",
                          "name": "suburb",
                          "storageKey": null
                        },
                        {
                          "alias": null,
                          "args": null,
                          "kind": "ScalarField",
                          "name": "state",
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
    }
  ],
  "type": "Query"
};
})();
(node as any).hash = 'c203b34aca569e01a7f9af27d06282d1';
export default node;
