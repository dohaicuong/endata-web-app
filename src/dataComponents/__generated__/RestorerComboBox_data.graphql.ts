/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type RestorerComboBox_data = {
    readonly restorers: ReadonlyArray<{
        readonly label: string;
        readonly value: string;
    } | null> | null;
    readonly " $refType": "RestorerComboBox_data";
};
export type RestorerComboBox_data$data = RestorerComboBox_data;
export type RestorerComboBox_data$key = {
    readonly " $data"?: RestorerComboBox_data$data;
    readonly " $fragmentRefs": FragmentRefs<"RestorerComboBox_data">;
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
    },
    {
      "kind": "RootArgument",
      "name": "companyId",
      "type": "[ID!]"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "refetch": {
      "connection": null,
      "fragmentPathInResult": [],
      "operation": require('./RestorerComboBoxRefetchQuery.graphql.ts')
    }
  },
  "name": "RestorerComboBox_data",
  "selections": [
    {
      "alias": "restorers",
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
              "name": "portfolios",
              "value": [
                "Restoration"
              ]
            },
            {
              "kind": "Variable",
              "name": "postcode",
              "variableName": "postcode"
            },
            {
              "kind": "Literal",
              "name": "subject",
              "value": "suppliers"
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
(node as any).hash = '770f5be88ee2a80b6c3721b3f210920f';
export default node;
