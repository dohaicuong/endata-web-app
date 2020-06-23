/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type LossAdjusterBody_data = {
    readonly LossAdjusterConnection: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly uploadDate: unknown | null;
                readonly company: {
                    readonly companyName: string;
                } | null;
                readonly reportType: {
                    readonly reportTypeName: string;
                } | null;
                readonly private: boolean;
                readonly description: string;
                readonly " $fragmentRefs": FragmentRefs<"DocumentView_LossAdjusterData">;
            } | null;
        } | null> | null;
    } | null;
    readonly " $refType": "LossAdjusterBody_data";
};
export type LossAdjusterBody_data$data = LossAdjusterBody_data;
export type LossAdjusterBody_data$key = {
    readonly " $data"?: LossAdjusterBody_data$data;
    readonly " $fragmentRefs": FragmentRefs<"LossAdjusterBody_data">;
};



const node: ReaderFragment = (function(){
var v0 = [
  "LossAdjusterConnection"
];
return {
  "argumentDefinitions": [
    {
      "defaultValue": 15,
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
      "name": "claimId",
      "type": "ID!"
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
      "operation": require('./LossAdjusterBodyPaginationQuery.graphql.ts')
    }
  },
  "name": "LossAdjusterBody_data",
  "selections": [
    {
      "alias": "LossAdjusterConnection",
      "args": null,
      "concreteType": "ClaimLossAdjusterDocumentConnection",
      "kind": "LinkedField",
      "name": "__LossAdjusterBody_data_LossAdjusterConnection_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "ClaimLossAdjusterDocumentEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "ClaimLossAdjusterDocument",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "id",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "uploadDate",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "Company",
                  "kind": "LinkedField",
                  "name": "company",
                  "plural": false,
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "companyName",
                      "storageKey": null
                    }
                  ],
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "LossAdjusterReportType",
                  "kind": "LinkedField",
                  "name": "reportType",
                  "plural": false,
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "reportTypeName",
                      "storageKey": null
                    }
                  ],
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "private",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "description",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "__typename",
                  "storageKey": null
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "DocumentView_LossAdjusterData"
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "cursor",
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
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query"
};
})();
(node as any).hash = 'f5b94ba094429a6399656264fd45e413';
export default node;
