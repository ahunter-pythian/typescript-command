/*************************************************************************************************************************
 * Copyright (c) 2019, Anthony Hunter.
 * This unpublished material is proprietary to Anthony Hunter.
 * All rights reserved. The methods and techniques described herein are considered trade secrets and/or confidential.
 * Reproduction or distribution, in whole or in part, is forbidden except by express written permission of Anthony
 * Hunter.
 *************************************************************************************************************************/
import {CommanderStatic} from "commander";
import {AbstractCommand} from "./AbstractCommand";

export class TodoCommand extends AbstractCommand {
    public load(program: CommanderStatic) {
        program
            .command("todo <id>")
            .description("Get a todo from jsonplaceholder")
            .action(async (id) => {
                await this.action.handle(id);
            });
    }
}
