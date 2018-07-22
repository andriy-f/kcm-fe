/**
 * @flow
 * @relayHash 3a8d444203713986275b63ee59b76c65
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type FilteringScrollingContactsTable_contactsData$ref = any;
export type ContactsPageQueryVariables = {||};
export type ContactsPageQueryResponse = {|
  +$fragmentRefs: FilteringScrollingContactsTable_contactsData$ref
|};
*/


/*
query ContactsPageQuery {
  ...FilteringScrollingContactsTable_contactsData
}

fragment FilteringScrollingContactsTable_contactsData on Query {
  ...ScrollingPaginationContactsTable_contactsData_nJp8j
}

fragment ScrollingPaginationContactsTable_contactsData_nJp8j on Query {
  allContacts(first: 10) {
    edges {
      node {
        id
        firstName
        lastName
        email
        phoneNumber
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "operationKind": "query",
  "name": "ContactsPageQuery",
  "id": null,
  "text": "query ContactsPageQuery {\n  ...FilteringScrollingContactsTable_contactsData\n}\n\nfragment FilteringScrollingContactsTable_contactsData on Query {\n  ...ScrollingPaginationContactsTable_contactsData_nJp8j\n}\n\nfragment ScrollingPaginationContactsTable_contactsData_nJp8j on Query {\n  allContacts(first: 10) {\n    edges {\n      node {\n        id\n        firstName\n        lastName\n        email\n        phoneNumber\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ContactsPageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "FilteringScrollingContactsTable_contactsData",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ContactsPageQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allContacts",
        "storageKey": "allContacts(first:10)",
        "args": [
          {
            "kind": "Literal",
            "name": "first",
            "value": 10,
            "type": "Int"
          }
        ],
        "concreteType": "ContactConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "ContactEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Contact",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "id",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "firstName",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "lastName",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "email",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "phoneNumber",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "__typename",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "cursor",
                "args": null,
                "storageKey": null
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "pageInfo",
            "storageKey": null,
            "args": null,
            "concreteType": "PageInfo",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "endCursor",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "hasNextPage",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      },
      {
        "kind": "LinkedHandle",
        "alias": null,
        "name": "allContacts",
        "args": [
          {
            "kind": "Literal",
            "name": "first",
            "value": 10,
            "type": "Int"
          }
        ],
        "handle": "connection",
        "key": "ScrollingPaginationContactsTable_allContacts",
        "filters": [
          "filterText"
        ]
      }
    ]
  }
};
// prettier-ignore
(node/*: any*/).hash = '84d1aea9e39c92b6ea9ff4a346be1b3a';
module.exports = node;
