import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  addSet?: Maybe<Set>;
};


export type MutationAddSetArgs = {
  name?: InputMaybe<Scalars['String']>;
  numParts?: InputMaybe<Scalars['Int']>;
  year?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  allSets?: Maybe<Array<Maybe<Set>>>;
};

export type Set = {
  __typename?: 'Set';
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  numParts?: Maybe<Scalars['Int']>;
  year?: Maybe<Scalars['Int']>;
};

export type SetListQueryVariables = Exact<{ [key: string]: never; }>;


export type SetListQuery = { __typename?: 'Query', allSets?: Array<{ __typename?: 'Set', id: number, name?: string | null, numParts?: number | null, year?: number | null } | null> | null };

export type AddSetMutationVariables = Exact<{
  name: Scalars['String'];
  year: Scalars['String'];
  numParts: Scalars['Int'];
}>;


export type AddSetMutation = { __typename?: 'Mutation', addSet?: { __typename?: 'Set', id: number, name?: string | null, numParts?: number | null, year?: number | null } | null };

export const SetListDocument = gql`
    query setList {
  allSets {
    id
    name
    numParts
    year
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SetListGQL extends Apollo.Query<SetListQuery, SetListQueryVariables> {
    override document = SetListDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AddSetDocument = gql`
    mutation addSet($name: String!, $year: String!, $numParts: Int!) {
  addSet(name: $name, year: $year, numParts: $numParts) {
    id
    name
    numParts
    year
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AddSetGQL extends Apollo.Mutation<AddSetMutation, AddSetMutationVariables> {
    override document = AddSetDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }