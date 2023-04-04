import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'

export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> }
const defaultOptions = {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>
  _gt?: Maybe<Scalars['Boolean']>
  _gte?: Maybe<Scalars['Boolean']>
  _in?: Maybe<Array<Scalars['Boolean']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['Boolean']>
  _lte?: Maybe<Scalars['Boolean']>
  _neq?: Maybe<Scalars['Boolean']>
  _nin?: Maybe<Array<Scalars['Boolean']>>
}

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>
  _gt?: Maybe<Scalars['Int']>
  _gte?: Maybe<Scalars['Int']>
  _in?: Maybe<Array<Scalars['Int']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['Int']>
  _lte?: Maybe<Scalars['Int']>
  _neq?: Maybe<Scalars['Int']>
  _nin?: Maybe<Array<Scalars['Int']>>
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>
  _gt?: Maybe<Scalars['String']>
  _gte?: Maybe<Scalars['String']>
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>
  _in?: Maybe<Array<Scalars['String']>>
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>
  _is_null?: Maybe<Scalars['Boolean']>
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>
  _lt?: Maybe<Scalars['String']>
  _lte?: Maybe<Scalars['String']>
  _neq?: Maybe<Scalars['String']>
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>
  _nin?: Maybe<Array<Scalars['String']>>
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root'
  /** delete data from the table: "todos" */
  delete_todos?: Maybe<Todos_Mutation_Response>
  /** delete single row from the table: "todos" */
  delete_todos_by_pk?: Maybe<Todos>
  /** insert data into the table: "todos" */
  insert_todos?: Maybe<Todos_Mutation_Response>
  /** insert a single row into the table: "todos" */
  insert_todos_one?: Maybe<Todos>
  /** update data of the table: "todos" */
  update_todos?: Maybe<Todos_Mutation_Response>
  /** update single row of the table: "todos" */
  update_todos_by_pk?: Maybe<Todos>
}

