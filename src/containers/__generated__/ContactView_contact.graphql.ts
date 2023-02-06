/**
 * @generated SignedSource<<25aebab8c366bd95a606baff9327d5ca>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ContactView_contact$data = {
  readonly email: string | null;
  readonly firstName: string | null;
  readonly lastName: string | null;
  readonly phoneNumber: string | null;
  readonly " $fragmentType": "ContactView_contact";
};
export type ContactView_contact$key = {
  readonly " $data"?: ContactView_contact$data;
  readonly " $fragmentSpreads": FragmentRefs<"ContactView_contact">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ContactView_contact",
  "selections": [
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

(node as any).hash = "8fae8e2cb74477981dcc0498a3d65d14";

export default node;
