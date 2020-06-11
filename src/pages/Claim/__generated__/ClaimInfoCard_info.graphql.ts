/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type PortfolioType = "Building" | "Contents" | "Restoration" | "%future added value";
export type State = "ACT" | "NSW" | "NT" | "QLD" | "SA" | "TAS" | "VIC" | "WA" | "%future added value";
export type ClaimInfoCard_info = {
    readonly insurer: {
        readonly companyName: string;
        readonly policyTypeSuppliersView: boolean | null;
        readonly policyCoverSuppliersView: boolean | null;
    } | null;
    readonly refNumber: string;
    readonly incidentDetail: {
        readonly riskAddress: {
            readonly line1: string | null;
            readonly suburb: string | null;
            readonly state: State | null;
            readonly postcode: string | null;
        } | null;
        readonly eventType: {
            readonly eventName: string;
        } | null;
        readonly cATCode: {
            readonly cATCodeName: string;
        } | null;
    } | null;
    readonly insured: {
        readonly name: string | null;
        readonly phone1: string | null;
        readonly phone2: string | null;
        readonly phone3: string | null;
        readonly email: string | null;
    } | null;
    readonly lodgeDate: unknown | null;
    readonly policyType: {
        readonly policyTypeName: string;
    } | null;
    readonly policyCover: {
        readonly policyCoverName: string;
    } | null;
    readonly building: {
        readonly claimStatus: {
            readonly statusName: string | null;
        } | null;
        readonly scopingSupplier: {
            readonly companyName: string;
            readonly companyPhone1: string | null;
            readonly companyPhone2: string | null;
        } | null;
        readonly authorisedSupplier: {
            readonly companyName: string;
            readonly companyPhone1: string | null;
            readonly companyPhone2: string | null;
        } | null;
        readonly jobSuppliers: ReadonlyArray<{
            readonly quote: {
                readonly supplier: {
                    readonly companyName: string;
                } | null;
                readonly quoteStatus: {
                    readonly statusName: string | null;
                } | null;
            } | null;
        } | null> | null;
        readonly toCollectExcess: boolean | null;
        readonly excessValue: number | null;
    } | null;
    readonly restoration: {
        readonly claimStatus: {
            readonly statusName: string | null;
        } | null;
        readonly scopingSupplier: {
            readonly companyName: string;
            readonly companyPhone1: string | null;
            readonly companyPhone2: string | null;
        } | null;
        readonly authorisedSupplier: {
            readonly companyName: string;
            readonly companyPhone1: string | null;
            readonly companyPhone2: string | null;
        } | null;
        readonly jobSuppliers: ReadonlyArray<{
            readonly quote: {
                readonly supplier: {
                    readonly companyName: string;
                } | null;
                readonly quoteStatus: {
                    readonly statusName: string | null;
                } | null;
            } | null;
        } | null> | null;
        readonly toCollectExcess: boolean | null;
        readonly excessValue: number | null;
    } | null;
    readonly contents: {
        readonly portfolioType: PortfolioType | null;
        readonly claimStatus: {
            readonly statusName: string | null;
        } | null;
        readonly toCollectExcess: boolean | null;
        readonly excessValue: number | null;
    } | null;
    readonly " $refType": "ClaimInfoCard_info";
};
export type ClaimInfoCard_info$data = ClaimInfoCard_info;
export type ClaimInfoCard_info$key = {
    readonly " $data"?: ClaimInfoCard_info$data;
    readonly " $fragmentRefs": FragmentRefs<"ClaimInfoCard_info">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "companyName",
  "storageKey": null
},
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
  "concreteType": "ClaimStatus",
  "kind": "LinkedField",
  "name": "claimStatus",
  "plural": false,
  "selections": (v1/*: any*/),
  "storageKey": null
},
v3 = [
  (v0/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "companyPhone1",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "companyPhone2",
    "storageKey": null
  }
],
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "toCollectExcess",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "excessValue",
  "storageKey": null
},
v6 = [
  (v2/*: any*/),
  {
    "alias": null,
    "args": null,
    "concreteType": "Company",
    "kind": "LinkedField",
    "name": "scopingSupplier",
    "plural": false,
    "selections": (v3/*: any*/),
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "Company",
    "kind": "LinkedField",
    "name": "authorisedSupplier",
    "plural": false,
    "selections": (v3/*: any*/),
    "storageKey": null
  },
  {
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
        "concreteType": "JobQuote",
        "kind": "LinkedField",
        "name": "quote",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Company",
            "kind": "LinkedField",
            "name": "supplier",
            "plural": false,
            "selections": [
              (v0/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": "quoteStatus",
            "args": null,
            "concreteType": "ClaimStatus",
            "kind": "LinkedField",
            "name": "quoteJobStatus",
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
  (v4/*: any*/),
  (v5/*: any*/)
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ClaimInfoCard_info",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Company",
      "kind": "LinkedField",
      "name": "insurer",
      "plural": false,
      "selections": [
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "policyTypeSuppliersView",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "policyCoverSuppliersView",
          "storageKey": null
        }
      ],
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
              "name": "line1",
              "storageKey": null
            },
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
              "name": "postcode",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "IncidentEvent",
          "kind": "LinkedField",
          "name": "eventType",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "eventName",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "CATCode",
          "kind": "LinkedField",
          "name": "cATCode",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "cATCodeName",
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
      "kind": "ScalarField",
      "name": "lodgeDate",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "PolicyType",
      "kind": "LinkedField",
      "name": "policyType",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "policyTypeName",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "PolicyCover",
      "kind": "LinkedField",
      "name": "policyCover",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "policyCoverName",
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
      "name": "building",
      "plural": false,
      "selections": (v6/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "ClaimPortfolio",
      "kind": "LinkedField",
      "name": "restoration",
      "plural": false,
      "selections": (v6/*: any*/),
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
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "portfolioType",
          "storageKey": null
        },
        (v2/*: any*/),
        (v4/*: any*/),
        (v5/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "type": "ClaimJob"
};
})();
(node as any).hash = '08c49ef6cc81d92248d21f4c1c5330c3';
export default node;
