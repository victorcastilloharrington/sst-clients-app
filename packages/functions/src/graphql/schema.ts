import SchemaBuilder from "@pothos/core";
import { Client, Event } from "./types";
import { CLIENTS } from "./constants";

const builder = new SchemaBuilder<{
  Objects: {
    Client: Client;
    Event: Event;
  };
  Scalars: {
    ID: { Input: string; Output: string };
  };
}>({});

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

builder.objectType("Event", {
  fields: (t) => ({
    id: t.exposeString("id"),
    title: t.exposeString("title"),
    startDateTime: t.exposeString("startDateTime"),
  }),
});

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

export const schema = builder.toSchema();
