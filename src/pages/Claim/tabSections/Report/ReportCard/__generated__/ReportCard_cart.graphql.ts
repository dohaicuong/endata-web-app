/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ReportCard_cart = {
    readonly id: string;
    readonly title: string | null;
    readonly fields: ReadonlyArray<{
        readonly id: string;
        readonly grid: unknown | null;
        readonly order: number | null;
        readonly " $fragmentRefs": FragmentRefs<"ReportCardField_field">;
    }> | null;
    readonly " $refType": "ReportCard_cart";
};
export type ReportCard_cart$data = ReportCard_cart;
export type ReportCard_cart$key = {
    readonly " $data"?: ReportCard_cart$data;
    readonly " $fragmentRefs": FragmentRefs<"ReportCard_cart">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ReportCard_cart",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "fields",
      "plural": true,
      "selections": [
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "grid",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "order",
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ReportCardField_field"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Card"
};
})();
(node as any).hash = 'd2714308eeb2fbb4f6767cfd88405559';
export default node;
