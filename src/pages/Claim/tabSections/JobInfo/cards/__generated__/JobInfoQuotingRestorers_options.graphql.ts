/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type JobInfoQuotingRestorers_options = {
    readonly quotingRestorers: ReadonlyArray<{
        readonly label: string;
        readonly value: string;
    } | null> | null;
    readonly " $refType": "JobInfoQuotingRestorers_options";
};
export type JobInfoQuotingRestorers_options$data = JobInfoQuotingRestorers_options;
export type JobInfoQuotingRestorers_options$key = {
    readonly " $data"?: JobInfoQuotingRestorers_options$data;
    readonly " $fragmentRefs": FragmentRefs<"JobInfoQuotingRestorers_options">;
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
  "metadata": null,
  "name": "JobInfoQuotingRestorers_options",
  "selections": [
    {
      "alias": "quotingRestorers",
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
(node as any).hash = '0e9cc53bc11189a1731d1d00af4f362c';
export default node;
