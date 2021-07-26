
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export abstract class IQuery {
    abstract users(): Nullable<Nullable<User>[]> | Promise<Nullable<Nullable<User>[]>>;

    abstract user(username: string): Nullable<User> | Promise<Nullable<User>>;
}

export class User {
    id: number;
    username: string;
    password: string;
}

type Nullable<T> = T | null;
