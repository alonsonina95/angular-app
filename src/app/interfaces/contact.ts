import { HttpHeaders } from '@angular/common/http';

export interface Contact {
    id: number,
    firstName: string,
    lastName: string,
}

export interface HttpResponses {
    statusCode: string,
    message: string
};

export interface User {
    username: string,
    password: string
};

export interface NewUser {
    username:string,
    password: string,
    firstname: string,
    lastname: string,
    email: string
}

export const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type':  'application/json'
    })
};