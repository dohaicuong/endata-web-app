/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type DocumentView_claimDocumentsData = {
    readonly url: string;
    readonly " $refType": "DocumentView_claimDocumentsData";
};
export type DocumentView_claimDocumentsData$data = DocumentView_claimDocumentsData;
export type DocumentView_claimDocumentsData$key = {
    readonly " $data"?: DocumentView_claimDocumentsData$data;
    readonly " $fragmentRefs": FragmentRefs<"DocumentView_claimDocumentsData">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DocumentView_claimDocumentsData",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "url",
      "storageKey": null
    }
  ],
  "type": "ClaimDocument"
};
(node as any).hash = 'a1e002edcc38dc29339723970580969f';
export default node;
