/**
 * @flow
 * @relayHash 1fb683c48cd5ec215d9350536332df50
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
    +id: ?string,
    +clientMutationId: ?string,
  |}
|};
*/


/*
mutation DeleteContactMutation(
  $input: DeleteContactInput!
) {
  deleteContact(input: $input) {
    id
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
        "name": "id",
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
  "text": "mutation DeleteContactMutation(\n  $input: DeleteContactInput!\n) {\n  deleteContact(input: $input) {\n    id\n    clientMutationId\n  }\n}\n",
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
(node/*: any*/).hash = 'acdac4ecf15fcb746cf00a3c21e38db1';
module.exports = node;
