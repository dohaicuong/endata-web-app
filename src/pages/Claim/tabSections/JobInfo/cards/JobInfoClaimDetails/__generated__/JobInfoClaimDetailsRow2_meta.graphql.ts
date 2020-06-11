/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type UserType = "Administrator" | "Builder" | "ContentSupplier" | "Restorer" | "%future added value";
export type JobInfoClaimDetailsRow2_meta = {
    readonly currentUser: {
        readonly userType: UserType;
    } | null;
    readonly " $refType": "JobInfoClaimDetailsRow2_meta";
};
export type JobInfoClaimDetailsRow2_meta$data = JobInfoClaimDetailsRow2_meta;
export type JobInfoClaimDetailsRow2_meta$key = {
    readonly " $data"?: JobInfoClaimDetailsRow2_meta$data;
    readonly " $fragmentRefs": FragmentRefs<"JobInfoClaimDetailsRow2_meta">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "JobInfoClaimDetailsRow2_meta",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "AuthenticatedUser",
      "kind": "LinkedField",
      "name": "currentUser",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "userType",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query"
};
(node as any).hash = 'bd4221ab03bedacfe956a30bd5fdf246';
export default node;
