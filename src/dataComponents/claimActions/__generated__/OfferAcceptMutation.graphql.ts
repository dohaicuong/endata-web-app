/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type PortfolioType = "Building" | "Contents" | "Restoration" | "%future added value";
export type OfferAcceptMutationVariables = {
    id: string;
    portfolio: PortfolioType;
};
export type OfferAcceptMutationResponse = {
    readonly claimAcceptRequest: {
        readonly messages: ReadonlyArray<string>;
        readonly success: boolean;
        readonly result: {
            readonly jobSuppliers: ReadonlyArray<{
                readonly quote: {
                    readonly id: string;
                    readonly quoteJobStatus: {
                        readonly statusName: string | null;
                    } | null;
                    readonly supplier: {
                        readonly companyName: string;
                    } | null;
                } | null;
            } | null> | null;
        } | null;
    } | null;
};
export type OfferAcceptMutation = {
    readonly response: OfferAcceptMutationResponse;
    readonly variables: OfferAcceptMutationVariables;
};



/*
mutation OfferAcceptMutation(
  $id: ID!
  $portfolio: PortfolioType!
) {
  claimAcceptRequest(where: {id: $id, portfolioType: $portfolio}) {
    messages
    success
    result {
      jobSuppliers {
        quote {
          id
          quoteJobStatus {
            statusName
            id
          }
          supplier {
            companyName
          }
        }
        id
      }
      id
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "portfolio",
    "type": "PortfolioType!"
  }
],
v1 = [
  {
    "fields": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      },
      {
        "kind": "Variable",
        "name": "portfolioType",
        "variableName": "portfolio"
      }
    ],
    "kind": "ObjectValue",
    "name": "where"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "messages",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "success",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "statusName",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "concreteType": "Company",
  "kind": "LinkedField",
  "name": "supplier",
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
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "OfferAcceptMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ClaimPortfolioPayload",
        "kind": "LinkedField",
        "name": "claimAcceptRequest",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "ClaimPortfolio",
            "kind": "LinkedField",
            "name": "result",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "JobSupplier",
                "kind": "LinkedField",
                "name": "jobSuppliers",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "JobQuote",
                    "kind": "LinkedField",
                    "name": "quote",
                    "plural": false,
                    "selections": [
                      (v4/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "ClaimStatus",
                        "kind": "LinkedField",
                        "name": "quoteJobStatus",
                        "plural": false,
                        "selections": [
                          (v5/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v6/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "OfferAcceptMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ClaimPortfolioPayload",
        "kind": "LinkedField",
        "name": "claimAcceptRequest",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "ClaimPortfolio",
            "kind": "LinkedField",
            "name": "result",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "JobSupplier",
                "kind": "LinkedField",
                "name": "jobSuppliers",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "JobQuote",
                    "kind": "LinkedField",
                    "name": "quote",
                    "plural": false,
                    "selections": [
                      (v4/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "ClaimStatus",
                        "kind": "LinkedField",
                        "name": "quoteJobStatus",
                        "plural": false,
                        "selections": [
                          (v5/*: any*/),
                          (v4/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v6/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v4/*: any*/)
                ],
                "storageKey": null
              },
              (v4/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "OfferAcceptMutation",
    "operationKind": "mutation",
    "text": "mutation OfferAcceptMutation(\n  $id: ID!\n  $portfolio: PortfolioType!\n) {\n  claimAcceptRequest(where: {id: $id, portfolioType: $portfolio}) {\n    messages\n    success\n    result {\n      jobSuppliers {\n        quote {\n          id\n          quoteJobStatus {\n            statusName\n            id\n          }\n          supplier {\n            companyName\n          }\n        }\n        id\n      }\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '091b7d6f16ca9c0a81f7876bc593ec5b';
export default node;
