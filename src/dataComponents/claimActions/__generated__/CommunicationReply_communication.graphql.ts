/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type AccessRole = "Adjustor" | "Administrator" | "Builder" | "ContentSupplier" | "Estimator" | "Insurance" | "InternalAB" | "LossAdjuster" | "Restorer" | "Specialist" | "SystemAdmin" | "UNDEFINED" | "%future added value";
export type CommunicationReply_communication = {
    readonly claimRef: string;
    readonly senderName: string | null;
    readonly recieverCompanyName: string | null;
    readonly message: string | null;
    readonly claimId: string | null;
    readonly senderCompanyId: number | null;
    readonly senderRole: AccessRole | null;
    readonly " $refType": "CommunicationReply_communication";
};
export type CommunicationReply_communication$data = CommunicationReply_communication;
export type CommunicationReply_communication$key = {
    readonly " $data"?: CommunicationReply_communication$data;
    readonly " $fragmentRefs": FragmentRefs<"CommunicationReply_communication">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommunicationReply_communication",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "claimRef",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "senderName",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "recieverCompanyName",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "message",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "claimId",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "senderCompanyId",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "senderRole",
      "storageKey": null
    }
  ],
  "type": "ClaimCommunication"
};
(node as any).hash = 'bf1a40320d2815b61ffc63801d727187';
export default node;
