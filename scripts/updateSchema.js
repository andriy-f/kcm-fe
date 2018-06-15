#!/usr/bin/env babel-node

import fs from 'fs'
import path from 'path'
import { schema } from '../data/schema'
import { printSchema } from 'graphql'

const schemaPath = path.resolve(__dirname, '../schema.graphql')

fs.writeFileSync(schemaPath, printSchema(schema))

console.log('Wrote ' + schemaPath)

// var fetch = require('node-fetch');
// var fs = require('fs');

// const {
//   buildClientSchema,
//   introspectionQuery,
//   printSchema,
// } = require('graphql/utilities');

// console.log(introspectionQuery);

// fetch('http://localhost:3010/graphql', {
//   method: 'POST',
//   headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({ 'query': introspectionQuery }),
// })
//   .then(res => res.json())
//   .then(res => {
//     console.log(res);
//     const schemaString = printSchema(buildClientSchema(res.data));
//     fs.writeFileSync('schema.graphql', schemaString);
//   });
