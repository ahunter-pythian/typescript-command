/*************************************************************************************************************************
 * Copyright (c) 2019, 2021, Anthony Hunter.
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
        superagentMock.setMockResponseBody(response);
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
        superagentMock.setMockResponse({});
        const errorResponse = {
            status: 404, message: "Not Found"
        };
        superagentMock.setMockError(errorResponse);
        await TodoRequest.getTodo(5).then((value: ITodo) => {
            fail("The test should not receive an error " + value.title);
        }, (error: IError) => {
            expect(error.status).toEqual(errorResponse.status);
            expect(error.message).toEqual(errorResponse.message);
        });
    });
});