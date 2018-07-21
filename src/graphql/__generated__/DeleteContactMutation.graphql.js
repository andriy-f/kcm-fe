/**
 * @flow
 * @relayHash 26bc4bd6e169bcbf2e0e119f6241e06b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteContactInput = {
  contactId?: ?string,
  id?: ?string,
  clientMutationId?: ?string,
};
export type DeleteContactMutationVariables = {|
  input: DeleteContactInput
|};
export type DeleteContactMutationResponse = {|
  +deleteContact: ?{|
    +deletedId: ?string,
    +clientMutationId: ?string,
  |}
|};
*/


/*
mutation DeleteContactMutation(
  $input: DeleteContactInput!
) {
  deleteContact(input: $input) {
    deletedId
    clientMutationId
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "DeleteContactInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "deleteContact",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "DeleteContactInput!"
      }
    ],
    "concreteType": "DeleteContactPayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "deletedId",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "clientMutationId",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "DeleteContactMutation",
  "id": null,
  "text": "mutation DeleteContactMutation(\n  $input: DeleteContactInput!\n) {\n  deleteContact(input: $input) {\n    deletedId\n    clientMutationId\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "DeleteContactMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "DeleteContactMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '7b321fde339dc71a32be64f442a0f8b9';
module.exports = node;
