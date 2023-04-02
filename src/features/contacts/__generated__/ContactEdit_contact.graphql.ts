/**
 * @generated SignedSource<<ee57a7aceff179c87b0020f70091777d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ContactEdit_contact$data = {
  readonly email: string | null;
  readonly firstName: string | null;
  readonly id: string;
  readonly lastName: string | null;
  readonly phoneNumber: string | null;
  readonly " $fragmentType": "ContactEdit_contact";
};
export type ContactEdit_contact$key = {
  readonly " $data"?: ContactEdit_contact$data;
  readonly " $fragmentSpreads": FragmentRefs<"ContactEdit_contact">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ContactEdit_contact",
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
      "kind": "ScalarField",
      "name": "firstName",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "lastName",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "email",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "phoneNumber",
      "storageKey": null
    }
  ],
  "type": "Contact",
  "abstractKey": null
};

(node as any).hash = "b449bacb22c0fa38b8fd43e2b0abee94";

export default node;
