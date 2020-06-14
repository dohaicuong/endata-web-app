/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type JobInfo_claim = {
    readonly insurer: {
        readonly companyId: number;
    } | null;
    readonly incidentDetail: {
        readonly riskAddress: {
            readonly postcode: string | null;
        } | null;
    } | null;
    readonly building: {
        readonly scopingSupplier: {
            readonly companyId: number;
        } | null;
    } | null;
    readonly restoration: {
        readonly scopingSupplier: {
            readonly companyId: number;
        } | null;
    } | null;
    readonly view: {
        readonly actions: {
            readonly " $fragmentRefs": FragmentRefs<"JobInfoActions_actions">;
        };
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"JobInfoClaimDetails_claim" | "JobInfoCustomerInfo_claim" | "JobInfoPostalAddress_claim" | "JobInfoTenantInfo_claim" | "JobInfoClaimDescription_claim">;
    readonly " $refType": "JobInfo_claim";
};
export type JobInfo_claim$data = JobInfo_claim;
export type JobInfo_claim$key = {
    readonly " $data"?: JobInfo_claim$data;
    readonly " $fragmentRefs": FragmentRefs<"JobInfo_claim">;
};



const node: ReaderFragment = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "companyId",
    "storageKey": null
  }
],
v1 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Company",
    "kind": "LinkedField",
    "name": "scopingSupplier",
    "plural": false,
    "selections": (v0/*: any*/),
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "JobInfo_claim",
  "selections": [
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
              "name": "postcode",
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
      "concreteType": "ClaimPortfolio",
      "kind": "LinkedField",
      "name": "building",
      "plural": false,
      "selections": (v1/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "ClaimPortfolio",
      "kind": "LinkedField",
      "name": "restoration",
      "plural": false,
      "selections": (v1/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "ClaimJobView",
      "kind": "LinkedField",
      "name": "view",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "ClaimJobAction",
          "kind": "LinkedField",
          "name": "actions",
          "plural": false,
          "selections": [
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "JobInfoActions_actions"
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "JobInfoClaimDetails_claim"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "JobInfoCustomerInfo_claim"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "JobInfoPostalAddress_claim"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "JobInfoTenantInfo_claim"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "JobInfoClaimDescription_claim"
    }
  ],
  "type": "ClaimJob"
};
})();
(node as any).hash = '81bb1df398f817fc60ffabb3eb02e21a';
export default node;
