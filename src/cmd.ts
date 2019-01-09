#!/usr/bin/env node
/*************************************************************************************************************************
 * Copyright (c) 2019, Anthony Hunter.
 * This unpublished material is proprietary to Anthony Hunter.
 * All rights reserved. The methods and techniques described herein are considered trade secrets and/or confidential.
 * Reproduction or distribution, in whole or in part, is forbidden except by express written permission of Anthony
 * Hunter.
 *************************************************************************************************************************/
import * as commander from "commander";
import {CommanderStatic} from "commander";
import {CommandLoader} from "./commands/CommandLoader";

const bootstrap = () => {
    const program: CommanderStatic = commander;
    program.version(require("../package.json").version);
    CommandLoader.load(program);
    program.parse(process.argv);
    if (program.args.length === 0) {
        program.help();
    }

};

bootstrap();
