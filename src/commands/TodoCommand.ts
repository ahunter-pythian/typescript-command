/*************************************************************************************************************************
 * Copyright (c) 2019, Anthony Hunter.
 * This unpublished material is proprietary to Anthony Hunter.
 * All rights reserved. The methods and techniques described herein are considered trade secrets and/or confidential.
 * Reproduction or distribution, in whole or in part, is forbidden except by express written permission of Anthony
 * Hunter.
 *************************************************************************************************************************/
import {CommanderStatic} from "commander";
import {AbstractCommand} from "./AbstractCommand";
import {IError, ITodo, TodoRequest} from "./TodoRequest";

export class TodoCommand extends AbstractCommand {
    public initCommand(program: CommanderStatic) {
        program
            .command("todo")
            .requiredOption("--id <id>", "must provide an id")
            .description("Get a todo from jsonplaceholder")
            .action(async (args: any) => {
                await this.handle(args);
            });
    }
    public async handle(args: any): Promise<void> {
        const options = args.opts();
        await TodoRequest.getTodo(options.id).then((value: ITodo) => {
            console.log("Todo Request Successful");
            console.log(JSON.stringify(value, null, 2));
        }, (error: IError) => {
            console.log("Todo Request Failed");
            console.log(JSON.stringify(error, null, 2));
        });
    }

}
