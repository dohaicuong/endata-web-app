/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type State = "ACT" | "NSW" | "NT" | "QLD" | "SA" | "TAS" | "VIC" | "WA" | "%future added value";
export type ClaimsTable_claims = {
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
    readonly " $refType": "ClaimsTable_claims";
};
export type ClaimsTable_claims$data = ClaimsTable_claims;
export type ClaimsTable_claims$key = {
    readonly " $data"?: ClaimsTable_claims$data;
    readonly " $fragmentRefs": FragmentRefs<"ClaimsTable_claims">;
};



const node: ReaderFragment = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "companyName",
    "storageKey": null
  }
],
v1 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "statusName",
    "storageKey": null
  }
],
v2 = {
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
          "selections": (v1/*: any*/),
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "concreteType": "ClaimStatus",
  "kind": "LinkedField",
  "name": "claimStatus",
  "plural": false,
  "selections": (v1/*: any*/),
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "concreteType": "Company",
  "kind": "LinkedField",
  "name": "authorisedSupplier",
  "plural": false,
  "selections": (v0/*: any*/),
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "concreteType": "Company",
  "kind": "LinkedField",
  "name": "scopingSupplier",
  "plural": false,
  "selections": (v0/*: any*/),
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ClaimsTable_claims",
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
              "selections": (v0/*: any*/),
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
                (v2/*: any*/),
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
                (v3/*: any*/),
                (v4/*: any*/),
                (v5/*: any*/),
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
                (v2/*: any*/),
                (v3/*: any*/)
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
                (v2/*: any*/),
                (v3/*: any*/),
                (v4/*: any*/),
                (v5/*: any*/)
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
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "ClaimJobConnection"
};
})();
(node as any).hash = 'ed8bce1fbcd4b83653339f6d7e71d7cd';
export default node;
