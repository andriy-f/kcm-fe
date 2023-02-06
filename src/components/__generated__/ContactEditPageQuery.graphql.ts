/**
 * @generated SignedSource<<1ca27eb6bb50b06faaf3d0d681b3f60f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ContactEditPageQuery$variables = {
  id: string;
};
export type ContactEditPageQuery$data = {
  readonly contact: {
    readonly " $fragmentSpreads": FragmentRefs<"ContactEdit_contact">;
  } | null;
};
export type ContactEditPageQuery = {
  response: ContactEditPageQuery$data;
  variables: ContactEditPageQuery$variables;
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
    "name": "ContactEditPageQuery",
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
            "name": "ContactEdit_contact"
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
    "name": "ContactEditPageQuery",
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
    ]
  },
  "params": {
    "cacheID": "d15de521a6ec3e5b7b5bb005f6547e92",
    "id": null,
    "metadata": {},
    "name": "ContactEditPageQuery",
    "operationKind": "query",
    "text": "query ContactEditPageQuery(\n  $id: ID!\n) {\n  contact(id: $id) {\n    ...ContactEdit_contact\n    id\n  }\n}\n\nfragment ContactEdit_contact on Contact {\n  id\n  firstName\n  lastName\n  email\n  phoneNumber\n}\n"
  }
};
})();

(node as any).hash = "68abac833a8ff83893fb81f237614618";

export default node;
