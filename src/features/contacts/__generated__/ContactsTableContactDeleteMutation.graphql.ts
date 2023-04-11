/**
 * @generated SignedSource<<ea1efff6731b3172807c448ff96305c0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type DeleteContactInput = {
  clientMutationId?: string | null;
  contactId?: string | null;
  id?: string | null;
};
export type ContactsTableContactDeleteMutation$variables = {
  input: DeleteContactInput;
};
export type ContactsTableContactDeleteMutation$data = {
  readonly deleteContact: {
    readonly clientMutationId: string | null;
    readonly deletedId: string | null;
  } | null;
};
export type ContactsTableContactDeleteMutation = {
  response: ContactsTableContactDeleteMutation$data;
  variables: ContactsTableContactDeleteMutation$variables;
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
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "deletedId",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "clientMutationId",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ContactsTableContactDeleteMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "DeleteContactPayload",
        "kind": "LinkedField",
        "name": "deleteContact",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ContactsTableContactDeleteMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "DeleteContactPayload",
        "kind": "LinkedField",
        "name": "deleteContact",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "deleteRecord",
            "key": "",
            "kind": "ScalarHandle",
            "name": "deletedId"
          },
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "8dd92445245f181845648bdfb14d4645",
    "id": null,
    "metadata": {},
    "name": "ContactsTableContactDeleteMutation",
    "operationKind": "mutation",
    "text": "mutation ContactsTableContactDeleteMutation(\n  $input: DeleteContactInput!\n) {\n  deleteContact(input: $input) {\n    deletedId\n    clientMutationId\n  }\n}\n"
  }
};
})();

(node as any).hash = "aadf3e277b9869f4c0ed1c7e97672a82";

export default node;
