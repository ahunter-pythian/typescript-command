/*************************************************************************************************************************
 * Copyright (c) 2019, Anthony Hunter.
 * This unpublished material is proprietary to Anthony Hunter.
 * All rights reserved. The methods and techniques described herein are considered trade secrets and/or confidential.
 * Reproduction or distribution, in whole or in part, is forbidden except by express written permission of Anthony
 * Hunter.
 *************************************************************************************************************************/
import * as commander from "commander";
import * as readline from "readline-sync";
import {CommanderStatic} from "commander";
import {QuestionCommand} from "../QuestionCommand";

jest.mock("readline-sync");

describe("QuestionCommand Tests", () => {
    it("can create a QuestionCommand instance", async () => {
        const input = "done";
        (readline as any).question.mockImplementation(() => input);
        const consoleSpy = jest.spyOn(console, "log");
        const program: CommanderStatic = commander;
        new QuestionCommand().initCommand(program);
        await program.parse(["node", "cmd-command", "question"]);
        expect(consoleSpy).toHaveBeenCalledWith("bye");
    });
});
