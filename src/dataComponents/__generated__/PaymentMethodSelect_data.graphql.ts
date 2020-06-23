/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type PaymentMethodSelect_data = {
    readonly paymentMethods: ReadonlyArray<{
        readonly label: string;
        readonly value: number;
    } | null> | null;
    readonly " $refType": "PaymentMethodSelect_data";
};
export type PaymentMethodSelect_data$data = PaymentMethodSelect_data;
export type PaymentMethodSelect_data$key = {
    readonly " $data"?: PaymentMethodSelect_data$data;
    readonly " $fragmentRefs": FragmentRefs<"PaymentMethodSelect_data">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "claimId",
      "type": "ID!"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "PaymentMethodSelect_data",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "fields": [
            {
              "kind": "Variable",
              "name": "claimId",
              "variableName": "claimId"
            }
          ],
          "kind": "ObjectValue",
          "name": "where"
        }
      ],
      "concreteType": "PaymentMethod",
      "kind": "LinkedField",
      "name": "paymentMethods",
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
          "name": "paymentMethodId",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query"
};
(node as any).hash = '224dfa319cfa1708c90429d37055990c';
export default node;
