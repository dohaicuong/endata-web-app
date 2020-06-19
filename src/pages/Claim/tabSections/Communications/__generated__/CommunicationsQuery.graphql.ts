/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CommunicationsQueryVariables = {
    claimId: string;
};
export type CommunicationsQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"CommunicationsBody_data">;
};
export type CommunicationsQuery = {
    readonly response: CommunicationsQueryResponse;
    readonly variables: CommunicationsQueryVariables;
};



/*
query CommunicationsQuery(
  $claimId: ID!
) {
  ...CommunicationsBody_data_15qNS2
}

fragment CommunicationsBody_data_15qNS2 on Query {
  communicationsConnection: claimCommuications(first: 15, where: {claimId: $claimId}) {
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
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "claimId",
    "type": "ID!"
  }
],
v1 = {
  "kind": "Variable",
  "name": "claimId",
  "variableName": "claimId"
},
v2 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 15
  },
  {
    "fields": [
      (v1/*: any*/),
      {
        "kind": "Literal",
        "name": "portfolios",
        "value": null
      }
    ],
    "kind": "ObjectValue",
    "name": "where"
  }
],
v3 = {
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
    "name": "CommunicationsQuery",
    "selections": [
      {
        "args": [
          (v1/*: any*/)
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
    "name": "CommunicationsQuery",
    "selections": [
      {
        "alias": "communicationsConnection",
        "args": (v2/*: any*/),
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
                          (v3/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  (v3/*: any*/),
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
        "args": (v2/*: any*/),
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
    "metadata": {},
    "name": "CommunicationsQuery",
    "operationKind": "query",
    "text": "query CommunicationsQuery(\n  $claimId: ID!\n) {\n  ...CommunicationsBody_data_15qNS2\n}\n\nfragment CommunicationsBody_data_15qNS2 on Query {\n  communicationsConnection: claimCommuications(first: 15, where: {claimId: $claimId}) {\n    edges {\n      node {\n        acknowledged\n        claimId\n        communicationId\n        message\n        acknowledgeUserName\n        acknowledgeDate\n        portfolioType\n        recieverCompanyId\n        recieverCompanyName\n        sendDate\n        senderCompanyId\n        senderCompanyName\n        senderId\n        senderName\n        private\n        actions {\n          acknowledge {\n            isDisplay\n            id\n          }\n        }\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'ae91cf11683cc777535a9b5135359c0f';
export default node;
