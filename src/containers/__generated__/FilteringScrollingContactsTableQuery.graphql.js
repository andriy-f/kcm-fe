/**
 * @flow
 * @relayHash 63473d6988c7a6a9fd5410a3784275b1
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type FilteringScrollingContactsTable_contactsData$ref = any;
export type FilteringScrollingContactsTableQueryVariables = {|
  filterText?: ?string
|};
export type FilteringScrollingContactsTableQueryResponse = {|
  +$fragmentRefs: FilteringScrollingContactsTable_contactsData$ref
|};
*/


/*
query FilteringScrollingContactsTableQuery(
  $filterText: String
) {
  ...FilteringScrollingContactsTable_contactsData_4vJyjG
}

fragment FilteringScrollingContactsTable_contactsData_4vJyjG on Query {
  ...ScrollingPaginationContactsTable_contactsData_4vJyjG
}

fragment ScrollingPaginationContactsTable_contactsData_4vJyjG on Query {
  allContacts(first: 10, filterText: $filterText) {
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
    "name": "filterText",
    "type": "String",
    "defaultValue": null
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "FilteringScrollingContactsTableQuery",
  "id": null,
  "text": "query FilteringScrollingContactsTableQuery(\n  $filterText: String\n) {\n  ...FilteringScrollingContactsTable_contactsData_4vJyjG\n}\n\nfragment FilteringScrollingContactsTable_contactsData_4vJyjG on Query {\n  ...ScrollingPaginationContactsTable_contactsData_4vJyjG\n}\n\nfragment ScrollingPaginationContactsTable_contactsData_4vJyjG on Query {\n  allContacts(first: 10, filterText: $filterText) {\n    edges {\n      node {\n        id\n        firstName\n        lastName\n        email\n        phoneNumber\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "FilteringScrollingContactsTableQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "FilteringScrollingContactsTable_contactsData",
        "args": [
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
    "name": "FilteringScrollingContactsTableQuery",
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
            "name": "filterText",
            "variableName": "filterText",
            "type": "String"
          },
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
            "kind": "Variable",
            "name": "filterText",
            "variableName": "filterText",
            "type": "String"
          },
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
})();
// prettier-ignore
(node/*: any*/).hash = '21c84a911ef989b714e7af54d4bd272c';
module.exports = node;
