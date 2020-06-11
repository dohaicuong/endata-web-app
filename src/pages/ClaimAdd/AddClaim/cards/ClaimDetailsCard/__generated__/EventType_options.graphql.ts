/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type EventType_options = {
    readonly eventTypes: ReadonlyArray<{
        readonly label: string;
        readonly value: string;
    } | null> | null;
    readonly " $refType": "EventType_options";
};
export type EventType_options$data = EventType_options;
export type EventType_options$key = {
    readonly " $data"?: EventType_options$data;
    readonly " $fragmentRefs": FragmentRefs<"EventType_options">;
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
  "name": "EventType_options",
  "selections": [
    {
      "alias": "eventTypes",
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
              "value": "eventTypes"
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
(node as any).hash = '6250bd83cd3d216f82c6436e48b06059';
export default node;
