/**
 * @flow
 * @relayHash 2e5d68e96e23a3797e1aa384277f84f1
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ContactView_contact$ref = any;
export type ContactViewPageQueryVariables = {|
  id: string
|};
export type ContactViewPageQueryResponse = {|
  +contact: ?{|
    +$fragmentRefs: ContactView_contact$ref
  |}
|};
*/


/*
query ContactViewPageQuery(
  $id: ID!
) {
  contact(id: $id) {
    ...ContactView_contact
    id
  }
}

fragment ContactView_contact on Contact {
  firstName
  lastName
  email
  phoneNumber
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id",
    "type": "ID"
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "ContactViewPageQuery",
  "id": null,
  "text": "query ContactViewPageQuery(\n  $id: ID!\n) {\n  contact(id: $id) {\n    ...ContactView_contact\n    id\n  }\n}\n\nfragment ContactView_contact on Contact {\n  firstName\n  lastName\n  email\n  phoneNumber\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ContactViewPageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "contact",
        "storageKey": null,
        "args": v1,
        "concreteType": "Contact",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "ContactView_contact",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ContactViewPageQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "contact",
        "storageKey": null,
        "args": v1,
        "concreteType": "Contact",
        "plural": false,
        "selections": [
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
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '9c06814e80af9a79261a1fdcbcd207b1';
module.exports = node;
