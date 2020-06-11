/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ENDataEntityKey = {
    id: string;
};
export type ClaimPageQueryVariables = {
    where: ENDataEntityKey;
};
export type ClaimPageQueryResponse = {
    readonly claimJob: {
        readonly id: string;
        readonly description: string | null;
        readonly " $fragmentRefs": FragmentRefs<"ClaimInfoCard_info">;
    } | null;
    readonly currentUser: {
        readonly " $fragmentRefs": FragmentRefs<"ClaimInfoCard_user">;
    } | null;
};
export type ClaimPageQuery = {
    readonly response: ClaimPageQueryResponse;
    readonly variables: ClaimPageQueryVariables;
};



/*
query ClaimPageQuery(
  $where: ENDataEntityKey!
) {
  claimJob(where: $where) {
    id
    description: claimDescription
    ...ClaimInfoCard_info
  }
  currentUser {
    ...ClaimInfoCard_user
    id
  }
}

fragment ClaimInfoCard_info on ClaimJob {
  insurer {
    companyName
    policyTypeSuppliersView
    policyCoverSuppliersView
  }
  refNumber
  incidentDetail {
    riskAddress {
      line1
      suburb
      state
      postcode
    }
    eventType {
      eventName
    }
    cATCode {
      cATCodeName
    }
  }
  insured {
    name
    phone1
    phone2
    phone3
    email
  }
  lodgeDate
  policyType {
    policyTypeName
  }
  policyCover {
    policyCoverName
  }
  building {
    claimStatus {
      statusName
    }
    scopingSupplier {
      companyName
      companyPhone1
      companyPhone2
    }
    authorisedSupplier {
      companyName
      companyPhone1
      companyPhone2
    }
    jobSuppliers {
      quote {
        supplier {
          companyName
        }
        quoteStatus: quoteJobStatus {
          statusName
        }
        id
      }
      id
    }
    toCollectExcess
    excessValue
  }
  restoration {
    claimStatus {
      statusName
    }
    scopingSupplier {
      companyName
      companyPhone1
      companyPhone2
    }
    authorisedSupplier {
      companyName
      companyPhone1
      companyPhone2
    }
    jobSuppliers {
      quote {
        supplier {
          companyName
        }
        quoteStatus: quoteJobStatus {
          statusName
        }
        id
      }
      id
    }
    toCollectExcess
    excessValue
  }
  contents {
    portfolioType
    claimStatus {
      statusName
    }
    toCollectExcess
    excessValue
  }
}

fragment ClaimInfoCard_user on AuthenticatedUser {
  userType
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "where",
    "type": "ENDataEntityKey!"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "where",
    "variableName": "where"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": "description",
  "args": null,
  "kind": "ScalarField",
  "name": "claimDescription",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "companyName",
  "storageKey": null
},
v5 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "statusName",
    "storageKey": null
  }
],
v6 = {
  "alias": null,
  "args": null,
  "concreteType": "ClaimStatus",
  "kind": "LinkedField",
  "name": "claimStatus",
  "plural": false,
  "selections": (v5/*: any*/),
  "storageKey": null
},
v7 = [
  (v4/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "companyPhone1",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "companyPhone2",
    "storageKey": null
  }
],
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "toCollectExcess",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "excessValue",
  "storageKey": null
},
v10 = [
  (v6/*: any*/),
  {
    "alias": null,
    "args": null,
    "concreteType": "Company",
    "kind": "LinkedField",
    "name": "scopingSupplier",
    "plural": false,
    "selections": (v7/*: any*/),
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "Company",
    "kind": "LinkedField",
    "name": "authorisedSupplier",
    "plural": false,
    "selections": (v7/*: any*/),
    "storageKey": null
  },
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
          {
            "alias": null,
            "args": null,
            "concreteType": "Company",
            "kind": "LinkedField",
            "name": "supplier",
            "plural": false,
            "selections": [
              (v4/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": "quoteStatus",
            "args": null,
            "concreteType": "ClaimStatus",
            "kind": "LinkedField",
            "name": "quoteJobStatus",
            "plural": false,
            "selections": (v5/*: any*/),
            "storageKey": null
          },
          (v2/*: any*/)
        ],
        "storageKey": null
      },
      (v2/*: any*/)
    ],
    "storageKey": null
  },
  (v8/*: any*/),
  (v9/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ClaimPageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ClaimJob",
        "kind": "LinkedField",
        "name": "claimJob",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ClaimInfoCard_info"
          }
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
            "args": null,
            "kind": "FragmentSpread",
            "name": "ClaimInfoCard_user"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ClaimPageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ClaimJob",
        "kind": "LinkedField",
        "name": "claimJob",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Company",
            "kind": "LinkedField",
            "name": "insurer",
            "plural": false,
            "selections": [
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "policyTypeSuppliersView",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "policyCoverSuppliersView",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "refNumber",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "IncidentDetail",
            "kind": "LinkedField",
            "name": "incidentDetail",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Address",
                "kind": "LinkedField",
                "name": "riskAddress",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "line1",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "suburb",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "state",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "postcode",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "IncidentEvent",
                "kind": "LinkedField",
                "name": "eventType",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "eventName",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "CATCode",
                "kind": "LinkedField",
                "name": "cATCode",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "cATCodeName",
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
            "concreteType": "ContactDetail",
            "kind": "LinkedField",
            "name": "insured",
            "plural": false,
            "selections": [
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
                "kind": "ScalarField",
                "name": "phone1",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "phone2",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "phone3",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "email",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "lodgeDate",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "PolicyType",
            "kind": "LinkedField",
            "name": "policyType",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "policyTypeName",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "PolicyCover",
            "kind": "LinkedField",
            "name": "policyCover",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "policyCoverName",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "ClaimPortfolio",
            "kind": "LinkedField",
            "name": "building",
            "plural": false,
            "selections": (v10/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "ClaimPortfolio",
            "kind": "LinkedField",
            "name": "restoration",
            "plural": false,
            "selections": (v10/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "ClaimPortfolio",
            "kind": "LinkedField",
            "name": "contents",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "portfolioType",
                "storageKey": null
              },
              (v6/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/)
            ],
            "storageKey": null
          }
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
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "ClaimPageQuery",
    "operationKind": "query",
    "text": "query ClaimPageQuery(\n  $where: ENDataEntityKey!\n) {\n  claimJob(where: $where) {\n    id\n    description: claimDescription\n    ...ClaimInfoCard_info\n  }\n  currentUser {\n    ...ClaimInfoCard_user\n    id\n  }\n}\n\nfragment ClaimInfoCard_info on ClaimJob {\n  insurer {\n    companyName\n    policyTypeSuppliersView\n    policyCoverSuppliersView\n  }\n  refNumber\n  incidentDetail {\n    riskAddress {\n      line1\n      suburb\n      state\n      postcode\n    }\n    eventType {\n      eventName\n    }\n    cATCode {\n      cATCodeName\n    }\n  }\n  insured {\n    name\n    phone1\n    phone2\n    phone3\n    email\n  }\n  lodgeDate\n  policyType {\n    policyTypeName\n  }\n  policyCover {\n    policyCoverName\n  }\n  building {\n    claimStatus {\n      statusName\n    }\n    scopingSupplier {\n      companyName\n      companyPhone1\n      companyPhone2\n    }\n    authorisedSupplier {\n      companyName\n      companyPhone1\n      companyPhone2\n    }\n    jobSuppliers {\n      quote {\n        supplier {\n          companyName\n        }\n        quoteStatus: quoteJobStatus {\n          statusName\n        }\n        id\n      }\n      id\n    }\n    toCollectExcess\n    excessValue\n  }\n  restoration {\n    claimStatus {\n      statusName\n    }\n    scopingSupplier {\n      companyName\n      companyPhone1\n      companyPhone2\n    }\n    authorisedSupplier {\n      companyName\n      companyPhone1\n      companyPhone2\n    }\n    jobSuppliers {\n      quote {\n        supplier {\n          companyName\n        }\n        quoteStatus: quoteJobStatus {\n          statusName\n        }\n        id\n      }\n      id\n    }\n    toCollectExcess\n    excessValue\n  }\n  contents {\n    portfolioType\n    claimStatus {\n      statusName\n    }\n    toCollectExcess\n    excessValue\n  }\n}\n\nfragment ClaimInfoCard_user on AuthenticatedUser {\n  userType\n}\n"
  }
};
})();
(node as any).hash = 'c07535aba857f3d78d856a91b2022699';
export default node;
