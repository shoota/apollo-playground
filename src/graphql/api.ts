import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "todo" */
  delete_todo?: Maybe<Todo_Mutation_Response>;
  /** delete single row from the table: "todo" */
  delete_todo_by_pk?: Maybe<Todo>;
  /** insert data into the table: "todo" */
  insert_todo?: Maybe<Todo_Mutation_Response>;
  /** insert a single row into the table: "todo" */
  insert_todo_one?: Maybe<Todo>;
  /** update data of the table: "todo" */
  update_todo?: Maybe<Todo_Mutation_Response>;
  /** update single row of the table: "todo" */
  update_todo_by_pk?: Maybe<Todo>;
  /** update multiples rows of table: "todo" */
  update_todo_many?: Maybe<Array<Maybe<Todo_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_TodoArgs = {
  where: Todo_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Todo_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_TodoArgs = {
  objects: Array<Todo_Insert_Input>;
  on_conflict?: InputMaybe<Todo_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Todo_OneArgs = {
  object: Todo_Insert_Input;
  on_conflict?: InputMaybe<Todo_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_TodoArgs = {
  _inc?: InputMaybe<Todo_Inc_Input>;
  _set?: InputMaybe<Todo_Set_Input>;
  where: Todo_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Todo_By_PkArgs = {
  _inc?: InputMaybe<Todo_Inc_Input>;
  _set?: InputMaybe<Todo_Set_Input>;
  pk_columns: Todo_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Todo_ManyArgs = {
  updates: Array<Todo_Updates>;
};

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
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "todo" */
  todo: Array<Todo>;
  /** fetch data from the table: "todo" using primary key columns */
  todo_by_pk?: Maybe<Todo>;
};


export type Query_RootTodoArgs = {
  distinct_on?: InputMaybe<Array<Todo_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Todo_Order_By>>;
  where?: InputMaybe<Todo_Bool_Exp>;
};


export type Query_RootTodo_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "todo" */
  todo: Array<Todo>;
  /** fetch data from the table: "todo" using primary key columns */
  todo_by_pk?: Maybe<Todo>;
  /** fetch data from the table in a streaming manner: "todo" */
  todo_stream: Array<Todo>;
};


export type Subscription_RootTodoArgs = {
  distinct_on?: InputMaybe<Array<Todo_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Todo_Order_By>>;
  where?: InputMaybe<Todo_Bool_Exp>;
};


export type Subscription_RootTodo_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootTodo_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Todo_Stream_Cursor_Input>>;
  where?: InputMaybe<Todo_Bool_Exp>;
};

/** columns and relationships of "todo" */
export type Todo = {
  __typename?: 'todo';
  content: Scalars['String'];
  id: Scalars['Int'];
};

/** Boolean expression to filter rows from the table "todo". All fields are combined with a logical 'AND'. */
export type Todo_Bool_Exp = {
  _and?: InputMaybe<Array<Todo_Bool_Exp>>;
  _not?: InputMaybe<Todo_Bool_Exp>;
  _or?: InputMaybe<Array<Todo_Bool_Exp>>;
  content?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "todo" */
export enum Todo_Constraint {
  /** unique or primary key constraint on columns "id" */
  TodoPkey = 'todo_pkey'
}

/** input type for incrementing numeric columns in table "todo" */
export type Todo_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "todo" */
export type Todo_Insert_Input = {
  content?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
};

/** response of any mutation on the table "todo" */
export type Todo_Mutation_Response = {
  __typename?: 'todo_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Todo>;
};

/** on_conflict condition type for table "todo" */
export type Todo_On_Conflict = {
  constraint: Todo_Constraint;
  update_columns?: Array<Todo_Update_Column>;
  where?: InputMaybe<Todo_Bool_Exp>;
};

/** Ordering options when selecting data from "todo". */
export type Todo_Order_By = {
  content?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: todo */
export type Todo_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "todo" */
export enum Todo_Select_Column {
  /** column name */
  Content = 'content',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "todo" */
export type Todo_Set_Input = {
  content?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
};

/** Streaming cursor of the table "todo" */
export type Todo_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Todo_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Todo_Stream_Cursor_Value_Input = {
  content?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
};

/** update columns of table "todo" */
export enum Todo_Update_Column {
  /** column name */
  Content = 'content',
  /** column name */
  Id = 'id'
}

export type Todo_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Todo_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Todo_Set_Input>;
  /** filter the rows which have to be updated */
  where: Todo_Bool_Exp;
};

export type InsertTodoMutationVariables = Exact<{ [key: string]: never; }>;


export type InsertTodoMutation = { __typename?: 'mutation_root', insert_todo_one?: { __typename?: 'todo', content: string, id: number } | null };


export const InsertTodoDocument = gql`
    mutation insertTodo {
  insert_todo_one(object: {content: "hello"}) {
    content
    id
  }
}
    `;
export type InsertTodoMutationFn = Apollo.MutationFunction<InsertTodoMutation, InsertTodoMutationVariables>;

/**
 * __useInsertTodoMutation__
 *
 * To run a mutation, you first call `useInsertTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertTodoMutation, { data, loading, error }] = useInsertTodoMutation({
 *   variables: {
 *   },
 * });
 */
export function useInsertTodoMutation(baseOptions?: Apollo.MutationHookOptions<InsertTodoMutation, InsertTodoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertTodoMutation, InsertTodoMutationVariables>(InsertTodoDocument, options);
      }
export type InsertTodoMutationHookResult = ReturnType<typeof useInsertTodoMutation>;
export type InsertTodoMutationResult = Apollo.MutationResult<InsertTodoMutation>;
export type InsertTodoMutationOptions = Apollo.BaseMutationOptions<InsertTodoMutation, InsertTodoMutationVariables>;