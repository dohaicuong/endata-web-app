/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CustomerDetailsCard_company = {
    readonly removeHabitableAsbestos: boolean | null;
    readonly setupcustomerlogin: number | null;
    readonly hideCategoryOfClaim: boolean | null;
    readonly " $refType": "CustomerDetailsCard_company";
};
export type CustomerDetailsCard_company$data = CustomerDetailsCard_company;
export type CustomerDetailsCard_company$key = {
    readonly " $data"?: CustomerDetailsCard_company$data;
    readonly " $fragmentRefs": FragmentRefs<"CustomerDetailsCard_company">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CustomerDetailsCard_company",
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
      "name": "setupcustomerlogin",
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
  "type": "CompanyProfile"
};
(node as any).hash = 'd18422cedc6fc75b3a080526362e98ff';
export default node;
