/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ClaimCommunicationBox = "Inbox" | "InboxAndSharedBox" | "OutBox" | "UnDefined" | "%future added value";
export type PortfolioType = "Building" | "Contents" | "Restoration" | "%future added value";
export type State = "ACT" | "NSW" | "NT" | "QLD" | "SA" | "TAS" | "VIC" | "WA" | "%future added value";
export type CommunicationFilter = {
    id?: string | null;
    claimId?: string | null;
    createDateFrom?: string | null;
    createDateTo?: string | null;
    keyWords?: string | null;
    managers?: Array<string> | null;
    managerTeams?: Array<string | null> | null;
    internalAssessors?: Array<string> | null;
    acknowledged?: boolean | null;
    states?: Array<State | null> | null;
    boxes?: Array<ClaimCommunicationBox | null> | null;
    portfolios?: Array<PortfolioType | null> | null;
};
export type CommunicationListTablePaginationQueryVariables = {
    count?: number | null;
    cursor?: string | null;
    where?: CommunicationFilter | null;
};
export type CommunicationListTablePaginationQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"CommunicationListTable_data">;
};
export type CommunicationListTablePaginationQuery = {
    readonly response: CommunicationListTablePaginationQueryResponse;
    readonly variables: CommunicationListTablePaginationQueryVariables;
};



/*
query CommunicationListTablePaginationQuery(
  $count: Int = 40
  $cursor: String
  $where: CommunicationFilter
) {
  ...CommunicationListTable_data_mjR8k
}

fragment CommunicationAcknowledge_communication on ClaimCommunication {
  acknowledged
  communicationId
  portfolioType
}

fragment CommunicationListTable_data_mjR8k on Query {
  communicationConnection: claimCommuications(first: $count, after: $cursor, where: $where) {
    ...CommunicationTable_data
    edges {
      cursor
      node {
        __typename
        id
      }
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}

fragment CommunicationReply_communication on ClaimCommunication {
  claimRef
  senderName
  recieverCompanyName
  message
  claimId
  senderCompanyId
  senderRole
}

fragment CommunicationTable_data on ClaimCommunicationConnection {
  totalCount
  edges {
    node {
      claimId
      portfolioType
      claimRef
      sendDate
      senderName
      senderCompanyName
      message
      ...CommunicationAcknowledge_communication
      ...CommunicationReply_communication
      id
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
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
v1 = {
  "kind": "Variable",
  "name": "where",
  "variableName": "where"
},
v2 = [
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
  (v1/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CommunicationListTablePaginationQuery",
    "selections": [
      {
        "args": [
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
          (v1/*: any*/)
        ],
        "kind": "FragmentSpread",
        "name": "CommunicationListTable_data"
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CommunicationListTablePaginationQuery",
    "selections": [
      {
        "alias": "communicationConnection",
        "args": (v2/*: any*/),
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
                    "name": "claimId",
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
                    "name": "claimRef",
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
                    "name": "senderName",
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
                    "name": "message",
                    "storageKey": null
                  },
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
                    "name": "communicationId",
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
                    "name": "senderCompanyId",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "senderRole",
                    "storageKey": null
                  },
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
        "alias": "communicationConnection",
        "args": (v2/*: any*/),
        "filters": [
          "where"
        ],
        "handle": "connection",
        "key": "CommunicationListTable_data_communicationConnection",
        "kind": "LinkedHandle",
        "name": "claimCommuications"
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {
      "derivedFrom": "CommunicationListTable_data",
      "isRefetchableQuery": true
    },
    "name": "CommunicationListTablePaginationQuery",
    "operationKind": "query",
    "text": "query CommunicationListTablePaginationQuery(\n  $count: Int = 40\n  $cursor: String\n  $where: CommunicationFilter\n) {\n  ...CommunicationListTable_data_mjR8k\n}\n\nfragment CommunicationAcknowledge_communication on ClaimCommunication {\n  acknowledged\n  communicationId\n  portfolioType\n}\n\nfragment CommunicationListTable_data_mjR8k on Query {\n  communicationConnection: claimCommuications(first: $count, after: $cursor, where: $where) {\n    ...CommunicationTable_data\n    edges {\n      cursor\n      node {\n        __typename\n        id\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment CommunicationReply_communication on ClaimCommunication {\n  claimRef\n  senderName\n  recieverCompanyName\n  message\n  claimId\n  senderCompanyId\n  senderRole\n}\n\nfragment CommunicationTable_data on ClaimCommunicationConnection {\n  totalCount\n  edges {\n    node {\n      claimId\n      portfolioType\n      claimRef\n      sendDate\n      senderName\n      senderCompanyName\n      message\n      ...CommunicationAcknowledge_communication\n      ...CommunicationReply_communication\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'c3d25eacbd95ebeab5892a98af67ed94';
export default node;
