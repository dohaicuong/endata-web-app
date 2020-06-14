/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type DistributorComboBox_data = {
    readonly distributors: ReadonlyArray<{
        readonly label: string;
        readonly value: string;
    } | null> | null;
    readonly " $refType": "DistributorComboBox_data";
};
export type DistributorComboBox_data$data = DistributorComboBox_data;
export type DistributorComboBox_data$key = {
    readonly " $data"?: DistributorComboBox_data$data;
    readonly " $fragmentRefs": FragmentRefs<"DistributorComboBox_data">;
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
  "name": "DistributorComboBox_data",
  "selections": [
    {
      "alias": "distributors",
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
              "value": "policyTypes"
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
(node as any).hash = 'dc9e14529278bd7994c26a243ac7d4bb';
export default node;
