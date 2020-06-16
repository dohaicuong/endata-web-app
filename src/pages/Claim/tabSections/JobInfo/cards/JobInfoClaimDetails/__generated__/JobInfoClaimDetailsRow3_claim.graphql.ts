/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type JobInfoClaimDetailsRow3_claim = {
    readonly lodgeDate: unknown | null;
    readonly incidentDetail: {
        readonly hold: boolean;
    } | null;
    readonly insurer: {
        readonly quickrepair: boolean | null;
    } | null;
    readonly building: {
        readonly toCollectExcess: boolean | null;
        readonly excessValue: number | null;
        readonly sumInsured: number;
    } | null;
    readonly " $refType": "JobInfoClaimDetailsRow3_claim";
};
export type JobInfoClaimDetailsRow3_claim$data = JobInfoClaimDetailsRow3_claim;
export type JobInfoClaimDetailsRow3_claim$key = {
    readonly " $data"?: JobInfoClaimDetailsRow3_claim$data;
    readonly " $fragmentRefs": FragmentRefs<"JobInfoClaimDetailsRow3_claim">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "JobInfoClaimDetailsRow3_claim",
  "selections": [
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
      "concreteType": "IncidentDetail",
      "kind": "LinkedField",
      "name": "incidentDetail",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "hold",
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
      "name": "insurer",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "quickrepair",
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
(node as any).hash = '69c45c2b1083ebb5564424778eaa9464';
export default node;
