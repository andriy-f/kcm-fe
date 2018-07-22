#!/usr/bin/env babel-node

const fetch = require('isomorphic-fetch');
const fs = require('fs');
const path = require('path')

const {
  buildClientSchema,
  introspectionQuery,
  printSchema,
} = require('graphql/utilities');

console.log(introspectionQuery);

fetch('http://localhost:3000/graphql', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ 'query': introspectionQuery }),
})
  .then(res => res.json())
  .then(res => {
    console.log(res);
    const schemaString = printSchema(buildClientSchema(res.data));
    const schemaPath = path.resolve(__dirname, '../schema.graphql')
    fs.writeFileSync(schemaPath, schemaString);
  });
