/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type QuotingRestorersCard_meta = {
    readonly quotesperclaim: number | null;
    readonly " $refType": "QuotingRestorersCard_meta";
};
export type QuotingRestorersCard_meta$data = QuotingRestorersCard_meta;
export type QuotingRestorersCard_meta$key = {
    readonly " $data"?: QuotingRestorersCard_meta$data;
    readonly " $fragmentRefs": FragmentRefs<"QuotingRestorersCard_meta">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "QuotingRestorersCard_meta",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "quotesperclaim",
      "storageKey": null
    }
  ],
  "type": "CompanyProfile"
};
(node as any).hash = '8875cad6c0f7eeab854b0cfeff03facc';
export default node;