/** mutation root */
export type Mutation_RootDelete_TodosArgs = {
  where: Todos_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Todos_By_PkArgs = {
  id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootInsert_TodosArgs = {
  objects: Array<Todos_Insert_Input>
  on_conflict?: Maybe<Todos_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Todos_OneArgs = {
  object: Todos_Insert_Input
  on_conflict?: Maybe<Todos_On_Conflict>
}

/** mutation root */
export type Mutation_RootUpdate_TodosArgs = {
  _inc?: Maybe<Todos_Inc_Input>
  _set?: Maybe<Todos_Set_Input>
  where: Todos_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Todos_By_PkArgs = {
  _inc?: Maybe<Todos_Inc_Input>
  _set?: Maybe<Todos_Set_Input>
  pk_columns: Todos_Pk_Columns_Input
}

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last',
}

export type Query_Root = {
  __typename?: 'query_root'
  /** fetch data from the table: "todos" */
  todos: Array<Todos>
  /** fetch aggregated fields from the table: "todos" */
  todos_aggregate: Todos_Aggregate
  /** fetch data from the table: "todos" using primary key columns */
  todos_by_pk?: Maybe<Todos>
}

export type Query_RootTodosArgs = {
  distinct_on?: Maybe<Array<Todos_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Todos_Order_By>>
  where?: Maybe<Todos_Bool_Exp>
}

export type Query_RootTodos_AggregateArgs = {
  distinct_on?: Maybe<Array<Todos_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Todos_Order_By>>
  where?: Maybe<Todos_Bool_Exp>
}

export type Query_RootTodos_By_PkArgs = {
  id: Scalars['Int']
}

export type Subscription_Root = {
  __typename?: 'subscription_root'
  /** fetch data from the table: "todos" */
  todos: Array<Todos>
  /** fetch aggregated fields from the table: "todos" */
  todos_aggregate: Todos_Aggregate
  /** fetch data from the table: "todos" using primary key columns */
  todos_by_pk?: Maybe<Todos>
}

export type Subscription_RootTodosArgs = {
  distinct_on?: Maybe<Array<Todos_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Todos_Order_By>>
  where?: Maybe<Todos_Bool_Exp>
}

export type Subscription_RootTodos_AggregateArgs = {
  distinct_on?: Maybe<Array<Todos_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Todos_Order_By>>
  where?: Maybe<Todos_Bool_Exp>
}

export type Subscription_RootTodos_By_PkArgs = {
  id: Scalars['Int']
}

/** columns and relationships of "todos" */
export type Todos = {
  __typename?: 'todos'
  contents: Scalars['String']
  finished: Scalars['Boolean']
  id: Scalars['Int']
}

/** aggregated selection of "todos" */
export type Todos_Aggregate = {
  __typename?: 'todos_aggregate'
  aggregate?: Maybe<Todos_Aggregate_Fields>
  nodes: Array<Todos>
}

/** aggregate fields of "todos" */
export type Todos_Aggregate_Fields = {
  __typename?: 'todos_aggregate_fields'
  avg?: Maybe<Todos_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Todos_Max_Fields>
  min?: Maybe<Todos_Min_Fields>
  stddev?: Maybe<Todos_Stddev_Fields>
  stddev_pop?: Maybe<Todos_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Todos_Stddev_Samp_Fields>
  sum?: Maybe<Todos_Sum_Fields>
  var_pop?: Maybe<Todos_Var_Pop_Fields>
  var_samp?: Maybe<Todos_Var_Samp_Fields>
  variance?: Maybe<Todos_Variance_Fields>
}

/** aggregate fields of "todos" */
export type Todos_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Todos_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type Todos_Avg_Fields = {
  __typename?: 'todos_avg_fields'
  id?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "todos". All fields are combined with a logical 'AND'. */
export type Todos_Bool_Exp = {
  _and?: Maybe<Array<Todos_Bool_Exp>>
  _not?: Maybe<Todos_Bool_Exp>
  _or?: Maybe<Array<Todos_Bool_Exp>>
  contents?: Maybe<String_Comparison_Exp>
  finished?: Maybe<Boolean_Comparison_Exp>
  id?: Maybe<Int_Comparison_Exp>
}

/** unique or primary key constraints on table "todos" */
export enum Todos_Constraint {
  /** unique or primary key constraint */
  TodosPkey = 'todos_pkey',
}

/** input type for incrementing numeric columns in table "todos" */
export type Todos_Inc_Input = {
  id?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "todos" */
export type Todos_Insert_Input = {
  contents?: Maybe<Scalars['String']>
  finished?: Maybe<Scalars['Boolean']>
  id?: Maybe<Scalars['Int']>
}

/** aggregate max on columns */
export type Todos_Max_Fields = {
  __typename?: 'todos_max_fields'
  contents?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['Int']>
}

/** aggregate min on columns */
export type Todos_Min_Fields = {
  __typename?: 'todos_min_fields'
  contents?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['Int']>
}

/** response of any mutation on the table "todos" */
export type Todos_Mutation_Response = {
  __typename?: 'todos_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Todos>
}

/** on conflict condition type for table "todos" */
export type Todos_On_Conflict = {
  constraint: Todos_Constraint
  update_columns?: Array<Todos_Update_Column>
  where?: Maybe<Todos_Bool_Exp>
}

/** Ordering options when selecting data from "todos". */
export type Todos_Order_By = {
  contents?: Maybe<Order_By>
  finished?: Maybe<Order_By>
  id?: Maybe<Order_By>
}

/** primary key columns input for table: todos */
export type Todos_Pk_Columns_Input = {
  id: Scalars['Int']
}

/** select columns of table "todos" */
export enum Todos_Select_Column {
  /** column name */
  Contents = 'contents',
  /** column name */
  Finished = 'finished',
  /** column name */
  Id = 'id',
}

/** input type for updating data in table "todos" */
export type Todos_Set_Input = {
  contents?: Maybe<Scalars['String']>
  finished?: Maybe<Scalars['Boolean']>
  id?: Maybe<Scalars['Int']>
}

/** aggregate stddev on columns */
export type Todos_Stddev_Fields = {
  __typename?: 'todos_stddev_fields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type Todos_Stddev_Pop_Fields = {
  __typename?: 'todos_stddev_pop_fields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type Todos_Stddev_Samp_Fields = {
  __typename?: 'todos_stddev_samp_fields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate sum on columns */
export type Todos_Sum_Fields = {
  __typename?: 'todos_sum_fields'
  id?: Maybe<Scalars['Int']>
}

/** update columns of table "todos" */
export enum Todos_Update_Column {
  /** column name */
  Contents = 'contents',
  /** column name */
  Finished = 'finished',
  /** column name */
  Id = 'id',
}

/** aggregate var_pop on columns */
export type Todos_Var_Pop_Fields = {
  __typename?: 'todos_var_pop_fields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type Todos_Var_Samp_Fields = {
  __typename?: 'todos_var_samp_fields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type Todos_Variance_Fields = {
  __typename?: 'todos_variance_fields'
  id?: Maybe<Scalars['Float']>
}

export type TodosQueryVariables = Exact<{ [key: string]: never }>

export type TodosQuery = { __typename?: 'query_root' } & {
  todos: Array<
    { __typename?: 'todos' } & Pick<Todos, 'id' | 'finished' | 'contents'>
  >
}

export const TodosDocument = gql`
  query Todos {
    todos {
      id
      finished
      contents
    }
  }
`

/**
 * __useTodosQuery__
 *
 * To run a query within a React component, call `useTodosQuery` and pass it any options that fit your needs.
 * When your component renders, `useTodosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTodosQuery({
 *   variables: {
 *   },
 * });
 */
export function useTodosQuery(
  baseOptions?: Apollo.QueryHookOptions<TodosQuery, TodosQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<TodosQuery, TodosQueryVariables>(
    TodosDocument,
    options
  )
}
export function useTodosLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<TodosQuery, TodosQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<TodosQuery, TodosQueryVariables>(
    TodosDocument,
    options
  )
}
export type TodosQueryHookResult = ReturnType<typeof useTodosQuery>
export type TodosLazyQueryHookResult = ReturnType<typeof useTodosLazyQuery>
export type TodosQueryResult = Apollo.QueryResult<
  TodosQuery,
  TodosQueryVariables
>
export function refetchTodosQuery(variables?: TodosQueryVariables) {
  return { query: TodosDocument, variables }
}
