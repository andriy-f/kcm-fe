/**
 * @flow
 * @relayHash 90af860f6b3ca83d4ce5050f8ea40c97
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ContactList_allContacts$ref = any;
type ContactView_contact$ref = any;
export type ContactsPageQueryVariables = {||};
export type ContactsPageQueryResponse = {|
  +alfaContact: ?{|
    +id: string,
    +contactId: ?string,
    +firstName: ?string,
  |},
  +betaContact: ?{|
    +$fragmentRefs: ContactView_contact$ref
  |},
  +$fragmentRefs: ContactList_allContacts$ref,
|};
*/


/*
query ContactsPageQuery {
  alfaContact: contact(id: "Y29udGFjdDo1NzhmMmJhYTEyZWFlYmFiZWM0YWYyOGI=") {
    id
    contactId
    firstName
  }
  betaContact: contact(id: "Y29udGFjdDo1NzhmMmJhYTEyZWFlYmFiZWM0YWYyOGI=") {
    ...ContactView_contact
    id
  }
  ...ContactList_allContacts
}

fragment ContactView_contact on Contact {
  id
  contactId
  firstName
  lastName
  email
  phoneNumber
}

fragment ContactList_allContacts on Query {
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

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "Y29udGFjdDo1NzhmMmJhYTEyZWFlYmFiZWM0YWYyOGI=",
    "type": "ID"
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "contactId",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "firstName",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "LinkedField",
  "alias": "alfaContact",
  "name": "contact",
  "storageKey": "contact(id:\"Y29udGFjdDo1NzhmMmJhYTEyZWFlYmFiZWM0YWYyOGI=\")",
  "args": v0,
  "concreteType": "Contact",
  "plural": false,
  "selections": [
    v1,
    v2,
    v3
  ]
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "lastName",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "email",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "phoneNumber",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "ContactsPageQuery",
  "id": null,
  "text": "query ContactsPageQuery {\n  alfaContact: contact(id: \"Y29udGFjdDo1NzhmMmJhYTEyZWFlYmFiZWM0YWYyOGI=\") {\n    id\n    contactId\n    firstName\n  }\n  betaContact: contact(id: \"Y29udGFjdDo1NzhmMmJhYTEyZWFlYmFiZWM0YWYyOGI=\") {\n    ...ContactView_contact\n    id\n  }\n  ...ContactList_allContacts\n}\n\nfragment ContactView_contact on Contact {\n  id\n  contactId\n  firstName\n  lastName\n  email\n  phoneNumber\n}\n\nfragment ContactList_allContacts on Query {\n  allContacts(first: 10) {\n    edges {\n      node {\n        id\n        firstName\n        lastName\n        email\n        phoneNumber\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ContactsPageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      v4,
      {
        "kind": "LinkedField",
        "alias": "betaContact",
        "name": "contact",
        "storageKey": "contact(id:\"Y29udGFjdDo1NzhmMmJhYTEyZWFlYmFiZWM0YWYyOGI=\")",
        "args": v0,
        "concreteType": "Contact",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "ContactView_contact",
            "args": null
          }
        ]
      },
      {
        "kind": "FragmentSpread",
        "name": "ContactList_allContacts",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ContactsPageQuery",
    "argumentDefinitions": [],
    "selections": [
      v4,
      {
        "kind": "LinkedField",
        "alias": "betaContact",
        "name": "contact",
        "storageKey": "contact(id:\"Y29udGFjdDo1NzhmMmJhYTEyZWFlYmFiZWM0YWYyOGI=\")",
        "args": v0,
        "concreteType": "Contact",
        "plural": false,
        "selections": [
          v1,
          v2,
          v3,
          v5,
          v6,
          v7
        ]
      },
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
                  v1,
                  v3,
                  v5,
                  v6,
                  v7,
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
        "key": "ContactList_allContacts",
        "filters": [
          "filterText"
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '0a5187371717d2f1eaf00e0ba297ad73';
module.exports = node;
