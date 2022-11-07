import * as minimist from "minimist";

import {baseUrl} from "../data/environments";
import {testUsers} from "../data/testUsers";

import * as tokens from "../data/tokens.json";

const env : string = minimist(process.argv).ENV;
const mode : string = minimist(process.argv).MODE;

interface Configs {
    env: string;
    mode: string;

    baseUrl: string;
    user: string;
    tokenData: {
        token: string;
        timestamp: number;
    }
}

export const config : Configs = {
    env: env,
    mode: mode,

    baseUrl: baseUrl[env],
    user: testUsers[env][mode],
    tokenData: tokens[env]
}
