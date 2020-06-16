/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CatCodeComboBox_data = {
    readonly catCodes: ReadonlyArray<{
        readonly label: string;
        readonly value: string;
    } | null> | null;
    readonly " $refType": "CatCodeComboBox_data";
};
export type CatCodeComboBox_data$data = CatCodeComboBox_data;
export type CatCodeComboBox_data$key = {
    readonly " $data"?: CatCodeComboBox_data$data;
    readonly " $fragmentRefs": FragmentRefs<"CatCodeComboBox_data">;
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
  "name": "CatCodeComboBox_data",
  "selections": [
    {
      "alias": "catCodes",
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
              "value": "catCodes"
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
(node as any).hash = '69c0cbc9fd8ac61db48d7a3335f5ea76';
export default node;
