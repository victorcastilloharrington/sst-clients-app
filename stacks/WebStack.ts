import { StackContext, StaticSite, use } from "sst/constructs";
import { ApiStack } from "./ApiStack";

export function WebStack({ stack, app }: StackContext) {
  const api = use(ApiStack);

  // Define our React app
  const site = new StaticSite(stack, "ReactSite", {
    path: "packages/web",
    buildCommand: "npm run build",
    buildOutput: "dist",
    // Pass in our environment variables
    environment: {
      VITE_GRAPHQL_API_URL: `${api.url}/graphql`,
    },
  });

  // Show the url in the output
  stack.addOutputs({
    SiteUrl: site.url,
  });
}
