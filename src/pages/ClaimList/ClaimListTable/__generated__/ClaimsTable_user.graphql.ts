/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type UserType = "Administrator" | "Builder" | "ContentSupplier" | "Restorer" | "%future added value";
export type ClaimsTable_user = {
    readonly userType: UserType;
    readonly " $refType": "ClaimsTable_user";
};
export type ClaimsTable_user$data = ClaimsTable_user;
export type ClaimsTable_user$key = {
    readonly " $data"?: ClaimsTable_user$data;
    readonly " $fragmentRefs": FragmentRefs<"ClaimsTable_user">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ClaimsTable_user",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "userType",
      "storageKey": null
    }
  ],
  "type": "AuthenticatedUser"
};
(node as any).hash = '67f6d4331882239813fd7085da095118';
export default node;
