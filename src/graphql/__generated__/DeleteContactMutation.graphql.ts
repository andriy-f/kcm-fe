/**
 * @generated SignedSource<<69864aef7f5abc1aa67ba23c3ee40357>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type DeleteContactInput = {
  clientMutationId?: string | null;
  contactId?: string | null;
  id?: string | null;
};
export type DeleteContactMutation$variables = {
  input: DeleteContactInput;
};
export type DeleteContactMutation$data = {
  readonly deleteContact: {
    readonly clientMutationId: string | null;
    readonly deletedId: string | null;
  } | null;
};
export type DeleteContactMutation = {
  response: DeleteContactMutation$data;
  variables: DeleteContactMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "DeleteContactPayload",
    "kind": "LinkedField",
    "name": "deleteContact",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "deletedId",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "clientMutationId",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "DeleteContactMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteContactMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "3bccae4b30054a13e8f3718f5094a3c5",
    "id": null,
    "metadata": {},
    "name": "DeleteContactMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteContactMutation(\n  $input: DeleteContactInput!\n) {\n  deleteContact(input: $input) {\n    deletedId\n    clientMutationId\n  }\n}\n"
  }
};
})();

(node as any).hash = "7b321fde339dc71a32be64f442a0f8b9";

export default node;
