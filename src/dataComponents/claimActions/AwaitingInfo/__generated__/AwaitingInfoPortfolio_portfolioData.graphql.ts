/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type AwaitingInfoPortfolio_portfolioData = {
    readonly claimStatus: {
        readonly statusId: number;
    } | null;
    readonly " $refType": "AwaitingInfoPortfolio_portfolioData";
};
export type AwaitingInfoPortfolio_portfolioData$data = AwaitingInfoPortfolio_portfolioData;
export type AwaitingInfoPortfolio_portfolioData$key = {
    readonly " $data"?: AwaitingInfoPortfolio_portfolioData$data;
    readonly " $fragmentRefs": FragmentRefs<"AwaitingInfoPortfolio_portfolioData">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AwaitingInfoPortfolio_portfolioData",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "ClaimStatus",
      "kind": "LinkedField",
      "name": "claimStatus",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "statusId",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "ClaimPortfolio"
};
(node as any).hash = '7a642cf18cb4ff9e1fec84bf2b165567';
export default node;
