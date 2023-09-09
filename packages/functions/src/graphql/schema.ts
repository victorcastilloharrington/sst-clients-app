import SchemaBuilder from "@pothos/core";
import { Client, Event } from "./types";
import { CLIENTS } from "./constants";

/**
 * Instantiante Pothos schema builder object
 */
const builder = new SchemaBuilder<{
  Objects: {
    Client: Client;
    Event: Event;
  };
  Scalars: {
    ID: { Input: string; Output: string };
  };
}>({});

/**
 * Define client object type for pothos
 * based on TS type for schema usage
 */
builder.objectType("Client", {
  fields: (t) => ({
    id: t.exposeString("id"),
    firstName: t.exposeString("firstName"),
    lastName: t.exposeString("lastName"),
    email: t.exposeString("email"),
    events: t.field({
      type: ["Event"],
      resolve: (client) => client.events ?? [],
    }),
  }),
});

/**
 * Define even object type for pothos
 * based on TS type for schema usage
 */
builder.objectType("Event", {
  fields: (t) => ({
    id: t.exposeString("id"),
    title: t.exposeString("title"),
    startDateTime: t.exposeString("startDateTime"),
  }),
});

/**
 * Define queries object type for pothos
 * based on previously defined objectType types for schema usage
 */
builder.queryType({
  fields: (t) => ({
    findClientById: t.field({
      nullable: true,
      args: {
        id: t.arg.id({ required: true }),
      },
      type: "Client",
      resolve: (_, { id }) => {
        const client = CLIENTS.find((c) => c.id === id);

        if (!client) {
          throw new Error(`No Client with ID: ${id}`);
        }

        return client;
      },
    }),
    queryClientList: t.field({
      nullable: true,
      type: ["Client"],
      resolve: () => CLIENTS,
    }),
  }),
});

/**
 * Return schema object
 */
export const schema = builder.toSchema();
