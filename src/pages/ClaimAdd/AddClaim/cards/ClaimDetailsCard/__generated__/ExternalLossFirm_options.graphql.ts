/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ExternalLossFirm_options = {
    readonly adjusters: ReadonlyArray<{
        readonly label: string;
        readonly value: string;
    } | null> | null;
    readonly " $refType": "ExternalLossFirm_options";
};
export type ExternalLossFirm_options$data = ExternalLossFirm_options;
export type ExternalLossFirm_options$key = {
    readonly " $data"?: ExternalLossFirm_options$data;
    readonly " $fragmentRefs": FragmentRefs<"ExternalLossFirm_options">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "companyId",
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
      "operation": require('./ExternalLossFirmRefetchQuery.graphql.ts')
    }
  },
  "name": "ExternalLossFirm_options",
  "selections": [
    {
      "alias": "adjusters",
      "args": [
        {
          "fields": [
            {
              "kind": "Variable",
              "name": "insurers",
              "variableName": "companyId"
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
(node as any).hash = '8e5a5ee500692952a8d99d6902e4b23d';
export default node;
