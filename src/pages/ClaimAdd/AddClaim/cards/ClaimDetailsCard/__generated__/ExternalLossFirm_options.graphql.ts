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
      "defaultValue": "0",
      "kind": "LocalArgument",
      "name": "companyId",
      "type": "[ID!]"
    },
    {
      "defaultValue": "0",
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
(node as any).hash = '503414799b45c861b83e1d8092318d1d';
export default node;
