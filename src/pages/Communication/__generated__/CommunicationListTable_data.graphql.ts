/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CommunicationListTable_data = {
    readonly communicationConnection: {
        readonly edges: ReadonlyArray<{
            readonly cursor: string;
        } | null> | null;
        readonly " $fragmentRefs": FragmentRefs<"CommunicationTable_data">;
    } | null;
    readonly " $refType": "CommunicationListTable_data";
};
export type CommunicationListTable_data$data = CommunicationListTable_data;
export type CommunicationListTable_data$key = {
    readonly " $data"?: CommunicationListTable_data$data;
    readonly " $fragmentRefs": FragmentRefs<"CommunicationListTable_data">;
};



const node: ReaderFragment = (function(){
var v0 = [
  "communicationConnection"
];
return {
  "argumentDefinitions": [
    {
      "defaultValue": 40,
      "kind": "LocalArgument",
      "name": "count",
      "type": "Int"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "cursor",
      "type": "String"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "where",
      "type": "CommunicationFilter"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "cursor",
        "direction": "forward",
        "path": (v0/*: any*/)
      }
    ],
    "refetch": {
      "connection": {
        "forward": {
          "count": "count",
          "cursor": "cursor"
        },
        "backward": null,
        "path": (v0/*: any*/)
      },
      "fragmentPathInResult": [],
      "operation": require('./CommunicationListTablePaginationQuery.graphql.ts')
    }
  },
  "name": "CommunicationListTable_data",
  "selections": [
    {
      "alias": "communicationConnection",
      "args": [
        {
          "kind": "Variable",
          "name": "where",
          "variableName": "where"
        }
      ],
      "concreteType": "ClaimCommunicationConnection",
      "kind": "LinkedField",
      "name": "__CommunicationListTable_data_communicationConnection_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "ClaimCommunicationEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "cursor",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "ClaimCommunication",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "__typename",
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "PageInfo",
          "kind": "LinkedField",
          "name": "pageInfo",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "endCursor",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "hasNextPage",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "CommunicationTable_data"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query"
};
})();
(node as any).hash = 'c3d25eacbd95ebeab5892a98af67ed94';
export default node;
