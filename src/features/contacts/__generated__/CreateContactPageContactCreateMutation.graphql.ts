/**
 * @generated SignedSource<<a0e3fa3e3e8614e65206885387931472>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type CreateContactInput = {
  clientMutationId?: string | null;
  email?: string | null;
  firstName: string;
  lastName: string;
  phoneNumber?: string | null;
};
export type CreateContactPageContactCreateMutation$variables = {
  input: CreateContactInput;
};
export type CreateContactPageContactCreateMutation$data = {
  readonly createContact: {
    readonly clientMutationId: string | null;
    readonly contact: {
      readonly contactId: string | null;
      readonly email: string | null;
      readonly firstName: string | null;
      readonly id: string;
      readonly lastName: string | null;
      readonly phoneNumber: string | null;
    } | null;
  } | null;
};
export type CreateContactPageContactCreateMutation = {
  response: CreateContactPageContactCreateMutation$data;
  variables: CreateContactPageContactCreateMutation$variables;
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
    "concreteType": "CreateContactPayload",
    "kind": "LinkedField",
    "name": "createContact",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Contact",
        "kind": "LinkedField",
        "name": "contact",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "contactId",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "firstName",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "lastName",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "email",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "phoneNumber",
            "storageKey": null
          }
        ],
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
    "name": "CreateContactPageContactCreateMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateContactPageContactCreateMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "8f3e91f6f02a2751671bb670c04b6a24",
    "id": null,
    "metadata": {},
    "name": "CreateContactPageContactCreateMutation",
    "operationKind": "mutation",
    "text": "mutation CreateContactPageContactCreateMutation(\n  $input: CreateContactInput!\n) {\n  createContact(input: $input) {\n    contact {\n      id\n      contactId\n      firstName\n      lastName\n      email\n      phoneNumber\n    }\n    clientMutationId\n  }\n}\n"
  }
};
})();

(node as any).hash = "20b7167089ad0980f41523a117e11243";

export default node;
