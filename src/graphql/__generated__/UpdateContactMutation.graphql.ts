/**
 * @generated SignedSource<<c9e82b92d5154ac07b77e0d6f4a6023c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type UpdateContactInput = {
  clientMutationId?: string | null;
  contactId?: string | null;
  email?: string | null;
  firstName?: string | null;
  id?: string | null;
  lastName?: string | null;
  phoneNumber?: string | null;
};
export type UpdateContactMutation$variables = {
  input: UpdateContactInput;
};
export type UpdateContactMutation$data = {
  readonly updateContact: {
    readonly contact: {
      readonly email: string | null;
      readonly firstName: string | null;
      readonly id: string;
      readonly lastName: string | null;
      readonly phoneNumber: string | null;
    } | null;
  } | null;
};
export type UpdateContactMutation = {
  response: UpdateContactMutation$data;
  variables: UpdateContactMutation$variables;
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
    "concreteType": "UpdateContactPayload",
    "kind": "LinkedField",
    "name": "updateContact",
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
    "name": "UpdateContactMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UpdateContactMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "09a37dd8a1adbc4d3475fde38310864b",
    "id": null,
    "metadata": {},
    "name": "UpdateContactMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateContactMutation(\n  $input: UpdateContactInput!\n) {\n  updateContact(input: $input) {\n    contact {\n      id\n      firstName\n      lastName\n      email\n      phoneNumber\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "8ebcff132c7276014bf2db29a30c46ad";

export default node;
