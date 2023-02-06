/**
 * @generated SignedSource<<06ca0224012d1041828e2b2d0762c691>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FilteringScrollingContactsTable_contactsData$data = {
  readonly " $fragmentSpreads": FragmentRefs<"ScrollingPaginationContactsTable_contactsData">;
  readonly " $fragmentType": "FilteringScrollingContactsTable_contactsData";
};
export type FilteringScrollingContactsTable_contactsData$key = {
  readonly " $data"?: FilteringScrollingContactsTable_contactsData$data;
  readonly " $fragmentSpreads": FragmentRefs<"FilteringScrollingContactsTable_contactsData">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "filterText"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "FilteringScrollingContactsTable_contactsData",
  "selections": [
    {
      "args": [
        {
          "kind": "Variable",
          "name": "filterText",
          "variableName": "filterText"
        }
      ],
      "kind": "FragmentSpread",
      "name": "ScrollingPaginationContactsTable_contactsData"
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "3f6652362bd6c8d668a0d708a2b076b6";

export default node;
