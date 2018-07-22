/**
 * @flow
 * @relayHash 5d5c12a36b72663ad2f42cdaa40fa894
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ContactList_contactsData$ref = any;
export type ContactListQueryVariables = {|
  count: number,
  cursor?: ?string,
  filterText?: ?string,
|};
export type ContactListQueryResponse = {|
  +$fragmentRefs: ContactList_contactsData$ref
|};
*/


/*
query ContactListQuery(
  $count: Int!
  $cursor: String
  $filterText: String
) {
  ...ContactList_contactsData_UImuz
}

fragment ContactList_contactsData_UImuz on Query {
  allContacts(first: $count, after: $cursor, filterText: $filterText) {
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
    "kind": "LocalArgument",
    "name": "count",
    "type": "Int!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "cursor",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "filterText",
    "type": "String",
    "defaultValue": null
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "ContactListQuery",
  "id": null,
  "text": "query ContactListQuery(\n  $count: Int!\n  $cursor: String\n  $filterText: String\n) {\n  ...ContactList_contactsData_UImuz\n}\n\nfragment ContactList_contactsData_UImuz on Query {\n  allContacts(first: $count, after: $cursor, filterText: $filterText) {\n    edges {\n      node {\n        id\n        firstName\n        lastName\n        email\n        phoneNumber\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ContactListQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "ContactList_contactsData",
        "args": [
          {
            "kind": "Variable",
            "name": "count",
            "variableName": "count",
            "type": null
          },
          {
            "kind": "Variable",
            "name": "cursor",
            "variableName": "cursor",
            "type": null
          },
          {
            "kind": "Variable",
            "name": "filterText",
            "variableName": "filterText",
            "type": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ContactListQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allContacts",
        "storageKey": null,
        "args": [
          {
            "kind": "Variable",
            "name": "after",
            "variableName": "cursor",
            "type": "String"
          },
          {
            "kind": "Variable",
            "name": "filterText",
            "variableName": "filterText",
            "type": "String"
          },
          {
            "kind": "Variable",
            "name": "first",
            "variableName": "count",
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
            "kind": "Variable",
            "name": "after",
            "variableName": "cursor",
            "type": "String"
          },
          {
            "kind": "Variable",
            "name": "filterText",
            "variableName": "filterText",
            "type": "String"
          },
          {
            "kind": "Variable",
            "name": "first",
            "variableName": "count",
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
(node/*: any*/).hash = '728cd92fb3d52a3aa3c8c553e1245d5f';
module.exports = node;
