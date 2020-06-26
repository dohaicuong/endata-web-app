/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type JobNotesQueryVariables = {
    claimId: string;
};
export type JobNotesQueryResponse = {
    readonly claimJob: {
        readonly view: {
            readonly actions: {
                readonly " $fragmentRefs": FragmentRefs<"JobNotesActions_actions">;
            };
        } | null;
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"JobNotesBody_data" | "JobNotesActions_data">;
};
export type JobNotesQuery = {
    readonly response: JobNotesQueryResponse;
    readonly variables: JobNotesQueryVariables;
};



/*
query JobNotesQuery(
  $claimId: ID!
) {
  claimJob(where: {id: $claimId}) {
    view {
      actions {
        ...JobNotesActions_actions
      }
    }
    id
  }
  ...JobNotesBody_data_15qNS2
  ...JobNotesActions_data
}

fragment ActionButton_action on ActionControl {
  label
  isDisabled
  isDisplay
}

fragment AwaitingInfoPortfolio_data on Query {
  ...WaitForInfoForm_data
}

fragment AwaitingInfoPortfolio_portfolioData on ClaimPortfolio {
  claimStatus {
    statusId
    id
  }
}

fragment AwaitingInfoReasonSelect_data on Query {
  claimFilterOptions(where: {subject: "awaitingInfoReasons"}) {
    label: name
    value
    id
  }
}

fragment AwaitingInfo_action on ClaimJobAction {
  awaitingInfo {
    ...ActionButton_action
    id
  }
}

fragment AwaitingInfo_data on Query {
  ...AwaitingInfoPortfolio_data
  currentUser {
    userType
    claimJob(where: {id: $claimId}) {
      id
      hasBuilding
      hasContents
      hasRestoration
      building {
        ...AwaitingInfoPortfolio_portfolioData
        id
      }
      contents {
        ...AwaitingInfoPortfolio_portfolioData
        id
      }
      restoration {
        ...AwaitingInfoPortfolio_portfolioData
        id
      }
    }
    id
  }
}

fragment JobNotesActions_actions on ClaimJobAction {
  addJobNote {
    id
  }
  ...AwaitingInfo_action
}

fragment JobNotesActions_data on Query {
  ...JobNotesInitialCall_claim
  ...JobNotesAppointmentMade_claim
  ...JobNotesAppointmentChange_claim
  ...AwaitingInfo_data
}

fragment JobNotesAppointmentChange_claim on Query {
  claimJob(where: {id: $claimId}) {
    id
  }
}

fragment JobNotesAppointmentMade_claim on Query {
  claimJob(where: {id: $claimId}) {
    id
  }
}

fragment JobNotesBody_data_15qNS2 on Query {
  jobNoteConnection: claimNotes(first: 500, where: {claimId: $claimId}) {
    edges {
      node {
        id
        portfolioType
        logDate
        user {
          company {
            companyName
          }
          userName
        }
        private
        message
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

fragment JobNotesInitialCall_claim on Query {
  claimJob(where: {id: $claimId}) {
    id
  }
}

fragment WaitForInfoForm_data on Query {
  ...AwaitingInfoReasonSelect_data
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
v1 = [
  {
    "fields": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "claimId"
      }
    ],
    "kind": "ObjectValue",
    "name": "where"
  }
],
v2 = {
  "kind": "Variable",
  "name": "claimId",
  "variableName": "claimId"
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "kind": "Literal",
  "name": "portfolios",
  "value": null
},
v5 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 500
  },
  {
    "fields": [
      (v2/*: any*/),
      (v4/*: any*/)
    ],
    "kind": "ObjectValue",
    "name": "where"
  }
],
v6 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "ClaimStatus",
    "kind": "LinkedField",
    "name": "claimStatus",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "statusId",
        "storageKey": null
      },
      (v3/*: any*/)
    ],
    "storageKey": null
  },
  (v3/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "JobNotesQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ClaimJob",
        "kind": "LinkedField",
        "name": "claimJob",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ClaimJobView",
            "kind": "LinkedField",
            "name": "view",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "ClaimJobAction",
                "kind": "LinkedField",
                "name": "actions",
                "plural": false,
                "selections": [
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "JobNotesActions_actions"
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "args": [
          (v2/*: any*/)
        ],
        "kind": "FragmentSpread",
        "name": "JobNotesBody_data"
      },
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "JobNotesActions_data"
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "JobNotesQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ClaimJob",
        "kind": "LinkedField",
        "name": "claimJob",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ClaimJobView",
            "kind": "LinkedField",
            "name": "view",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "ClaimJobAction",
                "kind": "LinkedField",
                "name": "actions",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ActionControl",
                    "kind": "LinkedField",
                    "name": "addJobNote",
                    "plural": false,
                    "selections": [
                      (v3/*: any*/)
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ActionControl",
                    "kind": "LinkedField",
                    "name": "awaitingInfo",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "label",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "isDisabled",
                        "storageKey": null
                      },
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
              }
            ],
            "storageKey": null
          },
          (v3/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": "jobNoteConnection",
        "args": (v5/*: any*/),
        "concreteType": "ClaimNoteConnection",
        "kind": "LinkedField",
        "name": "claimNotes",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ClaimNoteEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "ClaimNote",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
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
                    "name": "logDate",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "User",
                    "kind": "LinkedField",
                    "name": "user",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "CompanyProfile",
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
                        "name": "userName",
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
                    "name": "message",
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
        "alias": "jobNoteConnection",
        "args": (v5/*: any*/),
        "filters": [
          "claimId",
          "portfolios"
        ],
        "handle": "connection",
        "key": "JobNotesBody_data_jobNoteConnection",
        "kind": "LinkedHandle",
        "name": "claimNotes"
      },
      {
        "alias": null,
        "args": [
          {
            "fields": [
              (v4/*: any*/),
              {
                "kind": "Literal",
                "name": "subject",
                "value": "awaitingInfoReasons"
              }
            ],
            "kind": "ObjectValue",
            "name": "where"
          }
        ],
        "concreteType": "FilterOption",
        "kind": "LinkedField",
        "name": "claimFilterOptions",
        "plural": true,
        "selections": [
          {
            "alias": "label",
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "value",
            "storageKey": null
          },
          (v3/*: any*/)
        ],
        "storageKey": null
      },
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
            "kind": "ScalarField",
            "name": "userType",
            "storageKey": null
          },
          {
            "alias": null,
            "args": (v1/*: any*/),
            "concreteType": "ClaimJob",
            "kind": "LinkedField",
            "name": "claimJob",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasBuilding",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasContents",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasRestoration",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "ClaimPortfolio",
                "kind": "LinkedField",
                "name": "building",
                "plural": false,
                "selections": (v6/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "ClaimPortfolio",
                "kind": "LinkedField",
                "name": "contents",
                "plural": false,
                "selections": (v6/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "ClaimPortfolio",
                "kind": "LinkedField",
                "name": "restoration",
                "plural": false,
                "selections": (v6/*: any*/),
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "JobNotesQuery",
    "operationKind": "query",
    "text": "query JobNotesQuery(\n  $claimId: ID!\n) {\n  claimJob(where: {id: $claimId}) {\n    view {\n      actions {\n        ...JobNotesActions_actions\n      }\n    }\n    id\n  }\n  ...JobNotesBody_data_15qNS2\n  ...JobNotesActions_data\n}\n\nfragment ActionButton_action on ActionControl {\n  label\n  isDisabled\n  isDisplay\n}\n\nfragment AwaitingInfoPortfolio_data on Query {\n  ...WaitForInfoForm_data\n}\n\nfragment AwaitingInfoPortfolio_portfolioData on ClaimPortfolio {\n  claimStatus {\n    statusId\n    id\n  }\n}\n\nfragment AwaitingInfoReasonSelect_data on Query {\n  claimFilterOptions(where: {subject: \"awaitingInfoReasons\"}) {\n    label: name\n    value\n    id\n  }\n}\n\nfragment AwaitingInfo_action on ClaimJobAction {\n  awaitingInfo {\n    ...ActionButton_action\n    id\n  }\n}\n\nfragment AwaitingInfo_data on Query {\n  ...AwaitingInfoPortfolio_data\n  currentUser {\n    userType\n    claimJob(where: {id: $claimId}) {\n      id\n      hasBuilding\n      hasContents\n      hasRestoration\n      building {\n        ...AwaitingInfoPortfolio_portfolioData\n        id\n      }\n      contents {\n        ...AwaitingInfoPortfolio_portfolioData\n        id\n      }\n      restoration {\n        ...AwaitingInfoPortfolio_portfolioData\n        id\n      }\n    }\n    id\n  }\n}\n\nfragment JobNotesActions_actions on ClaimJobAction {\n  addJobNote {\n    id\n  }\n  ...AwaitingInfo_action\n}\n\nfragment JobNotesActions_data on Query {\n  ...JobNotesInitialCall_claim\n  ...JobNotesAppointmentMade_claim\n  ...JobNotesAppointmentChange_claim\n  ...AwaitingInfo_data\n}\n\nfragment JobNotesAppointmentChange_claim on Query {\n  claimJob(where: {id: $claimId}) {\n    id\n  }\n}\n\nfragment JobNotesAppointmentMade_claim on Query {\n  claimJob(where: {id: $claimId}) {\n    id\n  }\n}\n\nfragment JobNotesBody_data_15qNS2 on Query {\n  jobNoteConnection: claimNotes(first: 500, where: {claimId: $claimId}) {\n    edges {\n      node {\n        id\n        portfolioType\n        logDate\n        user {\n          company {\n            companyName\n          }\n          userName\n        }\n        private\n        message\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment JobNotesInitialCall_claim on Query {\n  claimJob(where: {id: $claimId}) {\n    id\n  }\n}\n\nfragment WaitForInfoForm_data on Query {\n  ...AwaitingInfoReasonSelect_data\n}\n"
  }
};
})();
(node as any).hash = 'd3abac8f6804fb6772eb4567eebab793';
export default node;
