/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type LossAdjuster_options = {
    readonly managers: ReadonlyArray<{
        readonly label: string;
        readonly value: string;
    } | null> | null;
    readonly " $refType": "LossAdjuster_options";
};
export type LossAdjuster_options$data = LossAdjuster_options;
export type LossAdjuster_options$key = {
    readonly " $data"?: LossAdjuster_options$data;
    readonly " $fragmentRefs": FragmentRefs<"LossAdjuster_options">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "companyId",
      "type": "[ID!]"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "LossAdjuster_options",
  "selections": [
    {
      "alias": "managers",
      "args": [
        {
          "fields": [
            {
              "kind": "Variable",
              "name": "insurers",
              "variableName": "companyId"
            },
            {
              "kind": "Literal",
              "name": "subject",
              "value": "managers"
            }
          ],
          "kind": "ObjectValue",
          "name": "where"
        }
      ],
      "concreteType": "FilterOption",
      "kind": "LinkedField",
      "name": "claimFilterOptions",
      "plural": true,
      "selections": [
        {
          "alias": "label",
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "value",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query"
};
(node as any).hash = '55560e09d345c62c8db0502848d61808';
export default node;
