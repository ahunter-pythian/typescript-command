/*************************************************************************************************************************
 * Copyright (c) 2019, Anthony Hunter.
 * This unpublished material is proprietary to Anthony Hunter.
 * All rights reserved. The methods and techniques described herein are considered trade secrets and/or confidential.
 * Reproduction or distribution, in whole or in part, is forbidden except by express written permission of Anthony
 * Hunter.
 *************************************************************************************************************************/
import {CommanderStatic} from "commander";
import {AbstractCommand} from "./AbstractCommand";
import * as readline from "readline-sync";

export class QuestionCommand extends AbstractCommand {
    public initCommand(program: CommanderStatic) {
        program
            .command("question")
            .description("Ask a question command")
            .action(async () => {
                await this.handle();
            });
    }

    public async handle(): Promise<void> {
        let done: boolean = false;
        while (!done) {
            const question = readline.question("Type a question or type <done> to exit: ");
            if (question === "done") {
                console.log("bye");
                done = true;
                break;
            }
            console.log("The answer to \"" + question + "\" is No");
        }
    }

}
