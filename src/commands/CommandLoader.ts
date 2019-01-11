/*************************************************************************************************************************
 * Copyright (c) 2018, Anthony Hunter.
 * This unpublished material is proprietary to Anthony Hunter.
 * All rights reserved. The methods and techniques described herein are considered trade secrets and/or confidential.
 * Reproduction or distribution, in whole or in part, is forbidden except by express written permission of Anthony
 * Hunter.
 *************************************************************************************************************************/
import {CommanderStatic} from "commander";
import {HelloAction} from "../actions/HelloAction";
import {QuestionAction} from "../actions/QuestionAction";
import {TodoAction} from "../actions/TodoAction";
import {HelloCommand} from "./HelloCommand";
import {QuestionCommand} from "./QuestionCommand";
import {TodoCommand} from "./TodoCommand";

export class CommandLoader {
    public static load(program: CommanderStatic): void {
        new HelloCommand(new HelloAction()).load(program);
        new QuestionCommand(new QuestionAction()).load(program);
        new TodoCommand(new TodoAction()).load(program);
    }
}
