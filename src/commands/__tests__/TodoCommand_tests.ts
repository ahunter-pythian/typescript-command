/*************************************************************************************************************************
 * Copyright (c) 2019, Anthony Hunter.
 * This unpublished material is proprietary to Anthony Hunter.
 * All rights reserved. The methods and techniques described herein are considered trade secrets and/or confidential.
 * Reproduction or distribution, in whole or in part, is forbidden except by express written permission of Anthony
 * Hunter.
 *************************************************************************************************************************/
import * as commander from "commander";
import {CommanderStatic} from "commander";
import {TodoCommand} from "../TodoCommand";

describe("TodoCommand Tests", () => {
    it("can create a TodoCommand instance", async () => {
        const program: CommanderStatic = commander;
        new TodoCommand().initCommand(program);
        program.parse([ "node", "cmd-command", "todo", "--id", "6"]);
    });
});