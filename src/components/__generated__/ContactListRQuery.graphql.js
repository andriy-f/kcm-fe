/**
 * @flow
 * @relayHash 7af114af69b1d5a85f5176ef8548797f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ContactListRQueryVariables = {||};
export type ContactListRQueryResponse = {|
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
query ContactListRQuery {
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
  "name": "ContactListRQuery",
  "id": null,
  "text": "query ContactListRQuery {\n  allContacts {\n    contacts {\n      id\n      firstName\n      lastName\n      email\n      phoneNumber\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ContactListRQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v0
  },
  "operation": {
    "kind": "Operation",
    "name": "ContactListRQuery",
    "argumentDefinitions": [],
    "selections": v0
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '62bed361a809849de2511f4c8cb64534';
module.exports = node;
