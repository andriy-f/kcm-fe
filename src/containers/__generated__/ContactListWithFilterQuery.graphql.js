/**
 * @flow
 * @relayHash 4e9ed2680c343754e7884ccac5331054
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ContactListWithFilter_contactsData$ref = any;
export type ContactListWithFilterQueryVariables = {|
  filterText?: ?string
|};
export type ContactListWithFilterQueryResponse = {|
  +$fragmentRefs: ContactListWithFilter_contactsData$ref
|};
*/


/*
query ContactListWithFilterQuery(
  $filterText: String
) {
  ...ContactListWithFilter_contactsData_4vJyjG
}

fragment ContactListWithFilter_contactsData_4vJyjG on Query {
  ...ContactList_contactsData_4vJyjG
}

fragment ContactList_contactsData_4vJyjG on Query {
  allContacts(first: 5, filterText: $filterText) {
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
  "name": "ContactListWithFilterQuery",
  "id": null,
  "text": "query ContactListWithFilterQuery(\n  $filterText: String\n) {\n  ...ContactListWithFilter_contactsData_4vJyjG\n}\n\nfragment ContactListWithFilter_contactsData_4vJyjG on Query {\n  ...ContactList_contactsData_4vJyjG\n}\n\nfragment ContactList_contactsData_4vJyjG on Query {\n  allContacts(first: 5, filterText: $filterText) {\n    edges {\n      node {\n        id\n        firstName\n        lastName\n        email\n        phoneNumber\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ContactListWithFilterQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "ContactListWithFilter_contactsData",
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
    "name": "ContactListWithFilterQuery",
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
            "value": 5,
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
            "value": 5,
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
(node/*: any*/).hash = '1202a66506207462f7fee436c72a443b';
module.exports = node;
