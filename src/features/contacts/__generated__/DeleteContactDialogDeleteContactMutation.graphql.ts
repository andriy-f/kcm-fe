/**
 * @generated SignedSource<<f3418db9db6a197e48256c7dd2faba06>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type DeleteContactInput = {
  clientMutationId?: string | null | undefined;
  contactId?: string | null | undefined;
  id?: string | null | undefined;
};
export type DeleteContactDialogDeleteContactMutation$variables = {
  connections: ReadonlyArray<string>;
  input: DeleteContactInput;
};
export type DeleteContactDialogDeleteContactMutation$data = {
  readonly deleteContact: {
    readonly clientMutationId: string | null | undefined;
    readonly deletedId: string | null | undefined;
  } | null | undefined;
};
export type DeleteContactDialogDeleteContactMutation = {
  response: DeleteContactDialogDeleteContactMutation$data;
  variables: DeleteContactDialogDeleteContactMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "connections"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "input"
},
v2 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "deletedId",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "clientMutationId",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "DeleteContactDialogDeleteContactMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "DeleteContactPayload",
        "kind": "LinkedField",
        "name": "deleteContact",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "DeleteContactDialogDeleteContactMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "DeleteContactPayload",
        "kind": "LinkedField",
        "name": "deleteContact",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "deleteEdge",
            "key": "",
            "kind": "ScalarHandle",
            "name": "deletedId",
            "handleArgs": [
              {
                "kind": "Variable",
                "name": "connections",
                "variableName": "connections"
              }
            ]
          },
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "54cd77cf7724b3ece08b910acac3c1aa",
    "id": null,
    "metadata": {},
    "name": "DeleteContactDialogDeleteContactMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteContactDialogDeleteContactMutation(\n  $input: DeleteContactInput!\n) {\n  deleteContact(input: $input) {\n    deletedId\n    clientMutationId\n  }\n}\n"
  }
};
})();

(node as any).hash = "90645ac7592d9f17506c504d66a18a86";

export default node;
