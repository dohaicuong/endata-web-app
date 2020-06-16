/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type JobInfoTenantInfo_claim = {
    readonly tenantDetails: {
        readonly name: string | null;
        readonly phone1: string | null;
        readonly phone2: string | null;
        readonly phone3: string | null;
    } | null;
    readonly " $refType": "JobInfoTenantInfo_claim";
};
export type JobInfoTenantInfo_claim$data = JobInfoTenantInfo_claim;
export type JobInfoTenantInfo_claim$key = {
    readonly " $data"?: JobInfoTenantInfo_claim$data;
    readonly " $fragmentRefs": FragmentRefs<"JobInfoTenantInfo_claim">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "JobInfoTenantInfo_claim",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Contact",
      "kind": "LinkedField",
      "name": "tenantDetails",
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
        }
      ],
      "storageKey": null
    }
  ],
  "type": "ClaimJob"
};
(node as any).hash = '0d963b6bef6beedc14f9a80e9cf28e67';
export default node;
