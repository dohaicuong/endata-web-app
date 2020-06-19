/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type PortfolioType = "Building" | "Contents" | "Restoration" | "%future added value";
export type CommunicationAcknowledge_communication = {
    readonly acknowledged: boolean;
    readonly communicationId: number;
    readonly portfolioType: PortfolioType | null;
    readonly " $refType": "CommunicationAcknowledge_communication";
};
export type CommunicationAcknowledge_communication$data = CommunicationAcknowledge_communication;
export type CommunicationAcknowledge_communication$key = {
    readonly " $data"?: CommunicationAcknowledge_communication$data;
    readonly " $fragmentRefs": FragmentRefs<"CommunicationAcknowledge_communication">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommunicationAcknowledge_communication",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "acknowledged",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "communicationId",
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
  "type": "ClaimCommunication"
};
(node as any).hash = '62042ba3298cc5c1841900366b26e0b7';
export default node;
