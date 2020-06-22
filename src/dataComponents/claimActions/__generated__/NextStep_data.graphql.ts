/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type PortfolioType = "Building" | "Contents" | "Restoration" | "%future added value";
export type NextStep_data = {
    readonly claimNextStep?: ReadonlyArray<{
        readonly statusName: string;
        readonly description: string;
        readonly nextStep: string;
        readonly portfolioType: PortfolioType | null;
    } | null> | null;
    readonly " $refType": "NextStep_data";
};
export type NextStep_data$data = NextStep_data;
export type NextStep_data$key = {
    readonly " $data"?: NextStep_data$data;
    readonly " $fragmentRefs": FragmentRefs<"NextStep_data">;
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
      "operation": require('./NextStepRefetchQuery.graphql.ts')
    }
  },
  "name": "NextStep_data",
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
(node as any).hash = 'ca9f20b4df4c2b9a413d2a52c7a7b4d5';
export default node;
