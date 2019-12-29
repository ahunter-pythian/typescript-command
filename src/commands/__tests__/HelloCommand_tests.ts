/*************************************************************************************************************************
 * Copyright (c) 2019, Anthony Hunter.
 * This unpublished material is proprietary to Anthony Hunter.
 * All rights reserved. The methods and techniques described herein are considered trade secrets and/or confidential.
 * Reproduction or distribution, in whole or in part, is forbidden except by express written permission of Anthony
 * Hunter.
 *************************************************************************************************************************/
import * as commander from "commander";
import {CommanderStatic} from "commander";
import {HelloCommand} from "../HelloCommand";

describe("HelloCommand Tests",  () => {
    it("can create a HelloCommand instance", async () => {
        const program: CommanderStatic = commander;
        new HelloCommand().initCommand(program);
        program.parse([ "node", "cmd-command", "hello" ]);
    });
});
