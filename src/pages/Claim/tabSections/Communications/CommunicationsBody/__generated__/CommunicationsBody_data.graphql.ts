/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type PortfolioType = "Building" | "Contents" | "Restoration" | "%future added value";
export type CommunicationsBody_data = {
    readonly communicationsConnection: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly acknowledged: boolean;
                readonly claimId: string | null;
                readonly communicationId: number;
                readonly message: string | null;
                readonly acknowledgeUserName: string | null;
                readonly acknowledgeDate: unknown | null;
                readonly portfolioType: PortfolioType | null;
                readonly recieverCompanyId: number | null;
                readonly recieverCompanyName: string | null;
                readonly sendDate: unknown;
                readonly senderCompanyId: number | null;
                readonly senderCompanyName: string | null;
                readonly senderId: number | null;
                readonly senderName: string | null;
                readonly private: boolean;
                readonly actions: {
                    readonly acknowledge: {
                        readonly isDisplay: boolean;
                    };
                };
            } | null;
        } | null> | null;
    } | null;
    readonly " $refType": "CommunicationsBody_data";
};
export type CommunicationsBody_data$data = CommunicationsBody_data;
export type CommunicationsBody_data$key = {
    readonly " $data"?: CommunicationsBody_data$data;
    readonly " $fragmentRefs": FragmentRefs<"CommunicationsBody_data">;
};



const node: ReaderFragment = (function(){
var v0 = [
  "communicationsConnection"
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
      "operation": require('./CommunicationsBodyPaginationQuery.graphql.ts')
    }
  },
  "name": "CommunicationsBody_data",
  "selections": [
    {
      "alias": "communicationsConnection",
      "args": null,
      "concreteType": "ClaimCommunicationConnection",
      "kind": "LinkedField",
      "name": "__CommunicationsBody_data_communicationsConnection_connection",
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
              "concreteType": "ClaimCommunication",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "acknowledged",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "claimId",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "communicationId",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "message",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "acknowledgeUserName",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "acknowledgeDate",
                  "storageKey": null
                },
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
                  "name": "recieverCompanyId",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "recieverCompanyName",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "sendDate",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "senderCompanyId",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "senderCompanyName",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "senderId",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "senderName",
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
                  "concreteType": "ClaimCommunicationAction",
                  "kind": "LinkedField",
                  "name": "actions",
                  "plural": false,
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "concreteType": "ActionControl",
                      "kind": "LinkedField",
                      "name": "acknowledge",
                      "plural": false,
                      "selections": [
                        {
                          "alias": null,
                          "args": null,
                          "kind": "ScalarField",
                          "name": "isDisplay",
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
                  "kind": "ScalarField",
                  "name": "__typename",
                  "storageKey": null
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
(node as any).hash = '419e623a14e5f4ef42683207398f4732';
export default node;
