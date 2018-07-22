/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type ContactList_contactsData$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ContactListWithFilter_contactsData$ref: FragmentReference;
export type ContactListWithFilter_contactsData = {|
  +$fragmentRefs: ContactList_contactsData$ref,
  +$refType: ContactListWithFilter_contactsData$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "ContactListWithFilter_contactsData",
  "type": "Query",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "filterText",
      "type": "String",
      "defaultValue": null
    }
  ],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "ContactList_contactsData",
      "args": [
        {
          "kind": "Variable",
          "name": "filterText",
          "variableName": "filterText",
          "type": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '96cf885ba061e4f13759476f8d071471';
module.exports = node;
