/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type State = "ACT" | "NSW" | "NT" | "QLD" | "SA" | "TAS" | "VIC" | "WA" | "%future added value";
export type ClaimListBody_claims = {
    readonly claimJobs: {
        readonly totalCount: number | null;
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
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
                    readonly phone1: string | null;
                    readonly phone2: string | null;
                    readonly phone3: string | null;
                    readonly email: string | null;
                } | null;
                readonly incidentDetail: {
                    readonly riskAddress: {
                        readonly suburb: string | null;
                        readonly state: State | null;
                        readonly line1: string | null;
                        readonly postcode: string | null;
                    } | null;
                    readonly incidentDate: unknown | null;
                } | null;
            } | null;
        } | null> | null;
    } | null;
    readonly " $refType": "ClaimListBody_claims";
};
export type ClaimListBody_claims$data = ClaimListBody_claims;
export type ClaimListBody_claims$key = {
    readonly " $data"?: ClaimListBody_claims$data;
    readonly " $fragmentRefs": FragmentRefs<"ClaimListBody_claims">;
};



const node: ReaderFragment = (function(){
var v0 = [
  "claimJobs"
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
      "kind": "RootArgument",
      "name": "count",
      "type": "Int"
    },
    {
      "kind": "RootArgument",
      "name": "cursor",
      "type": "String"
    },
    {
      "kind": "RootArgument",
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
      "operation": require('./ClaimListPaginationQuery.graphql.ts')
    }
  },
  "name": "ClaimListBody_claims",
  "selections": [
    {
      "alias": "claimJobs",
      "args": [
        {
          "kind": "Variable",
          "name": "where",
          "variableName": "where"
        }
      ],
      "concreteType": "ClaimJobConnection",
      "kind": "LinkedField",
      "name": "__ClaimListBody_query_claimJobs_connection",
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
                  "name": "id",
                  "storageKey": null
                },
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
                    },
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "phone1",
                      "storageKey": null
                    },
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "phone2",
                      "storageKey": null
                    },
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "phone3",
                      "storageKey": null
                    },
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "email",
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
                        },
                        {
                          "alias": null,
                          "args": null,
                          "kind": "ScalarField",
                          "name": "line1",
                          "storageKey": null
                        },
                        {
                          "alias": null,
                          "args": null,
                          "kind": "ScalarField",
                          "name": "postcode",
                          "storageKey": null
                        }
                      ],
                      "storageKey": null
                    },
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "incidentDate",
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
(node as any).hash = 'ae2537456667c373036eb1162f110791';
export default node;
