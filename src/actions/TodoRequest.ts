/*************************************************************************************************************************
 * Copyright (c) 2019, Anthony Hunter.
 * This unpublished material is proprietary to Anthony Hunter.
 * All rights reserved. The methods and techniques described herein are considered trade secrets and/or confidential.
 * Reproduction or distribution, in whole or in part, is forbidden except by express written permission of Anthony
 * Hunter.
 *************************************************************************************************************************/
import * as superagent from "superagent";

export interface ITodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
    status: number;
    ok: boolean;
    error: string;
}

export class TodoRequest {

/*
    public static async getTodo(id: number): Promise<ITodo> {
        const todo: ITodo = {} as ITodo;
        const site: string = "https://jsonplaceholder.typicode.com/";
        const query = "todos/" + id;
        const res: superagent.Response = await TodoRequest.getRequest(site + query).catch((error) => {
            if (error.message) {
                todo.error = error.message;
            }
            if (error.status) {
                todo.status = error.status;
            }
            todo.ok = false;
            return todo;
        });
        if (res.status) {
            todo.status = res.status;
        }
        if (res.ok) {
            todo.ok = res.ok;
        }
        if (res.body) {
            if (res.body.id) {
                todo.id = res.body.id;
            }
            if (res.body.userId) {
                todo.userId = res.body.userId;
            }
            if (res.body.title) {
                todo.title = res.body.title;
            }
            if (res.body.completed) {
                todo.completed = res.body.completed;
            }
            todo.ok = true;
        }
        return todo;
    }
*/

    protected static getRequest(url: string): Promise<superagent.Response> {
        return new Promise<superagent.Response>((resolve, reject) => {
            superagent
                .get(url)
                .set("Content-Type", "application/json")
                .end((err, res) => {
                    if (!err) {
                        resolve(res);
                    } else {
                        reject(err);
                    }
                });
        });
    }

}
