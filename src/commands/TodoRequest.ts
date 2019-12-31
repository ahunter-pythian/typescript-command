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
}

export interface IError {
    status: number;
    message: string;
}

export class TodoRequest {

    public static async getTodo(id: number): Promise<ITodo> {
        return new Promise<ITodo>((resolve, reject) => {
            const site: string = "https://jsonplaceholder.typicode.com/";
            const query = "todos/" + id;
            const url = site + query;
            superagent
                .get(url)
                .set("Content-Type", "application/json")
                .end((err, res) => {
                    if (err) {
                        const error: IError = {} as IError;
                        if (err.message) {
                            error.message = err.message;
                        }
                        if (err.status) {
                            error.status = err.status;
                        }
                        reject(error);
                    } else {
                        const todo: ITodo = {} as ITodo;
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
                            if (res.body.hasOwnProperty("completed")) {
                                todo.completed = res.body.completed;
                            }
                        }
                        resolve(todo);
                    }
                });
        });
    }

}
