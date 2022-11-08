import {expect} from "chai";
import axios from "axios";
import {TokenController} from "../helpers/tokenController";
import {GetUserBalance} from "../api/requests/accounts/get.user.balance";
import {SchemaBalance} from "../api/responsesSchemas/accounts/schema.balance";
import {GetTariffs} from "../api/requests/accounts/get.tariffs";
import {SchemaTariffs} from "../api/responsesSchemas/accounts/schema.tariffs";

describe("/api/accounts/..", async () => {
    beforeEach("Login", async () => {
        const tokenController = new TokenController();
        await tokenController.checkToken();
    });

    it("GET api/accounts/balance", async () => {
        const request = new GetUserBalance();
        const response = await axios(request);

        expect(response.status).equal(200);

        const data : SchemaBalance = response.data;

        expect(data.data.balance).to.be.a('number');
        expect(data.data.currency).to.be.a('string');
        expect(data.data.credit)
            .to.be.a('number')
            .to.be.most(0);
    });

    it("GET api/accounts/tariff", async () => {
        const request = new GetTariffs();
        const response = await axios(request);

        expect(response.status).equal(200);

        const data : SchemaTariffs = response.data;
        data.data.forEach(tariff => {
            expect(tariff.id).to.be.a('number');
            expect(tariff.name).to.be.a('string');
            expect(tariff.code).to.be.within(0, 9);
            expect(tariff.is_active).to.be.a('boolean');
            expect(tariff.is_default).to.be.a('boolean');
        });
    });
});
