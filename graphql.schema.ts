
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface IQuery {
    users(): Nullable<Nullable<User>[]> | Promise<Nullable<Nullable<User>[]>>;
    user(username: string): Nullable<User> | Promise<Nullable<User>>;
}

export interface User {
    id: number;
    username: string;
    password: string;
}

type Nullable<T> = T | null;
