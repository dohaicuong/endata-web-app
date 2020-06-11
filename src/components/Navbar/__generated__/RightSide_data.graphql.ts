/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type RightSide_data = {
    readonly privileges: {
        readonly menus: ReadonlyArray<{
            readonly nodeName: string;
        } | null> | null;
    } | null;
    readonly " $refType": "RightSide_data";
};
export type RightSide_data$data = RightSide_data;
export type RightSide_data$key = {
    readonly " $data"?: RightSide_data$data;
    readonly " $fragmentRefs": FragmentRefs<"RightSide_data">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RightSide_data",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "UserPrivileges",
      "kind": "LinkedField",
      "name": "privileges",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "PrivilegeMenu",
          "kind": "LinkedField",
          "name": "menus",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "nodeName",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "User"
};
(node as any).hash = '3d924050f70345f7a482abc2175459c4';
export default node;
