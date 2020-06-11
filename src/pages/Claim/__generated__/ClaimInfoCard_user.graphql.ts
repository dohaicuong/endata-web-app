/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type UserType = "Administrator" | "Builder" | "ContentSupplier" | "Restorer" | "%future added value";
export type ClaimInfoCard_user = {
    readonly userType: UserType;
    readonly " $refType": "ClaimInfoCard_user";
};
export type ClaimInfoCard_user$data = ClaimInfoCard_user;
export type ClaimInfoCard_user$key = {
    readonly " $data"?: ClaimInfoCard_user$data;
    readonly " $fragmentRefs": FragmentRefs<"ClaimInfoCard_user">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ClaimInfoCard_user",
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
(node as any).hash = '8416ad055766f2e6b771027ea4c60e00';
export default node;
