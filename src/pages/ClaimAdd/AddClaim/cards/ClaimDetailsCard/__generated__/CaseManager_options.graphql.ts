/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CaseManager_options = {
    readonly managers: ReadonlyArray<{
        readonly label: string;
        readonly value: string;
    } | null> | null;
    readonly " $refType": "CaseManager_options";
};
export type CaseManager_options$data = CaseManager_options;
export type CaseManager_options$key = {
    readonly " $data"?: CaseManager_options$data;
    readonly " $fragmentRefs": FragmentRefs<"CaseManager_options">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "companyId",
      "type": "[ID!]"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "CaseManager_options",
  "selections": [
    {
      "alias": "managers",
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
              "name": "subject",
              "value": "managers"
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
(node as any).hash = '60d2acb709d880bb8ebf5fb5c1d81a04';
export default node;
