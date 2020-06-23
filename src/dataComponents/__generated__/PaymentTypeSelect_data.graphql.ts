/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type PaymentTypeSelect_data = {
    readonly options: ReadonlyArray<{
        readonly label: string;
        readonly value: number;
    } | null> | null;
    readonly " $refType": "PaymentTypeSelect_data";
};
export type PaymentTypeSelect_data$data = PaymentTypeSelect_data;
export type PaymentTypeSelect_data$key = {
    readonly " $data"?: PaymentTypeSelect_data$data;
    readonly " $fragmentRefs": FragmentRefs<"PaymentTypeSelect_data">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "claimId",
      "type": "ID!"
    },
    {
      "defaultValue": "Building",
      "kind": "LocalArgument",
      "name": "claimPortfolioType",
      "type": "PortfolioType!"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "refetch": {
      "connection": null,
      "fragmentPathInResult": [],
      "operation": require('./PaymentTypeSelectRefetchQuery.graphql.ts')
    }
  },
  "name": "PaymentTypeSelect_data",
  "selections": [
    {
      "alias": "options",
      "args": [
        {
          "fields": [
            {
              "kind": "Variable",
              "name": "claimId",
              "variableName": "claimId"
            },
            {
              "kind": "Variable",
              "name": "claimPortfolioType",
              "variableName": "claimPortfolioType"
            }
          ],
          "kind": "ObjectValue",
          "name": "where"
        }
      ],
      "concreteType": "PaymentType",
      "kind": "LinkedField",
      "name": "paymentTypes",
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
          "alias": "value",
          "args": null,
          "kind": "ScalarField",
          "name": "paymentTypeId",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query"
};
(node as any).hash = '0bd2f17cf0f57dad49500a4d4d866436';
export default node;
