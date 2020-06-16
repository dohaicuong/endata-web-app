/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ExternalLossAdjusterComboBox_data = {
    readonly adjusters: ReadonlyArray<{
        readonly label: string;
        readonly value: string;
    } | null> | null;
    readonly " $refType": "ExternalLossAdjusterComboBox_data";
};
export type ExternalLossAdjusterComboBox_data$data = ExternalLossAdjusterComboBox_data;
export type ExternalLossAdjusterComboBox_data$key = {
    readonly " $data"?: ExternalLossAdjusterComboBox_data$data;
    readonly " $fragmentRefs": FragmentRefs<"ExternalLossAdjusterComboBox_data">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "companyIds",
      "type": "[ID!]"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "postcode",
      "type": "String"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "refetch": {
      "connection": null,
      "fragmentPathInResult": [],
      "operation": require('./ExternalLossAdjusterComboBoxRefetchQuery.graphql.ts')
    }
  },
  "name": "ExternalLossAdjusterComboBox_data",
  "selections": [
    {
      "alias": "adjusters",
      "args": [
        {
          "fields": [
            {
              "kind": "Variable",
              "name": "insurers",
              "variableName": "companyIds"
            },
            {
              "kind": "Variable",
              "name": "postcode",
              "variableName": "postcode"
            },
            {
              "kind": "Literal",
              "name": "subject",
              "value": "adjusters"
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
(node as any).hash = 'a86a8db9f43a2847d1e44aec0e06022d';
export default node;
