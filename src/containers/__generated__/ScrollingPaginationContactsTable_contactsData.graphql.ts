/**
 * @generated SignedSource<<e9bb059e07502d4e638f0ad14031a83b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ScrollingPaginationContactsTable_contactsData$data = {
  readonly allContacts: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly email: string | null;
        readonly firstName: string | null;
        readonly id: string;
        readonly lastName: string | null;
        readonly phoneNumber: string | null;
      } | null;
    } | null> | null;
  } | null;
  readonly " $fragmentType": "ScrollingPaginationContactsTable_contactsData";
};
export type ScrollingPaginationContactsTable_contactsData$key = {
  readonly " $data"?: ScrollingPaginationContactsTable_contactsData$data;
  readonly " $fragmentSpreads": FragmentRefs<"ScrollingPaginationContactsTable_contactsData">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "defaultValue": 10,
      "kind": "LocalArgument",
      "name": "count"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "cursor"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "filterText"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "cursor",
        "direction": "forward",
        "path": [
          "allContacts"
        ]
      }
    ]
  },
  "name": "ScrollingPaginationContactsTable_contactsData",
  "selections": [
    {
      "alias": "allContacts",
      "args": [
        {
          "kind": "Variable",
          "name": "filterText",
          "variableName": "filterText"
        }
      ],
      "concreteType": "ContactConnection",
      "kind": "LinkedField",
      "name": "__ScrollingPaginationContactsTable_allContacts_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "ContactEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Contact",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
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
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "__typename",
                  "storageKey": null
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "cursor",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "PageInfo",
          "kind": "LinkedField",
          "name": "pageInfo",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "endCursor",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "hasNextPage",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "01056b63dfb84061056b4dcaa486e02a";

export default node;
