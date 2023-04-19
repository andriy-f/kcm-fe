/**
 * @generated SignedSource<<d11a82c1bc29b75bc83dc1f60ced7e28>>
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
export type ContactsTableContactDeleteMutation$variables = {
  connections: ReadonlyArray<string>;
  input: DeleteContactInput;
};
export type ContactsTableContactDeleteMutation$data = {
  readonly deleteContact: {
    readonly clientMutationId: string | null;
    readonly deletedId: string | null;
  } | null;
};
export type ContactsTableContactDeleteMutation = {
  response: ContactsTableContactDeleteMutation$data;
  variables: ContactsTableContactDeleteMutation$variables;
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
    "name": "ContactsTableContactDeleteMutation",
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
    "name": "ContactsTableContactDeleteMutation",
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
    "cacheID": "8dd92445245f181845648bdfb14d4645",
    "id": null,
    "metadata": {},
    "name": "ContactsTableContactDeleteMutation",
    "operationKind": "mutation",
    "text": "mutation ContactsTableContactDeleteMutation(\n  $input: DeleteContactInput!\n) {\n  deleteContact(input: $input) {\n    deletedId\n    clientMutationId\n  }\n}\n"
  }
};
})();

(node as any).hash = "9cdae2cd19260cbe8ee6e7d4a7343115";

export default node;
