/**
 * @generated SignedSource<<c73c7540b0d7363461b25be425f09c80>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type ContactDetailsPageQuery$variables = {
  contactId: string;
};
export type ContactDetailsPageQuery$data = {
  readonly contact: {
    readonly email: string | null;
    readonly firstName: string | null;
    readonly lastName: string | null;
    readonly phoneNumber: string | null;
  } | null;
};
export type ContactDetailsPageQuery = {
  response: ContactDetailsPageQuery$data;
  variables: ContactDetailsPageQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "contactId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "contactId",
    "variableName": "contactId"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "firstName",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "lastName",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "phoneNumber",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ContactDetailsPageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Contact",
        "kind": "LinkedField",
        "name": "contact",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ContactDetailsPageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Contact",
        "kind": "LinkedField",
        "name": "contact",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "01ca751ec93f8b3169422fc8dccd9f54",
    "id": null,
    "metadata": {},
    "name": "ContactDetailsPageQuery",
    "operationKind": "query",
    "text": "query ContactDetailsPageQuery(\n  $contactId: ID!\n) {\n  contact(contactId: $contactId) {\n    firstName\n    lastName\n    email\n    phoneNumber\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "e4fc36af9ba4c3e4f6b3f14022c34012";

export default node;
