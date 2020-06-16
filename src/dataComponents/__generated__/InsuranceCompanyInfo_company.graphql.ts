/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type InsuranceCompanyInfo_company = {
    readonly companyName: string;
    readonly " $refType": "InsuranceCompanyInfo_company";
};
export type InsuranceCompanyInfo_company$data = InsuranceCompanyInfo_company;
export type InsuranceCompanyInfo_company$key = {
    readonly " $data"?: InsuranceCompanyInfo_company$data;
    readonly " $fragmentRefs": FragmentRefs<"InsuranceCompanyInfo_company">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "InsuranceCompanyInfo_company",
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
(node as any).hash = '67ece40057fb64a9587e250e53717c53';
export default node;
