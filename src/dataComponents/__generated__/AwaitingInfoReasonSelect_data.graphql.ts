/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type AwaitingInfoReasonSelect_data = {
    readonly claimFilterOptions: ReadonlyArray<{
        readonly label: string;
        readonly value: string;
    } | null> | null;
    readonly " $refType": "AwaitingInfoReasonSelect_data";
};
export type AwaitingInfoReasonSelect_data$data = AwaitingInfoReasonSelect_data;
export type AwaitingInfoReasonSelect_data$key = {
    readonly " $data"?: AwaitingInfoReasonSelect_data$data;
    readonly " $fragmentRefs": FragmentRefs<"AwaitingInfoReasonSelect_data">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "portfolios",
      "type": "[PortfolioType]"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "refetch": {
      "connection": null,
      "fragmentPathInResult": [],
      "operation": require('./AwaitingInfoReasonSelectRefetchQuery.graphql.ts')
    }
  },
  "name": "AwaitingInfoReasonSelect_data",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "fields": [
            {
              "kind": "Variable",
              "name": "portfolios",
              "variableName": "portfolios"
            },
            {
              "kind": "Literal",
              "name": "subject",
              "value": "awaitingInfoReasons"
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
(node as any).hash = 'cf242f5157ab7df95b950d30e2fba55f';
export default node;
