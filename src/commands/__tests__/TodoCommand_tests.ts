/*******************************************************************************
 * Copyright 2019 The Pythian Group Inc.
 * All Rights Reserved.
 *******************************************************************************/
//
// Author: Anthony Hunter
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