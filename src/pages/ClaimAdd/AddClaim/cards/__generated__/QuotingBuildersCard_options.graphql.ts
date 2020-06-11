/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type QuotingBuildersCard_options = {
    readonly quotingBuilders: ReadonlyArray<{
        readonly label: string;
        readonly value: string;
    } | null> | null;
    readonly " $refType": "QuotingBuildersCard_options";
};
export type QuotingBuildersCard_options$data = QuotingBuildersCard_options;
export type QuotingBuildersCard_options$key = {
    readonly " $data"?: QuotingBuildersCard_options$data;
    readonly " $fragmentRefs": FragmentRefs<"QuotingBuildersCard_options">;
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
      "operation": require('./QuotingBuilderRefetchQuery.graphql.ts')
    }
  },
  "name": "QuotingBuildersCard_options",
  "selections": [
    {
      "alias": "quotingBuilders",
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
(node as any).hash = '980cf66774d977358f99d0028ea856d8';
export default node;
