/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type NavbarQueryVariables = {};
export type NavbarQueryResponse = {
    readonly me: {
        readonly " $fragmentRefs": FragmentRefs<"LeftSide_data" | "RightSide_data">;
    } | null;
};
export type NavbarQuery = {
    readonly response: NavbarQueryResponse;
    readonly variables: NavbarQueryVariables;
};



/*
query NavbarQuery {
  me {
    ...LeftSide_data
    ...RightSide_data
  }
}

fragment LeftSide_data on User {
  company {
    customisation {
      companyLogo: displayCompanyLogo
    }
  }
  privileges {
    menus {
      nodeName
    }
  }
}

fragment RightSide_data on User {
  privileges {
    menus {
      nodeName
    }
  }
}
*/

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "NavbarQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "LeftSide_data"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "RightSide_data"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "NavbarQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "me",
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
                "concreteType": "CompanyCustomisation",
                "kind": "LinkedField",
                "name": "customisation",
                "plural": false,
                "selections": [
                  {
                    "alias": "companyLogo",
                    "args": null,
                    "kind": "ScalarField",
                    "name": "displayCompanyLogo",
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
            "concreteType": "UserPrivileges",
            "kind": "LinkedField",
            "name": "privileges",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "PrivilegeMenu",
                "kind": "LinkedField",
                "name": "menus",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "nodeName",
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
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "NavbarQuery",
    "operationKind": "query",
    "text": "query NavbarQuery {\n  me {\n    ...LeftSide_data\n    ...RightSide_data\n  }\n}\n\nfragment LeftSide_data on User {\n  company {\n    customisation {\n      companyLogo: displayCompanyLogo\n    }\n  }\n  privileges {\n    menus {\n      nodeName\n    }\n  }\n}\n\nfragment RightSide_data on User {\n  privileges {\n    menus {\n      nodeName\n    }\n  }\n}\n"
  }
};
(node as any).hash = 'c19c36e297b6ad743fe1914eb83363a1';
export default node;
