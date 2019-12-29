/*******************************************************************************
 * Copyright 2019 The Pythian Group Inc.
 * All Rights Reserved.
 *******************************************************************************/
//
// Author: Anthony Hunter
import * as commander from "commander";
import {CommanderStatic} from "commander";
import {CommandLoader} from "../CommandLoader";

describe("CommandLoader Tests",  () => {
    it("can create a CommandLoader instance", () => {
        const program: CommanderStatic = commander;
        CommandLoader.load(program);
    });
});

