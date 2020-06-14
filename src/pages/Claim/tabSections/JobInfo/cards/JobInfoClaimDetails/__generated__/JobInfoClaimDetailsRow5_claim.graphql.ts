/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type JobInfoClaimDetailsRow5_claim = {
    readonly insurer: {
        readonly policyTypeSuppliersView: boolean | null;
        readonly policyCoverSuppliersView: boolean | null;
    } | null;
    readonly policyType: {
        readonly policyTypeId: unknown | null;
    } | null;
    readonly policyCover: {
        readonly policyCoverId: unknown | null;
    } | null;
    readonly restoration: {
        readonly toCollectExcess: boolean | null;
        readonly excessValue: number | null;
        readonly sumInsured: number;
    } | null;
    readonly " $refType": "JobInfoClaimDetailsRow5_claim";
};
export type JobInfoClaimDetailsRow5_claim$data = JobInfoClaimDetailsRow5_claim;
export type JobInfoClaimDetailsRow5_claim$key = {
    readonly " $data"?: JobInfoClaimDetailsRow5_claim$data;
    readonly " $fragmentRefs": FragmentRefs<"JobInfoClaimDetailsRow5_claim">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "JobInfoClaimDetailsRow5_claim",
  "selections": [
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
      "concreteType": "PolicyType",
      "kind": "LinkedField",
      "name": "policyType",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "policyTypeId",
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
          "name": "policyCoverId",
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
      "name": "restoration",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "toCollectExcess",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "excessValue",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "sumInsured",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "ClaimJob"
};
(node as any).hash = '09e22ae4a89022121d3d23d14a265480';
export default node;
