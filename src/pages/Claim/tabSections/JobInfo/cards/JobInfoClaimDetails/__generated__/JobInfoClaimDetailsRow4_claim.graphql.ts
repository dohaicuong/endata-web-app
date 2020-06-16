/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type JobInfoClaimDetailsRow4_claim = {
    readonly insurer: {
        readonly companyName: string;
    } | null;
    readonly incidentDetail: {
        readonly eventType: {
            readonly eventTypeId: number;
        } | null;
        readonly cATCode: {
            readonly cATCodeId: number;
        } | null;
    } | null;
    readonly contents: {
        readonly toCollectExcess: boolean | null;
        readonly excessValue: number | null;
        readonly sumInsured: number;
    } | null;
    readonly " $refType": "JobInfoClaimDetailsRow4_claim";
};
export type JobInfoClaimDetailsRow4_claim$data = JobInfoClaimDetailsRow4_claim;
export type JobInfoClaimDetailsRow4_claim$key = {
    readonly " $data"?: JobInfoClaimDetailsRow4_claim$data;
    readonly " $fragmentRefs": FragmentRefs<"JobInfoClaimDetailsRow4_claim">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "JobInfoClaimDetailsRow4_claim",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Company",
      "kind": "LinkedField",
      "name": "insurer",
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
      "concreteType": "IncidentDetail",
      "kind": "LinkedField",
      "name": "incidentDetail",
      "plural": false,
      "selections": [
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
              "name": "eventTypeId",
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
              "name": "cATCodeId",
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
      "concreteType": "ClaimPortfolio",
      "kind": "LinkedField",
      "name": "contents",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "toCollectExcess",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "excessValue",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "sumInsured",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "ClaimJob"
};
(node as any).hash = 'd68b26dc671ececf7d3a5b618e15a695';
export default node;
