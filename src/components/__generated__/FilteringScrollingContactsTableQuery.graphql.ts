/**
 * @generated SignedSource<<6379f4df97375d74ab14b8bbf7f54965>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FilteringScrollingContactsTableQuery$variables = {
  filterText?: string | null;
};
export type FilteringScrollingContactsTableQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"FilteringScrollingContactsTable_contactsData">;
};
export type FilteringScrollingContactsTableQuery = {
  response: FilteringScrollingContactsTableQuery$data;
  variables: FilteringScrollingContactsTableQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "filterText"
  }
],
v1 = {
  "kind": "Variable",
  "name": "filterText",
  "variableName": "filterText"
},
v2 = [
  (v1/*: any*/),
  {
    "kind": "Literal",
    "name": "first",
    "value": 10
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "FilteringScrollingContactsTableQuery",
    "selections": [
      {
        "args": [
          (v1/*: any*/)
        ],
        "kind": "FragmentSpread",
        "name": "FilteringScrollingContactsTable_contactsData"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "FilteringScrollingContactsTableQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "ContactConnection",
        "kind": "LinkedField",
        "name": "allContacts",
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
      },
      {
        "alias": null,
        "args": (v2/*: any*/),
        "filters": [
          "filterText"
        ],
        "handle": "connection",
        "key": "ScrollingPaginationContactsTable_allContacts",
        "kind": "LinkedHandle",
        "name": "allContacts"
      }
    ]
  },
  "params": {
    "cacheID": "2d5a1424b90ed6219f249263dcd1616a",
    "id": null,
    "metadata": {},
    "name": "FilteringScrollingContactsTableQuery",
    "operationKind": "query",
    "text": "query FilteringScrollingContactsTableQuery(\n  $filterText: String\n) {\n  ...FilteringScrollingContactsTable_contactsData_4vJyjG\n}\n\nfragment FilteringScrollingContactsTable_contactsData_4vJyjG on Query {\n  ...ScrollingPaginationContactsTable_contactsData_4vJyjG\n}\n\nfragment ScrollingPaginationContactsTable_contactsData_4vJyjG on Query {\n  allContacts(first: 10, filterText: $filterText) {\n    edges {\n      node {\n        id\n        firstName\n        lastName\n        email\n        phoneNumber\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "21c84a911ef989b714e7af54d4bd272c";

export default node;
