/**
 * @flow
 * @relayHash 87da026571d522242cc9a702c83c641d
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateContactInput = {
  id?: ?string,
  contactId?: ?string,
  firstName?: ?string,
  lastName?: ?string,
  email?: ?string,
  phoneNumber?: ?string,
  clientMutationId?: ?string,
};
export type UpdateContactMutationVariables = {|
  input: UpdateContactInput
|};
export type UpdateContactMutationResponse = {|
  +updateContact: ?{|
    +contact: ?{|
      +id: string,
      +firstName: ?string,
      +lastName: ?string,
      +email: ?string,
      +phoneNumber: ?string,
    |}
  |}
|};
*/


/*
mutation UpdateContactMutation(
  $input: UpdateContactInput!
) {
  updateContact(input: $input) {
    contact {
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
    "kind": "LocalArgument",
    "name": "input",
    "type": "UpdateContactInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "updateContact",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "UpdateContactInput!"
      }
    ],
    "concreteType": "UpdateContactPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "contact",
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
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "UpdateContactMutation",
  "id": null,
  "text": "mutation UpdateContactMutation(\n  $input: UpdateContactInput!\n) {\n  updateContact(input: $input) {\n    contact {\n      id\n      firstName\n      lastName\n      email\n      phoneNumber\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "UpdateContactMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "UpdateContactMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8ebcff132c7276014bf2db29a30c46ad';
module.exports = node;
