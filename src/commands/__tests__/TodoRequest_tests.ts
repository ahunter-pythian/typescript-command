/*************************************************************************************************************************
 * Copyright (c) 2019, Anthony Hunter.
 * This unpublished material is proprietary to Anthony Hunter.
 * All rights reserved. The methods and techniques described herein are considered trade secrets and/or confidential.
 * Reproduction or distribution, in whole or in part, is forbidden except by express written permission of Anthony
 * Hunter.
 *************************************************************************************************************************/

import {IError, ITodo, TodoRequest} from "../TodoRequest";

const superagentMock = require("../__mocks__/superagent");

jest.mock("superagent");

describe("TodoRequest Tests", () => {
    it("a successful TodoRequest", async () => {
        const response = {
            userId: 1,
            id: 5,
            title:
                "Mock Title",
            completed: false
        };
        superagentMock.__setMockResponseBody(response);
        await TodoRequest.getTodo(5).then((value: ITodo) => {
            expect(value.userId).toBe(response.userId);
            expect(value.id).toBe(response.id);
            expect(value.title).toBe(response.title);
            expect(value.completed).toBe(false);
        }, (error: IError) => {
            fail("The test should not receive an error " + error.message);
        });
    });

    it("an unsuccessful TodoRequest", async () => {
        superagentMock.__setMockResponse({});
        const response = {
            status: 404, message: "Not Found"
        };
        superagentMock.__setMockError(response);
        await TodoRequest.getTodo(5).then((value: ITodo) => {
            fail("The test should not receive an error " + value.title);
        }, (error: IError) => {
            expect(error.status).toEqual(response.status);
            expect(error.message).toEqual(response.message);
        });
    });
});