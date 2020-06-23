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
export type CommunicationQueryVariables = {
    where?: CommunicationFilter | null;
};
export type CommunicationQueryResponse = {
    readonly currentUser: {
        readonly communicationFilters: ReadonlyArray<{
            readonly " $fragmentRefs": FragmentRefs<"FilterInput_data">;
        } | null> | null;
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"CommunicationListTable_data">;
};
export type CommunicationQuery = {
    readonly response: CommunicationQueryResponse;
    readonly variables: CommunicationQueryVariables;
};



/*
query CommunicationQuery(
  $where: CommunicationFilter
) {
  currentUser {
    communicationFilters {
      ...FilterInput_data
      id
    }
    id
  }
  ...CommunicationListTable_data_3FC4Qo
}

fragment CommunicationAcknowledge_communication on ClaimCommunication {
  acknowledged
  communicationId
  portfolioType
}

fragment CommunicationListTable_data_3FC4Qo on Query {
  communicationConnection: claimCommuications(first: 40, where: $where) {
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

fragment FilterInput_data on FilterInput {
  type
  label
  name
  options {
    group
    label
    value: id
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
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
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "label",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 40
  },
  (v1/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CommunicationQuery",
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
            "alias": null,
            "args": null,
            "concreteType": "FilterInput",
            "kind": "LinkedField",
            "name": "communicationFilters",
            "plural": true,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "FilterInput_data"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "args": [
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
    "name": "CommunicationQuery",
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
            "alias": null,
            "args": null,
            "concreteType": "FilterInput",
            "kind": "LinkedField",
            "name": "communicationFilters",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "type",
                "storageKey": null
              },
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "name",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "FilterInputOption",
                "kind": "LinkedField",
                "name": "options",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "group",
                    "storageKey": null
                  },
                  (v2/*: any*/),
                  {
                    "alias": "value",
                    "args": null,
                    "kind": "ScalarField",
                    "name": "id",
                    "storageKey": null
                  },
                  (v3/*: any*/)
                ],
                "storageKey": null
              },
              (v3/*: any*/)
            ],
            "storageKey": null
          },
          (v3/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": "communicationConnection",
        "args": (v4/*: any*/),
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
        "alias": "communicationConnection",
        "args": (v4/*: any*/),
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
    "metadata": {},
    "name": "CommunicationQuery",
    "operationKind": "query",
    "text": "query CommunicationQuery(\n  $where: CommunicationFilter\n) {\n  currentUser {\n    communicationFilters {\n      ...FilterInput_data\n      id\n    }\n    id\n  }\n  ...CommunicationListTable_data_3FC4Qo\n}\n\nfragment CommunicationAcknowledge_communication on ClaimCommunication {\n  acknowledged\n  communicationId\n  portfolioType\n}\n\nfragment CommunicationListTable_data_3FC4Qo on Query {\n  communicationConnection: claimCommuications(first: 40, where: $where) {\n    ...CommunicationTable_data\n    edges {\n      cursor\n      node {\n        __typename\n        id\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment CommunicationReply_communication on ClaimCommunication {\n  claimRef\n  senderName\n  recieverCompanyName\n  message\n  claimId\n  senderCompanyId\n  senderRole\n}\n\nfragment CommunicationTable_data on ClaimCommunicationConnection {\n  totalCount\n  edges {\n    node {\n      claimId\n      portfolioType\n      claimRef\n      sendDate\n      senderName\n      senderCompanyName\n      message\n      ...CommunicationAcknowledge_communication\n      ...CommunicationReply_communication\n      id\n    }\n  }\n}\n\nfragment FilterInput_data on FilterInput {\n  type\n  label\n  name\n  options {\n    group\n    label\n    value: id\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = 'c05b34e7d4f163885fbadd1ccb08cbda';
export default node;
