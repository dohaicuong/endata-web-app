/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CashSettle_claim = {
    readonly id: string;
    readonly " $refType": "CashSettle_claim";
};
export type CashSettle_claim$data = CashSettle_claim;
export type CashSettle_claim$key = {
    readonly " $data"?: CashSettle_claim$data;
    readonly " $fragmentRefs": FragmentRefs<"CashSettle_claim">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CashSettle_claim",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "ClaimJob"
};
(node as any).hash = 'a7e9bd05f097a458ca1d1db4336af1fe';
export default node;
