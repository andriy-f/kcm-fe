/**
 * @flow
 * @relayHash 0462d780d481d2d814c113fb7d522ed0
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ContactEdit_contact$ref = any;
export type ContactEditPageQueryVariables = {|
  id: string
|};
export type ContactEditPageQueryResponse = {|
  +contact: ?{|
    +$fragmentRefs: ContactEdit_contact$ref
  |}
|};
*/


/*
query ContactEditPageQuery(
  $id: ID!
) {
  contact(id: $id) {
    ...ContactEdit_contact
    id
  }
}

fragment ContactEdit_contact on Contact {
  id
  firstName
  lastName
  email
  phoneNumber
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id",
    "type": "ID"
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "ContactEditPageQuery",
  "id": null,
  "text": "query ContactEditPageQuery(\n  $id: ID!\n) {\n  contact(id: $id) {\n    ...ContactEdit_contact\n    id\n  }\n}\n\nfragment ContactEdit_contact on Contact {\n  id\n  firstName\n  lastName\n  email\n  phoneNumber\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ContactEditPageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "contact",
        "storageKey": null,
        "args": v1,
        "concreteType": "Contact",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "ContactEdit_contact",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ContactEditPageQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "contact",
        "storageKey": null,
        "args": v1,
        "concreteType": "Contact",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "firstName",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "lastName",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "email",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "phoneNumber",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '68abac833a8ff83893fb81f237614618';
module.exports = node;
