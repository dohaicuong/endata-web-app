/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type JobInfoClaimDetailsRow6_claim = {
    readonly insurer: {
        readonly enableMultipleRisks: boolean | null;
        readonly additionalRefNo: boolean | null;
        readonly useInternalAssessor: boolean;
        readonly cm2nd: boolean | null;
    } | null;
    readonly riskname: string | null;
    readonly additionalRefNumber: string | null;
    readonly homeAssessor: {
        readonly assesorId: number;
    } | null;
    readonly brc: {
        readonly managerId: number;
    } | null;
    readonly " $refType": "JobInfoClaimDetailsRow6_claim";
};
export type JobInfoClaimDetailsRow6_claim$data = JobInfoClaimDetailsRow6_claim;
export type JobInfoClaimDetailsRow6_claim$key = {
    readonly " $data"?: JobInfoClaimDetailsRow6_claim$data;
    readonly " $fragmentRefs": FragmentRefs<"JobInfoClaimDetailsRow6_claim">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "JobInfoClaimDetailsRow6_claim",
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
          "name": "enableMultipleRisks",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "additionalRefNo",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "useInternalAssessor",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "cm2nd",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "riskname",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "additionalRefNumber",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "InternalAssesor",
      "kind": "LinkedField",
      "name": "homeAssessor",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "assesorId",
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
      "name": "brc",
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
    }
  ],
  "type": "ClaimJob"
};
(node as any).hash = '731dbc4779b36a7449719f63a6c6669f';
export default node;
