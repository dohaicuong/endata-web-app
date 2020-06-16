/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type PdsReferenceComboBox_data = {
    readonly pdsReferences: ReadonlyArray<{
        readonly label: string;
        readonly value: string;
    } | null> | null;
    readonly " $refType": "PdsReferenceComboBox_data";
};
export type PdsReferenceComboBox_data$data = PdsReferenceComboBox_data;
export type PdsReferenceComboBox_data$key = {
    readonly " $data"?: PdsReferenceComboBox_data$data;
    readonly " $fragmentRefs": FragmentRefs<"PdsReferenceComboBox_data">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "companyIds",
      "type": "[ID!]"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "PdsReferenceComboBox_data",
  "selections": [
    {
      "alias": "pdsReferences",
      "args": [
        {
          "fields": [
            {
              "kind": "Variable",
              "name": "insurers",
              "variableName": "companyIds"
            },
            {
              "kind": "Literal",
              "name": "subject",
              "value": "policyCovers"
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
(node as any).hash = 'b253789625ff0bf35f85cf73cbee1841';
export default node;
