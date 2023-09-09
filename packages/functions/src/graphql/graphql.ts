import { GraphQLHandler } from "sst/node/graphql";
import { schema } from "./schema";

/**
 * Graphql server using SST's default client.
 *
 * @param {GraphqlSchema} schema - The generated compatible graphql Schema.
 */
export const handler = GraphQLHandler({
  schema,
});
