/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type ScrollingPaginationContactsTable_contactsData$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type FilteringScrollingContactsTable_contactsData$ref: FragmentReference;
export type FilteringScrollingContactsTable_contactsData = {|
  +$fragmentRefs: ScrollingPaginationContactsTable_contactsData$ref,
  +$refType: FilteringScrollingContactsTable_contactsData$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "FilteringScrollingContactsTable_contactsData",
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
      "name": "ScrollingPaginationContactsTable_contactsData",
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
(node/*: any*/).hash = '3f6652362bd6c8d668a0d708a2b076b6';
module.exports = node;
