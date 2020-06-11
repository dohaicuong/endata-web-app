/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type QuotingBuildersCard_meta = {
    readonly quotesperclaim: number | null;
    readonly " $refType": "QuotingBuildersCard_meta";
};
export type QuotingBuildersCard_meta$data = QuotingBuildersCard_meta;
export type QuotingBuildersCard_meta$key = {
    readonly " $data"?: QuotingBuildersCard_meta$data;
    readonly " $fragmentRefs": FragmentRefs<"QuotingBuildersCard_meta">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "QuotingBuildersCard_meta",
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
(node as any).hash = '56def5fc20b2afcfef9dcd24b8125793';
export default node;
