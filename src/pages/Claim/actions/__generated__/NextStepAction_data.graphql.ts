/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type PortfolioType = "Building" | "Contents" | "Restoration" | "%future added value";
export type NextStepAction_data = {
    readonly claimNextStep?: ReadonlyArray<{
        readonly statusName: string;
        readonly description: string;
        readonly nextStep: string;
        readonly portfolioType: PortfolioType | null;
    } | null> | null;
    readonly " $refType": "NextStepAction_data";
};
export type NextStepAction_data$data = NextStepAction_data;
export type NextStepAction_data$key = {
    readonly " $data"?: NextStepAction_data$data;
    readonly " $fragmentRefs": FragmentRefs<"NextStepAction_data">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "defaultValue": false,
      "kind": "LocalArgument",
      "name": "isOpen",
      "type": "Boolean"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "claimId",
      "type": "ID!"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "refetch": {
      "connection": null,
      "fragmentPathInResult": [],
      "operation": require('./NextStepActionRefetchQuery.graphql.ts')
    }
  },
  "name": "NextStepAction_data",
  "selections": [
    {
      "condition": "isOpen",
      "kind": "Condition",
      "passingValue": true,
      "selections": [
        {
          "alias": null,
          "args": [
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
          "concreteType": "ClaimJobStatusInfo",
          "kind": "LinkedField",
          "name": "claimNextStep",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "statusName",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "description",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "nextStep",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "portfolioType",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ]
    }
  ],
  "type": "Query"
};
(node as any).hash = 'e4253cc711330b480ebed36c34e3001f';
export default node;
