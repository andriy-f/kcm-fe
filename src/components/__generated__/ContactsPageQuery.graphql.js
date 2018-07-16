/**
 * @flow
 * @relayHash 24230f93c5c7ee510000513388b30734
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ContactsPageQueryVariables = {||};
export type ContactsPageQueryResponse = {|
  +allContacts: ?{|
    +contacts: ?$ReadOnlyArray<?{|
      +id: string,
      +firstName: ?string,
      +lastName: ?string,
      +email: ?string,
      +phoneNumber: ?string,
    |}>
  |}
|};
*/


/*
query ContactsPageQuery {
  allContacts {
    contacts {
      id
      firstName
      lastName
      email
      phoneNumber
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "allContacts",
    "storageKey": null,
    "args": null,
    "concreteType": "ContactConnection",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "contacts",
        "storageKey": null,
        "args": null,
        "concreteType": "Contact",
        "plural": true,
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
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "ContactsPageQuery",
  "id": null,
  "text": "query ContactsPageQuery {\n  allContacts {\n    contacts {\n      id\n      firstName\n      lastName\n      email\n      phoneNumber\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ContactsPageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v0
  },
  "operation": {
    "kind": "Operation",
    "name": "ContactsPageQuery",
    "argumentDefinitions": [],
    "selections": v0
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'aa198ab6858cf74edc01b94ca6f2bca0';
module.exports = node;
