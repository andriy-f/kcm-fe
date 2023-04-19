declare module 'babel-plugin-relay/macro' {
  import { GraphQLTaggedNode } from 'relay-runtime'

  function graphql(strings: unknown): GraphQLTaggedNode

  export default graphql
}
