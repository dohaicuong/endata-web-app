/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ClaimCategory = "NonUrgent" | "SemiUrgent" | "Urgent" | "%future added value";
export type State = "ACT" | "NSW" | "NT" | "QLD" | "SA" | "TAS" | "VIC" | "WA" | "%future added value";
export type JobInfoCustomerInfoRow3_claim = {
    readonly incidentDetail: {
        readonly riskAddress: {
            readonly suburb: string | null;
            readonly state: State | null;
            readonly postcode: string | null;
        } | null;
        readonly habitableProperty: boolean | null;
        readonly category: ClaimCategory | null;
    } | null;
    readonly insurer: {
        readonly removeHabitableAsbestos: boolean | null;
        readonly hideCategoryOfClaim: boolean | null;
    } | null;
    readonly " $refType": "JobInfoCustomerInfoRow3_claim";
};
export type JobInfoCustomerInfoRow3_claim$data = JobInfoCustomerInfoRow3_claim;
export type JobInfoCustomerInfoRow3_claim$key = {
    readonly " $data"?: JobInfoCustomerInfoRow3_claim$data;
    readonly " $fragmentRefs": FragmentRefs<"JobInfoCustomerInfoRow3_claim">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "JobInfoCustomerInfoRow3_claim",
  "selections": [
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
          "name": "habitableProperty",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "category",
          "storageKey": null
        }
      ],
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
          "name": "removeHabitableAsbestos",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "hideCategoryOfClaim",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "ClaimJob"
};
(node as any).hash = '0d8f2609a99d87dfb82ef9f9771c4723';
export default node;
