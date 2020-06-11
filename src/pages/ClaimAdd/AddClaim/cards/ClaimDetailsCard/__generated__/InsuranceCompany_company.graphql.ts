/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type InsuranceCompany_company = {
    readonly companyName: string;
    readonly " $refType": "InsuranceCompany_company";
};
export type InsuranceCompany_company$data = InsuranceCompany_company;
export type InsuranceCompany_company$key = {
    readonly " $data"?: InsuranceCompany_company$data;
    readonly " $fragmentRefs": FragmentRefs<"InsuranceCompany_company">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "InsuranceCompany_company",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "companyName",
      "storageKey": null
    }
  ],
  "type": "CompanyProfile"
};
(node as any).hash = '37dba6b666504405e652745ffd380b25';
export default node;
