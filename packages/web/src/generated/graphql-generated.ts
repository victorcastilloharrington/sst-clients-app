import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Client = {
  __typename?: 'Client';
  email: Scalars['String']['output'];
  events: Array<Event>;
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
};

export type Event = {
  __typename?: 'Event';
  id: Scalars['String']['output'];
  startDateTime: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  findClientById?: Maybe<Client>;
  queryClientList?: Maybe<Array<Client>>;
};


export type QueryFindClientByIdArgs = {
  id: Scalars['ID']['input'];
};

export type FindClientByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type FindClientByIdQuery = { __typename?: 'Query', findClientById?: { __typename?: 'Client', email: string, firstName: string, id: string, lastName: string, events: Array<{ __typename?: 'Event', id: string, startDateTime: string, title: string }> } | null };

export type QueryClientListQueryVariables = Exact<{ [key: string]: never; }>;


export type QueryClientListQuery = { __typename?: 'Query', queryClientList?: Array<{ __typename?: 'Client', id: string, email: string, firstName: string, lastName: string }> | null };


export const FindClientByIdDocument = gql`
    query FindClientById($id: ID!) {
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
}
    `;

/**
 * __useFindClientByIdQuery__
 *
 * To run a query within a React component, call `useFindClientByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindClientByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindClientByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFindClientByIdQuery(baseOptions: Apollo.QueryHookOptions<FindClientByIdQuery, FindClientByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindClientByIdQuery, FindClientByIdQueryVariables>(FindClientByIdDocument, options);
      }
export function useFindClientByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindClientByIdQuery, FindClientByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindClientByIdQuery, FindClientByIdQueryVariables>(FindClientByIdDocument, options);
        }
export type FindClientByIdQueryHookResult = ReturnType<typeof useFindClientByIdQuery>;
export type FindClientByIdLazyQueryHookResult = ReturnType<typeof useFindClientByIdLazyQuery>;
export type FindClientByIdQueryResult = Apollo.QueryResult<FindClientByIdQuery, FindClientByIdQueryVariables>;
export const QueryClientListDocument = gql`
    query QueryClientList {
  queryClientList {
    id
    email
    firstName
    lastName
  }
}
    `;

/**
 * __useQueryClientListQuery__
 *
 * To run a query within a React component, call `useQueryClientListQuery` and pass it any options that fit your needs.
 * When your component renders, `useQueryClientListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQueryClientListQuery({
 *   variables: {
 *   },
 * });
 */
export function useQueryClientListQuery(baseOptions?: Apollo.QueryHookOptions<QueryClientListQuery, QueryClientListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<QueryClientListQuery, QueryClientListQueryVariables>(QueryClientListDocument, options);
      }
export function useQueryClientListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QueryClientListQuery, QueryClientListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<QueryClientListQuery, QueryClientListQueryVariables>(QueryClientListDocument, options);
        }
export type QueryClientListQueryHookResult = ReturnType<typeof useQueryClientListQuery>;
export type QueryClientListLazyQueryHookResult = ReturnType<typeof useQueryClientListLazyQuery>;
export type QueryClientListQueryResult = Apollo.QueryResult<QueryClientListQuery, QueryClientListQueryVariables>;