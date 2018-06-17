/**
 * @flow
 * @relayHash d0872b331a7025182c9634285367b2e4
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type contactListRQueryVariables = {||};
export type contactListRQueryResponse = {|
  +contacts: ?$ReadOnlyArray<?{|
    +_id: ?string,
    +firstName: ?string,
  |}>
|};
*/


/*
query contactListRQuery {
  contacts {
    _id
    firstName
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "contacts",
    "storageKey": null,
    "args": null,
    "concreteType": "Contact",
    "plural": true,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "_id",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "firstName",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "contactListRQuery",
  "id": null,
  "text": "query contactListRQuery {\n  contacts {\n    _id\n    firstName\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "contactListRQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v0
  },
  "operation": {
    "kind": "Operation",
    "name": "contactListRQuery",
    "argumentDefinitions": [],
    "selections": v0
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '00b6e250dd44bd70eb45462eabb7bd22';
module.exports = node;
