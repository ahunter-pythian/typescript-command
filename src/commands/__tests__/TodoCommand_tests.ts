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

const superagentMock = require("../__mocks__/superagent");

jest.mock("superagent");

describe("TodoCommand Tests", () => {
    it("can create a TodoCommand instance", async () => {
        const response = {
            userId: 1,
            id: 5,
            title:
                "Mock Title",
            completed: false
        };
        superagentMock.__setMockResponseBody(response);
        //const consoleSpy = jest.spyOn(console, "log");
        const program: CommanderStatic = commander;
        new TodoCommand().initCommand(program);
        await program.parse(["node", "cmd-command", "todo", "--id", "5"]);
        //expect(consoleSpy).toHaveBeenCalledWith("Todo Request Successful");
        //expect(consoleSpy).toHaveBeenCalledWith("\"userid\"");
    });
});