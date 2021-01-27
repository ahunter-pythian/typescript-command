/*************************************************************************************************************************
 * Copyright (c) 2019, 2021, Anthony Hunter.
 * This unpublished material is proprietary to Anthony Hunter.
 * All rights reserved. The methods and techniques described herein are considered trade secrets and/or confidential.
 * Reproduction or distribution, in whole or in part, is forbidden except by express written permission of Anthony
 * Hunter.
 *************************************************************************************************************************/
"use strict";
let mockError;
let mockResponse = {
    status: () => {
        return 200;
    },
    body: {},
};
let requestUrl;
let request = {
    post: jest.fn(function (url) {
        requestUrl = url;
        return this;
    }),
    get: jest.fn(function (url) {
        requestUrl = url;
        return this;
    }),
    send: jest.fn().mockReturnThis(),
    query: jest.fn().mockReturnThis(),
    set: jest.fn().mockReturnThis(),
    end: jest.fn().mockImplementation((cb) => {
        cb(mockError, mockResponse);
    }),
    setMockResponse: (mockRes) => {
        mockResponse = mockRes;
    },
    setMockError: (mockErr) => {
        mockError = mockErr;
    },
    setMockResponseBody: (body) => {
        mockResponse.body = body;
    },
    getRequestUrl: () => {
        return requestUrl;
    },
};
module.exports = request;
