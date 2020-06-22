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
}

fragment ActionButton_action on ActionControl {
  label
  isDisabled
  isDisplay
}

fragment JobNotesActions_actions on ClaimJobAction {
  makeLossAdjusterInitialCall {
    ...ActionButton_action
    id
  }
  makeLossAdjusterAppointment {
    ...ActionButton_action
    id
  }
  updateReserve {
    ...ActionButton_action
    id
  }
  awaitingInfo {
    ...ActionButton_action
    id
  }
  addJobNote {
    ...ActionButton_action
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
v4 = [
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
v5 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 500
  },
  {
    "fields": [
      (v2/*: any*/),
      {
        "kind": "Literal",
        "name": "portfolios",
        "value": null
      }
    ],
    "kind": "ObjectValue",
    "name": "where"
  }
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
                    "name": "makeLossAdjusterInitialCall",
                    "plural": false,
                    "selections": (v4/*: any*/),
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ActionControl",
                    "kind": "LinkedField",
                    "name": "makeLossAdjusterAppointment",
                    "plural": false,
                    "selections": (v4/*: any*/),
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ActionControl",
                    "kind": "LinkedField",
                    "name": "updateReserve",
                    "plural": false,
                    "selections": (v4/*: any*/),
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ActionControl",
                    "kind": "LinkedField",
                    "name": "awaitingInfo",
                    "plural": false,
                    "selections": (v4/*: any*/),
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ActionControl",
                    "kind": "LinkedField",
                    "name": "addJobNote",
                    "plural": false,
                    "selections": (v4/*: any*/),
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
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "JobNotesQuery",
    "operationKind": "query",
    "text": "query JobNotesQuery(\n  $claimId: ID!\n) {\n  claimJob(where: {id: $claimId}) {\n    view {\n      actions {\n        ...JobNotesActions_actions\n      }\n    }\n    id\n  }\n  ...JobNotesBody_data_15qNS2\n}\n\nfragment ActionButton_action on ActionControl {\n  label\n  isDisabled\n  isDisplay\n}\n\nfragment JobNotesActions_actions on ClaimJobAction {\n  makeLossAdjusterInitialCall {\n    ...ActionButton_action\n    id\n  }\n  makeLossAdjusterAppointment {\n    ...ActionButton_action\n    id\n  }\n  updateReserve {\n    ...ActionButton_action\n    id\n  }\n  awaitingInfo {\n    ...ActionButton_action\n    id\n  }\n  addJobNote {\n    ...ActionButton_action\n    id\n  }\n}\n\nfragment JobNotesBody_data_15qNS2 on Query {\n  jobNoteConnection: claimNotes(first: 500, where: {claimId: $claimId}) {\n    edges {\n      node {\n        id\n        portfolioType\n        logDate\n        user {\n          company {\n            companyName\n          }\n          userName\n        }\n        private\n        message\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'd3abac8f6804fb6772eb4567eebab793';
export default node;
