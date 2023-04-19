/**
 * @generated SignedSource<<3e380aab646fd9953d1f9675134d1dae>>
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
export type ContactDetailsPageContactUpdateMutation$variables = {
  input: UpdateContactInput;
};
export type ContactDetailsPageContactUpdateMutation$data = {
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
export type ContactDetailsPageContactUpdateMutation = {
  response: ContactDetailsPageContactUpdateMutation$data;
  variables: ContactDetailsPageContactUpdateMutation$variables;
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
    "name": "ContactDetailsPageContactUpdateMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ContactDetailsPageContactUpdateMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "e21a17db74c778b06eaf24c14c7b603d",
    "id": null,
    "metadata": {},
    "name": "ContactDetailsPageContactUpdateMutation",
    "operationKind": "mutation",
    "text": "mutation ContactDetailsPageContactUpdateMutation(\n  $input: UpdateContactInput!\n) {\n  updateContact(input: $input) {\n    contact {\n      id\n      firstName\n      lastName\n      email\n      phoneNumber\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "27348cec145d53b637bf135189d71ce5";

export default node;
