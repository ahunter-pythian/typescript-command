/*************************************************************************************************************************
 * Copyright (c) 2019, Anthony Hunter.
 * This unpublished material is proprietary to Anthony Hunter.
 * All rights reserved. The methods and techniques described herein are considered trade secrets and/or confidential.
 * Reproduction or distribution, in whole or in part, is forbidden except by express written permission of Anthony
 * Hunter.
 *************************************************************************************************************************/
import {AbstractAction} from "./AbstractAction";
import {IError, ITodo, TodoRequest} from "./TodoRequest";

export class TodoAction extends AbstractAction {
    public async handle(id: number) {
        await TodoRequest.getTodo(id).then((value: ITodo) => {
            console.log("Todo Request Successful");
            console.log(JSON.stringify(value, null, 2));
        }, (error: IError) => {
            console.log("Todo Request Failed");
            console.log(JSON.stringify(error, null, 2));
        });
    }
}
