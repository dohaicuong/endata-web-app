/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ClaimDetailsCard_company = {
    readonly companyName: string;
    readonly contentsref: boolean | null;
    readonly quickrepair: boolean | null;
    readonly policyTypeSuppliersView: boolean | null;
    readonly policyCoverSuppliersView: boolean | null;
    readonly isToProvideSiteReportView: boolean;
    readonly useInternalAssessor: boolean;
    readonly enableMultipleRisks: boolean | null;
    readonly cm2nd: boolean | null;
    readonly " $fragmentRefs": FragmentRefs<"InsuranceCompanyInfo_company">;
    readonly " $refType": "ClaimDetailsCard_company";
};
export type ClaimDetailsCard_company$data = ClaimDetailsCard_company;
export type ClaimDetailsCard_company$key = {
    readonly " $data"?: ClaimDetailsCard_company$data;
    readonly " $fragmentRefs": FragmentRefs<"ClaimDetailsCard_company">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ClaimDetailsCard_company",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "companyName",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "contentsref",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "quickrepair",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "policyTypeSuppliersView",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "policyCoverSuppliersView",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isToProvideSiteReportView",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "useInternalAssessor",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "enableMultipleRisks",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "cm2nd",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "InsuranceCompanyInfo_company"
    }
  ],
  "type": "CompanyProfile"
};
(node as any).hash = '0e1b7c09b1c79bd2bee124697852f52c';
export default node;
