/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ClaimListTable_data = {
    readonly currentUser: {
        readonly " $fragmentRefs": FragmentRefs<"ClaimsTable_user">;
    } | null;
    readonly claimConnection: {
        readonly edges: ReadonlyArray<{
            readonly cursor: string;
        } | null> | null;
        readonly " $fragmentRefs": FragmentRefs<"ClaimsTable_claims">;
    } | null;
    readonly " $refType": "ClaimListTable_data";
};
export type ClaimListTable_data$data = ClaimListTable_data;
export type ClaimListTable_data$key = {
    readonly " $data"?: ClaimListTable_data$data;
    readonly " $fragmentRefs": FragmentRefs<"ClaimListTable_data">;
};



const node: ReaderFragment = (function(){
var v0 = [
  "claimConnection"
];
return {
  "argumentDefinitions": [
    {
      "defaultValue": 30,
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
      "type": "ClaimJobFilter"
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
      "operation": require('./ClaimListTablePaginationQuery.graphql.ts')
    }
  },
  "name": "ClaimListTable_data",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "AuthenticatedUser",
      "kind": "LinkedField",
      "name": "currentUser",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ClaimsTable_user"
        }
      ],
      "storageKey": null
    },
    {
      "alias": "claimConnection",
      "args": [
        {
          "kind": "Variable",
          "name": "where",
          "variableName": "where"
        }
      ],
      "concreteType": "ClaimJobConnection",
      "kind": "LinkedField",
      "name": "__ClaimListTable_data_claimConnection_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "ClaimJobEdge",
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
              "concreteType": "ClaimJob",
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
          "name": "ClaimsTable_claims"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query"
};
})();
(node as any).hash = '03bd22e169da21b947c80f266fe35615';
export default node;
