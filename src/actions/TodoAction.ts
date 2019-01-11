/*************************************************************************************************************************
 * Copyright (c) 2019, Anthony Hunter.
 * This unpublished material is proprietary to Anthony Hunter.
 * All rights reserved. The methods and techniques described herein are considered trade secrets and/or confidential.
 * Reproduction or distribution, in whole or in part, is forbidden except by express written permission of Anthony
 * Hunter.
 *************************************************************************************************************************/
import {AbstractAction} from "./AbstractAction";
import {ITodo, TodoRequest} from "./TodoRequest";

export class TodoAction extends AbstractAction {
    public async handle(id: number) {
        const todo: ITodo = await TodoRequest.getTodo(id);
        console.log(JSON.stringify(todo, null, 2));
    }
}