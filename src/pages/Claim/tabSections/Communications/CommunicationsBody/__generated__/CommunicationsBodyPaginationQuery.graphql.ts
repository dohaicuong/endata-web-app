/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type PortfolioType = "Building" | "Contents" | "Restoration" | "%future added value";
export type CommunicationsBodyPaginationQueryVariables = {
    count?: number | null;
    cursor?: string | null;
    claimId: string;
    portfolios?: Array<PortfolioType | null> | null;
};
export type CommunicationsBodyPaginationQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"CommunicationsBody_data">;
};
export type CommunicationsBodyPaginationQuery = {
    readonly response: CommunicationsBodyPaginationQueryResponse;
    readonly variables: CommunicationsBodyPaginationQueryVariables;
};



/*
query CommunicationsBodyPaginationQuery(
  $count: Int = 15
  $cursor: String
  $claimId: ID!
  $portfolios: [PortfolioType]
) {
  ...CommunicationsBody_data_16lzxw
}

fragment CommunicationsBody_data_16lzxw on Query {
  communicationsConnection: claimCommuications(first: $count, after: $cursor, where: {claimId: $claimId, portfolios: $portfolios}) {
    edges {
      node {
        acknowledged
        claimId
        communicationId
        message
        acknowledgeUserName
        acknowledgeDate
        portfolioType
        recieverCompanyId
        recieverCompanyName
        sendDate
        senderCompanyId
        senderCompanyName
        senderId
        senderName
        private
        actions {
          acknowledge {
            isDisplay
            id
          }
        }
        id
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
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
v1 = {
  "kind": "Variable",
  "name": "claimId",
  "variableName": "claimId"
},
v2 = {
  "kind": "Variable",
  "name": "portfolios",
  "variableName": "portfolios"
},
v3 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "cursor"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count"
  },
  {
    "fields": [
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "ObjectValue",
    "name": "where"
  }
],
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CommunicationsBodyPaginationQuery",
    "selections": [
      {
        "args": [
          (v1/*: any*/),
          {
            "kind": "Variable",
            "name": "count",
            "variableName": "count"
          },
          {
            "kind": "Variable",
            "name": "cursor",
            "variableName": "cursor"
          },
          (v2/*: any*/)
        ],
        "kind": "FragmentSpread",
        "name": "CommunicationsBody_data"
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CommunicationsBodyPaginationQuery",
    "selections": [
      {
        "alias": "communicationsConnection",
        "args": (v3/*: any*/),
        "concreteType": "ClaimCommunicationConnection",
        "kind": "LinkedField",
        "name": "claimCommuications",
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
                          },
                          (v4/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  (v4/*: any*/),
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
      },
      {
        "alias": "communicationsConnection",
        "args": (v3/*: any*/),
        "filters": [
          "claimId",
          "portfolios"
        ],
        "handle": "connection",
        "key": "CommunicationsBody_data_communicationsConnection",
        "kind": "LinkedHandle",
        "name": "claimCommuications"
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {
      "derivedFrom": "CommunicationsBody_data",
      "isRefetchableQuery": true
    },
    "name": "CommunicationsBodyPaginationQuery",
    "operationKind": "query",
    "text": "query CommunicationsBodyPaginationQuery(\n  $count: Int = 15\n  $cursor: String\n  $claimId: ID!\n  $portfolios: [PortfolioType]\n) {\n  ...CommunicationsBody_data_16lzxw\n}\n\nfragment CommunicationsBody_data_16lzxw on Query {\n  communicationsConnection: claimCommuications(first: $count, after: $cursor, where: {claimId: $claimId, portfolios: $portfolios}) {\n    edges {\n      node {\n        acknowledged\n        claimId\n        communicationId\n        message\n        acknowledgeUserName\n        acknowledgeDate\n        portfolioType\n        recieverCompanyId\n        recieverCompanyName\n        sendDate\n        senderCompanyId\n        senderCompanyName\n        senderId\n        senderName\n        private\n        actions {\n          acknowledge {\n            isDisplay\n            id\n          }\n        }\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '419e623a14e5f4ef42683207398f4732';
export default node;
