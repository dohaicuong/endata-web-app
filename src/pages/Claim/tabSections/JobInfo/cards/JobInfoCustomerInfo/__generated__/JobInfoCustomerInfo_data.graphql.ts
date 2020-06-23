/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type JobInfoCustomerInfo_data = {
    readonly " $fragmentRefs": FragmentRefs<"JobInfoCustomerInfoRow4_data">;
    readonly " $refType": "JobInfoCustomerInfo_data";
};
export type JobInfoCustomerInfo_data$data = JobInfoCustomerInfo_data;
export type JobInfoCustomerInfo_data$key = {
    readonly " $data"?: JobInfoCustomerInfo_data$data;
    readonly " $fragmentRefs": FragmentRefs<"JobInfoCustomerInfo_data">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "JobInfoCustomerInfo_data",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "JobInfoCustomerInfoRow4_data"
    }
  ],
  "type": "Query"
};
(node as any).hash = 'fa9697fc9b58f6b6f7729d197ee02191';
export default node;
