/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type JobInfoCustomerInfoRow4_data = {
    readonly " $fragmentRefs": FragmentRefs<"ClaimFinalise_data" | "CashSettle_data">;
    readonly " $refType": "JobInfoCustomerInfoRow4_data";
};
export type JobInfoCustomerInfoRow4_data$data = JobInfoCustomerInfoRow4_data;
export type JobInfoCustomerInfoRow4_data$key = {
    readonly " $data"?: JobInfoCustomerInfoRow4_data$data;
    readonly " $fragmentRefs": FragmentRefs<"JobInfoCustomerInfoRow4_data">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "JobInfoCustomerInfoRow4_data",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ClaimFinalise_data"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CashSettle_data"
    }
  ],
  "type": "Query"
};
(node as any).hash = 'aaf602e0356fdde83a2cd858e265aef8';
export default node;
