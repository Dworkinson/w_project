import {GetAuthToken} from "../api/requests/auth/get.auth.token";
import {config} from "./envController";
import * as tokens from "../data/tokens.json";
import * as fs from "fs";

import axios from "axios";

export class TokenController {
    token: string;
    timestamp: number;
    oneHour = 3600e3;

    constructor() {
        this.token = tokens[config.env][config.mode]["token"];
        this.timestamp = tokens[config.env][config.mode]["timestamp"];
    }

    async getToken(): Promise<string> {
        const request = new GetAuthToken(config.user);
        const response = await axios(request);

        return response.data.bearer;
    }

    async storeToken(): Promise<void> {
        let data = require("../data/tokens.json");

        data[config.env][config.mode].token = await this.getToken();
        data[config.env][config.mode].timestamp = Date.now();

        fs.writeFileSync("src/data/tokens.json", JSON.stringify(data));
    }

    /**
     * Check if token exist -> refresh token
     */
    async checkToken(): Promise<void> {
        const tokenLive = Date.now() - this.timestamp;
        if(tokenLive >= this.oneHour) {
            await this.storeToken();
        }
    }
}
