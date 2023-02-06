/**
 * @generated SignedSource<<a9404b0eacd4e4465ec11a5d90183764>>
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
export type CreateContactMutation$variables = {
  input: CreateContactInput;
};
export type CreateContactMutation$data = {
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
export type CreateContactMutation = {
  response: CreateContactMutation$data;
  variables: CreateContactMutation$variables;
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
    "name": "CreateContactMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateContactMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "25eb60f27b2eadc5e10570a734c96c7a",
    "id": null,
    "metadata": {},
    "name": "CreateContactMutation",
    "operationKind": "mutation",
    "text": "mutation CreateContactMutation(\n  $input: CreateContactInput!\n) {\n  createContact(input: $input) {\n    contact {\n      id\n      contactId\n      firstName\n      lastName\n      email\n      phoneNumber\n    }\n    clientMutationId\n  }\n}\n"
  }
};
})();

(node as any).hash = "0c2e7c5e0af6c8cfa77a6260afd076d9";

export default node;
