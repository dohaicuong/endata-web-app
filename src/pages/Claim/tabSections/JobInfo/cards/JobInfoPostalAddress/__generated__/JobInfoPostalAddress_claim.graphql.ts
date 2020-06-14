/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type State = "ACT" | "NSW" | "NT" | "QLD" | "SA" | "TAS" | "VIC" | "WA" | "%future added value";
export type JobInfoPostalAddress_claim = {
    readonly insured: {
        readonly postalAddress: {
            readonly line1: string | null;
            readonly line2: string | null;
            readonly suburb: string | null;
            readonly state: State | null;
            readonly postcode: string | null;
        } | null;
    } | null;
    readonly " $refType": "JobInfoPostalAddress_claim";
};
export type JobInfoPostalAddress_claim$data = JobInfoPostalAddress_claim;
export type JobInfoPostalAddress_claim$key = {
    readonly " $data"?: JobInfoPostalAddress_claim$data;
    readonly " $fragmentRefs": FragmentRefs<"JobInfoPostalAddress_claim">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "JobInfoPostalAddress_claim",
  "selections": [
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
          "concreteType": "Address",
          "kind": "LinkedField",
          "name": "postalAddress",
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
        }
      ],
      "storageKey": null
    }
  ],
  "type": "ClaimJob"
};
(node as any).hash = '09758358380f9d95902096d28e4f3295';
export default node;
