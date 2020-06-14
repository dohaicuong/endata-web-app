/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type SpecialistReviewComboBoxProps_data = {
    readonly internalAssessors: ReadonlyArray<{
        readonly label: string;
        readonly value: string;
    } | null> | null;
    readonly " $refType": "SpecialistReviewComboBoxProps_data";
};
export type SpecialistReviewComboBoxProps_data$data = SpecialistReviewComboBoxProps_data;
export type SpecialistReviewComboBoxProps_data$key = {
    readonly " $data"?: SpecialistReviewComboBoxProps_data$data;
    readonly " $fragmentRefs": FragmentRefs<"SpecialistReviewComboBoxProps_data">;
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
  "name": "SpecialistReviewComboBoxProps_data",
  "selections": [
    {
      "alias": "internalAssessors",
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
              "value": "internalAssessors"
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
(node as any).hash = '031a32b1adb65a3a38cf6a0380498dd8';
export default node;
