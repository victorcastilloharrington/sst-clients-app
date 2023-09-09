import { SSTConfig } from "sst";
import { API } from "./stacks/ApiStack";

export default {
  config(_input) {
    return {
      name: "sst-clients-app",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(API);
  },
} satisfies SSTConfig;
