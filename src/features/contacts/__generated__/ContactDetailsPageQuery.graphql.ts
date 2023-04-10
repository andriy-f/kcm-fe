/**
 * @generated SignedSource<<3e97202470d7e35a1dc6fab848a36b0f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type ContactDetailsPageQuery$variables = {
  id: string;
};
export type ContactDetailsPageQuery$data = {
  readonly contact: {
    readonly email: string | null;
    readonly firstName: string | null;
    readonly id: string;
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
    "name": "id"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ContactDetailsPageQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ContactDetailsPageQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "b4e3c8fadf10c6e4152b7497d7179c44",
    "id": null,
    "metadata": {},
    "name": "ContactDetailsPageQuery",
    "operationKind": "query",
    "text": "query ContactDetailsPageQuery(\n  $id: ID!\n) {\n  contact(id: $id) {\n    id\n    firstName\n    lastName\n    email\n    phoneNumber\n  }\n}\n"
  }
};
})();

(node as any).hash = "a04209816ed3821ddb3fbd8f39895138";

export default node;
