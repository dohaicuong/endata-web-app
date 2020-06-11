/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type LeftSide_data = {
    readonly company: {
        readonly customisation: {
            readonly companyLogo: string | null;
        } | null;
    } | null;
    readonly privileges: {
        readonly menus: ReadonlyArray<{
            readonly nodeName: string;
        } | null> | null;
    } | null;
    readonly " $refType": "LeftSide_data";
};
export type LeftSide_data$data = LeftSide_data;
export type LeftSide_data$key = {
    readonly " $data"?: LeftSide_data$data;
    readonly " $fragmentRefs": FragmentRefs<"LeftSide_data">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "LeftSide_data",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "CompanyProfile",
      "kind": "LinkedField",
      "name": "company",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "CompanyCustomisation",
          "kind": "LinkedField",
          "name": "customisation",
          "plural": false,
          "selections": [
            {
              "alias": "companyLogo",
              "args": null,
              "kind": "ScalarField",
              "name": "displayCompanyLogo",
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
(node as any).hash = 'd4e810971bf1417844a6c0352b05848d';
export default node;
