/**
 * @generated SignedSource<<17832a01e234a748ea1d16bcb2fa8159>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ContactViewPageQuery$variables = {
  id: string;
};
export type ContactViewPageQuery$data = {
  readonly contact: {
    readonly " $fragmentSpreads": FragmentRefs<"ContactView_contact">;
  } | null;
};
export type ContactViewPageQuery = {
  response: ContactViewPageQuery$data;
  variables: ContactViewPageQuery$variables;
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
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ContactViewPageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Contact",
        "kind": "LinkedField",
        "name": "contact",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ContactView_contact"
          }
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
    "name": "ContactViewPageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Contact",
        "kind": "LinkedField",
        "name": "contact",
        "plural": false,
        "selections": [
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
          },
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
    "cacheID": "463ba28f033c46c8c354448df13756e3",
    "id": null,
    "metadata": {},
    "name": "ContactViewPageQuery",
    "operationKind": "query",
    "text": "query ContactViewPageQuery(\n  $id: ID!\n) {\n  contact(id: $id) {\n    ...ContactView_contact\n    id\n  }\n}\n\nfragment ContactView_contact on Contact {\n  firstName\n  lastName\n  email\n  phoneNumber\n}\n"
  }
};
})();

(node as any).hash = "9c06814e80af9a79261a1fdcbcd207b1";

export default node;
