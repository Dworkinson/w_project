import {expect} from "chai";
import axios from "axios";
import {TokenController} from "../helpers/tokenController";
import {GetUserBalance} from "../api/requests/account/get.user.balance";
import {Balance} from "../api/requests/account/interfase.get.user.balance";

describe("/api/accounts/..", async () => {
    beforeEach("Login", async () => {
        const tokenController = new TokenController();
        await tokenController.checkToken();
    });

    it("../balance", async () => {
        const request = new GetUserBalance();
        const response = await axios(request);

        expect(response.status).equal(200);

        const data : Balance = response.data;

        expect(data.data.balance).to.be.a('number');
        expect(data.data.currency).to.be.a('string');
        expect(data.data.credit)
            .to.be.a('number')
            .to.be.most(0);
    });
});
