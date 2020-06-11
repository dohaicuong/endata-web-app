/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type QuotingRestorersCard_options = {
    readonly quotingRestorers: ReadonlyArray<{
        readonly label: string;
        readonly value: string;
    } | null> | null;
    readonly " $refType": "QuotingRestorersCard_options";
};
export type QuotingRestorersCard_options$data = QuotingRestorersCard_options;
export type QuotingRestorersCard_options$key = {
    readonly " $data"?: QuotingRestorersCard_options$data;
    readonly " $fragmentRefs": FragmentRefs<"QuotingRestorersCard_options">;
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
      "operation": require('./QuotingRestorersRefetchQuery.graphql.ts')
    }
  },
  "name": "QuotingRestorersCard_options",
  "selections": [
    {
      "alias": "quotingRestorers",
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
(node as any).hash = '19cbca658997a8a3958ce31e6e87598a';
export default node;
