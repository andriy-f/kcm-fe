/**
 * @generated SignedSource<<016032550fe8b6f9eedd7e0e65ce36d6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type CreateContactInput = {
  clientMutationId?: string | null | undefined;
  email?: string | null | undefined;
  firstName: string;
  lastName: string;
  phoneNumber?: string | null | undefined;
};
export type CreateContactPageContactCreateMutation$variables = {
  connections: ReadonlyArray<string>;
  input: CreateContactInput;
};
export type CreateContactPageContactCreateMutation$data = {
  readonly createContact: {
    readonly clientMutationId: string | null | undefined;
    readonly contact: {
      readonly contactId: string | null | undefined;
      readonly email: string | null | undefined;
      readonly firstName: string | null | undefined;
      readonly id: string;
      readonly lastName: string | null | undefined;
      readonly phoneNumber: string | null | undefined;
    } | null | undefined;
  } | null | undefined;
};
export type CreateContactPageContactCreateMutation = {
  response: CreateContactPageContactCreateMutation$data;
  variables: CreateContactPageContactCreateMutation$variables;
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
    "name": "CreateContactPageContactCreateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "CreateContactPayload",
        "kind": "LinkedField",
        "name": "createContact",
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
    "name": "CreateContactPageContactCreateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "CreateContactPayload",
        "kind": "LinkedField",
        "name": "createContact",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "appendNode",
            "key": "",
            "kind": "LinkedHandle",
            "name": "contact",
            "handleArgs": [
              {
                "kind": "Variable",
                "name": "connections",
                "variableName": "connections"
              },
              {
                "kind": "Literal",
                "name": "edgeTypeName",
                "value": "ContactEdge"
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
    "cacheID": "8f3e91f6f02a2751671bb670c04b6a24",
    "id": null,
    "metadata": {},
    "name": "CreateContactPageContactCreateMutation",
    "operationKind": "mutation",
    "text": "mutation CreateContactPageContactCreateMutation(\n  $input: CreateContactInput!\n) {\n  createContact(input: $input) {\n    contact {\n      id\n      contactId\n      firstName\n      lastName\n      email\n      phoneNumber\n    }\n    clientMutationId\n  }\n}\n"
  }
};
})();

(node as any).hash = "e3febe42aff6448a402bc723aa6d231c";

export default node;
