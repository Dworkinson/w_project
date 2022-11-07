import {expect} from "chai";
import {config} from "../helpers/envController";
import {TokenController} from "../helpers/tokenController";


describe("Token test", async() => {
    before("Refresh token", async () => {
        const tokenController = new TokenController();
        await tokenController.checkToken();
    });

    it("Check token", async () => {
        const tokens = require('../data/tokens.json');
        const oneHourTime = 3600e3;

        const tokenTimestamp = tokens[config.env][config.mode].timestamp;
        const tokenLiveTime = Date.now() -  tokenTimestamp;
        expect(tokenLiveTime).below(oneHourTime);
    });
});
