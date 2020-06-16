/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type JobInfoCustomerInfoRow2_claim = {
    readonly insurer: {
        readonly setupcustomerlogin: number | null;
    } | null;
    readonly incidentDetail: {
        readonly riskAddress: {
            readonly line1: string | null;
            readonly line2: string | null;
        } | null;
    } | null;
    readonly requireCustomLogin: boolean | null;
    readonly customLoginEmail: string | null;
    readonly " $refType": "JobInfoCustomerInfoRow2_claim";
};
export type JobInfoCustomerInfoRow2_claim$data = JobInfoCustomerInfoRow2_claim;
export type JobInfoCustomerInfoRow2_claim$key = {
    readonly " $data"?: JobInfoCustomerInfoRow2_claim$data;
    readonly " $fragmentRefs": FragmentRefs<"JobInfoCustomerInfoRow2_claim">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "JobInfoCustomerInfoRow2_claim",
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
          "name": "setupcustomerlogin",
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
              "name": "line1",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "line2",
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
      "name": "requireCustomLogin",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "customLoginEmail",
      "storageKey": null
    }
  ],
  "type": "ClaimJob"
};
(node as any).hash = '6e9b744f410997b940f919a6a7317bf5';
export default node;
