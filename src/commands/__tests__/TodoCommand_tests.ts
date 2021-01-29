/*************************************************************************************************************************
 * Copyright (c) 2019, 2021, Anthony Hunter.
 * This unpublished material is proprietary to Anthony Hunter.
 * All rights reserved. The methods and techniques described herein are considered trade secrets and/or confidential.
 * Reproduction or distribution, in whole or in part, is forbidden except by express written permission of Anthony
 * Hunter.
 *************************************************************************************************************************/
import * as commander from "commander";
import {CommanderStatic} from "commander";
import {TodoCommand} from "../TodoCommand";
import {IError, ITodo, TodoRequest} from "../TodoRequest";

jest.mock('../TodoRequest');
const mockedTodoRequest = TodoRequest as jest.Mocked<typeof TodoRequest>;

describe("TodoCommand Tests", () => {
    it("can create a successful TodoCommand instance", async (done) => {
        const expectedResult: ITodo = {
            userId: 1,
            id: 5,
            title:
                "Mock Title",
            completed: false
        };
        mockedTodoRequest.getTodo.mockResolvedValueOnce(Promise.resolve(expectedResult));
        const consoleSpy = jest.spyOn(console, "log");
        const program: CommanderStatic = commander;
        new TodoCommand().initCommand(program);
        await program.parse(["node", "cmd-command", "todo", "--id", "5"]);
        expect(mockedTodoRequest.getTodo).toHaveBeenCalled();
        const flushPromises = () => new Promise(setImmediate);
        await flushPromises();
        expect(consoleSpy).toHaveBeenCalledWith("Todo Request Successful");
        done();
    });

    it("can create an unsuccessful TodoCommand instance", async (done) => {
        const expectedResult: IError = {
            status: 404, message: "Not Found"
        };
        mockedTodoRequest.getTodo.mockRejectedValueOnce(expectedResult);
        const consoleSpy = jest.spyOn(console, "log");
        const program: CommanderStatic = commander;
        new TodoCommand().initCommand(program);
        await program.parse(["node", "cmd-command", "todo", "--id", "50000"]);
        expect(mockedTodoRequest.getTodo).toHaveBeenCalled();
        const flushPromises = () => new Promise(setImmediate);
        await flushPromises();
        expect(consoleSpy).toHaveBeenCalledWith("Todo Request Failed");
        done();
    });
});