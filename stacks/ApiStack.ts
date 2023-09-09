import { Api, StackContext } from "sst/constructs";

export function ApiStack({ stack }: StackContext) {
  // Create the GraphQL API
  const api = new Api(stack, "GraphqlApi", {
    routes: {
      "POST /graphql": {
        type: "graphql",
        function: {
          handler: "packages/functions/src/graphql/graphql.handler",
        },
        pothos: {
          schema: "packages/functions/src/graphql/schema.ts",
          output: "packages/graphql/schema.graphql",
        },
      },
    },
  });

  // Show the API endpoint in output
  stack.addOutputs({
    ApiEndpoint: api.url,
  });

  return api;
}
