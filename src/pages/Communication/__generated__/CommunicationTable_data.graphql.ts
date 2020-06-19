/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type PortfolioType = "Building" | "Contents" | "Restoration" | "%future added value";
export type CommunicationTable_data = {
    readonly totalCount: number | null;
    readonly edges: ReadonlyArray<{
        readonly node: {
            readonly claimId: string | null;
            readonly portfolioType: PortfolioType | null;
            readonly claimRef: string;
            readonly sendDate: unknown;
            readonly senderName: string | null;
            readonly senderCompanyName: string | null;
            readonly message: string | null;
            readonly " $fragmentRefs": FragmentRefs<"CommunicationAcknowledge_communication" | "CommunicationReply_communication">;
        } | null;
    } | null> | null;
    readonly " $refType": "CommunicationTable_data";
};
export type CommunicationTable_data$data = CommunicationTable_data;
export type CommunicationTable_data$key = {
    readonly " $data"?: CommunicationTable_data$data;
    readonly " $fragmentRefs": FragmentRefs<"CommunicationTable_data">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommunicationTable_data",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "totalCount",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "ClaimCommunicationEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "ClaimCommunication",
          "kind": "LinkedField",
          "name": "node",
          "plural": false,
          "selections": [
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
              "name": "portfolioType",
              "storageKey": null
            },
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
              "name": "sendDate",
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
              "name": "senderCompanyName",
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
              "args": null,
              "kind": "FragmentSpread",
              "name": "CommunicationAcknowledge_communication"
            },
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "CommunicationReply_communication"
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "ClaimCommunicationConnection"
};
(node as any).hash = '873d5f2b90c90637ecc47dd24a6621ea';
export default node;
