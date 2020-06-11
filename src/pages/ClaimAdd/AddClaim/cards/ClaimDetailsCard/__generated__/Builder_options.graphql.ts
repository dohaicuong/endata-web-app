/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Builder_options = {
    readonly builders: ReadonlyArray<{
        readonly label: string;
        readonly value: string;
    } | null> | null;
    readonly " $refType": "Builder_options";
};
export type Builder_options$data = Builder_options;
export type Builder_options$key = {
    readonly " $data"?: Builder_options$data;
    readonly " $fragmentRefs": FragmentRefs<"Builder_options">;
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
      "operation": require('./BuilderRefetchQuery.graphql.ts')
    }
  },
  "name": "Builder_options",
  "selections": [
    {
      "alias": "builders",
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
                "Building"
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
(node as any).hash = '55b0c6d0ea0aacc8b7aa20004f580128';
export default node;
