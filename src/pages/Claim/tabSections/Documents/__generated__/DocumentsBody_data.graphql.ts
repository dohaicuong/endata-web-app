/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type PortfolioType = "Building" | "Contents" | "Restoration" | "%future added value";
export type DocumentsBody_data = {
    readonly documentConnection: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly portfolioType: PortfolioType | null;
                readonly uploadDate: unknown | null;
                readonly company: {
                    readonly companyName: string;
                } | null;
                readonly private: boolean;
                readonly description: string;
                readonly amountInvoice: number | null;
                readonly " $fragmentRefs": FragmentRefs<"DocumentView_data">;
            } | null;
        } | null> | null;
    } | null;
    readonly " $refType": "DocumentsBody_data";
};
export type DocumentsBody_data$data = DocumentsBody_data;
export type DocumentsBody_data$key = {
    readonly " $data"?: DocumentsBody_data$data;
    readonly " $fragmentRefs": FragmentRefs<"DocumentsBody_data">;
};



const node: ReaderFragment = (function(){
var v0 = [
  "documentConnection"
];
return {
  "argumentDefinitions": [
    {
      "defaultValue": 500,
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
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "portfolios",
      "type": "[PortfolioType]"
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
      "operation": require('./DocumentsBodyPaginationQuery.graphql.ts')
    }
  },
  "name": "DocumentsBody_data",
  "selections": [
    {
      "alias": "documentConnection",
      "args": null,
      "concreteType": "ClaimDocumentConnection",
      "kind": "LinkedField",
      "name": "__DocumentsBody_data_documentConnection_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "ClaimDocumentEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "ClaimDocument",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "portfolioType",
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
                  "name": "amountInvoice",
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
                  "name": "DocumentView_data"
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
(node as any).hash = 'ec37cee0c1684c45cfcb7bda4f1f2676';
export default node;
