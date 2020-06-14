/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type JobInfoActions_actions = {
    readonly updateClaim: {
        readonly label: string;
        readonly isDisabled: boolean;
        readonly isDisplay: boolean;
    };
    readonly " $refType": "JobInfoActions_actions";
};
export type JobInfoActions_actions$data = JobInfoActions_actions;
export type JobInfoActions_actions$key = {
    readonly " $data"?: JobInfoActions_actions$data;
    readonly " $fragmentRefs": FragmentRefs<"JobInfoActions_actions">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "JobInfoActions_actions",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "ActionControl",
      "kind": "LinkedField",
      "name": "updateClaim",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "label",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "isDisabled",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "isDisplay",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "ClaimJobAction"
};
(node as any).hash = '9414f6e7c32ed57cccd43555f7716956';
export default node;
