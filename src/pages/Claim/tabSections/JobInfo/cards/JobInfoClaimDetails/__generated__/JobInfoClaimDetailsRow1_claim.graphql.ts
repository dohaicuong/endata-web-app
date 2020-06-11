/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type JobInfoClaimDetailsRow1_claim = {
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
    readonly " $refType": "JobInfoClaimDetailsRow1_claim";
};
export type JobInfoClaimDetailsRow1_claim$data = JobInfoClaimDetailsRow1_claim;
export type JobInfoClaimDetailsRow1_claim$key = {
    readonly " $data"?: JobInfoClaimDetailsRow1_claim$data;
    readonly " $fragmentRefs": FragmentRefs<"JobInfoClaimDetailsRow1_claim">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "JobInfoClaimDetailsRow1_claim",
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
(node as any).hash = '041b80f2d77ab81bb09236981c4b3a89';
export default node;
