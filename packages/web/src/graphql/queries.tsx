import { gql } from "@apollo/client";

/**
 * Query a single client by it's id.
 *
 * @param {ID} id - The ID of the client.
 */

export const queryClientById = gql(`query FindClientById($id: ID!) {
  findClientById(id: $id) {
        email
        firstName
        id
        lastName
        events {
            id
            startDateTime
            title
        }
    }
}`);

/**
 * Query all clients at once.
 */
export const queryClientList = gql(`query QueryClientList {
  queryClientList {
        id
        email
        firstName
        lastName
        events {
            id
            startDateTime
            title
        }
    }
}`);
