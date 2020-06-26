/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type AwaitingInfoPortfolio_data = {
    readonly " $fragmentRefs": FragmentRefs<"WaitForInfoForm_data">;
    readonly " $refType": "AwaitingInfoPortfolio_data";
};
export type AwaitingInfoPortfolio_data$data = AwaitingInfoPortfolio_data;
export type AwaitingInfoPortfolio_data$key = {
    readonly " $data"?: AwaitingInfoPortfolio_data$data;
    readonly " $fragmentRefs": FragmentRefs<"AwaitingInfoPortfolio_data">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AwaitingInfoPortfolio_data",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "WaitForInfoForm_data"
    }
  ],
  "type": "Query"
};
(node as any).hash = '655adabeeb9088cf69f2977b013f87f5';
export default node;
