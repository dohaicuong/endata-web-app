/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type JobInfoClaimDetails_claim = {
    readonly id: string;
    readonly insurer: {
        readonly companyName: string;
    } | null;
    readonly incidentDetail: {
        readonly incidentDate: unknown | null;
    } | null;
    readonly caseManager: {
        readonly managerId: number;
    } | null;
    readonly externalLossAdjuster: {
        readonly companyId: number;
    } | null;
    readonly " $refType": "JobInfoClaimDetails_claim";
};
export type JobInfoClaimDetails_claim$data = JobInfoClaimDetails_claim;
export type JobInfoClaimDetails_claim$key = {
    readonly " $data"?: JobInfoClaimDetails_claim$data;
    readonly " $fragmentRefs": FragmentRefs<"JobInfoClaimDetails_claim">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "JobInfoClaimDetails_claim",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
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
          "kind": "ScalarField",
          "name": "incidentDate",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "ClaimManager",
      "kind": "LinkedField",
      "name": "caseManager",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "managerId",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Company",
      "kind": "LinkedField",
      "name": "externalLossAdjuster",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "companyId",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "ClaimJob"
};
(node as any).hash = '65213b293cfe3c3ca02a263f4598b213';
export default node;
