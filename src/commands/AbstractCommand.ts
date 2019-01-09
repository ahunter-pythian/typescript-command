/*************************************************************************************************************************
 * Copyright (c) 2019, Anthony Hunter.
 * This unpublished material is proprietary to Anthony Hunter.
 * All rights reserved. The methods and techniques described herein are considered trade secrets and/or confidential.
 * Reproduction or distribution, in whole or in part, is forbidden except by express written permission of Anthony
 * Hunter.
 *************************************************************************************************************************/
import {CommanderStatic} from "commander";
import {AbstractAction} from "../actions/AbstractAction";

export abstract class AbstractCommand {
    public constructor(protected action: AbstractAction) {
    }

    public abstract load(program: CommanderStatic): void;
}
