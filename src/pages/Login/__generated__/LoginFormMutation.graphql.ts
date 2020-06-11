/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type UserCredential = {
    userLogin: string;
    password: string;
};
export type LoginFormMutationVariables = {
    input: UserCredential;
};
export type LoginFormMutationResponse = {
    readonly userAuthenticateAllServer: ReadonlyArray<{
        readonly accessToken: string;
        readonly refreshToken: string;
        readonly user: {
            readonly userName: string;
            readonly privileges: {
                readonly menus: ReadonlyArray<{
                    readonly nodeName: string;
                } | null> | null;
            } | null;
        } | null;
    } | null> | null;
};
export type LoginFormMutation = {
    readonly response: LoginFormMutationResponse;
    readonly variables: LoginFormMutationVariables;
};



/*
mutation LoginFormMutation(
  $input: UserCredential!
) {
  userAuthenticateAllServer(input: $input) {
    accessToken
    refreshToken
    user {
      userName
      privileges {
        menus {
          nodeName
        }
      }
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input",
    "type": "UserCredential!"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "UserValidation",
    "kind": "LinkedField",
    "name": "userAuthenticateAllServer",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "accessToken",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "refreshToken",
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
            "kind": "ScalarField",
            "name": "userName",
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
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "LoginFormMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "LoginFormMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "LoginFormMutation",
    "operationKind": "mutation",
    "text": "mutation LoginFormMutation(\n  $input: UserCredential!\n) {\n  userAuthenticateAllServer(input: $input) {\n    accessToken\n    refreshToken\n    user {\n      userName\n      privileges {\n        menus {\n          nodeName\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '0e4bd53f632e8b0e5e42ca47d47114f6';
export default node;
