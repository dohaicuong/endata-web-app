/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type CommunicationMenuQueryVariables = {};
export type CommunicationMenuQueryResponse = {
    readonly communications: {
        readonly totalCount: number | null;
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly claimRef: string;
                readonly message: string | null;
            } | null;
        } | null> | null;
    } | null;
};
export type CommunicationMenuQuery = {
    readonly response: CommunicationMenuQueryResponse;
    readonly variables: CommunicationMenuQueryVariables;
};



/*
query CommunicationMenuQuery {
  communications: claimCommuications(first: 2, where: {boxes: Inbox, acknowledged: false}) {
    totalCount
    edges {
      node {
        id
        claimRef
        message
      }
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": "communications",
    "args": [
      {
        "kind": "Literal",
        "name": "first",
        "value": 2
      },
      {
        "kind": "Literal",
        "name": "where",
        "value": {
          "acknowledged": false,
          "boxes": "Inbox"
        }
      }
    ],
    "concreteType": "ClaimCommunicationConnection",
    "kind": "LinkedField",
    "name": "claimCommuications",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "totalCount",
        "storageKey": null
      },
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
                "name": "id",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "claimRef",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "message",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": "claimCommuications(first:2,where:{\"acknowledged\":false,\"boxes\":\"Inbox\"})"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "CommunicationMenuQuery",
    "selections": (v0/*: any*/),
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "CommunicationMenuQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "CommunicationMenuQuery",
    "operationKind": "query",
    "text": "query CommunicationMenuQuery {\n  communications: claimCommuications(first: 2, where: {boxes: Inbox, acknowledged: false}) {\n    totalCount\n    edges {\n      node {\n        id\n        claimRef\n        message\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'aa74902af26d8622e4e600dc27c19b8f';
export default node;
