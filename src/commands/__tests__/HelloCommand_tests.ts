/*******************************************************************************
 * Copyright 2019 The Pythian Group Inc.
 * All Rights Reserved.
 *******************************************************************************/
//
// Author: Anthony Hunter
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
