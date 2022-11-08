import {expect} from "chai";
import axios from "axios";
import {TokenController} from "../helpers/tokenController";
import {GetCampaigns} from "../api/requests/campaigns/get.campaigns";
import {Campaigns, MessageType, Status} from "../api/requests/campaigns/interfase.get.campaings";
import {checkNullableDate, lDateValidation} from "../helpers/commonFunctions/assertions";


describe("GET /api/campaigns", async () => {
    beforeEach("Login", async () => {
        const tokenController = new TokenController();
        await tokenController.checkToken();
    });

    it("Default params", async () => {
        const request = new GetCampaigns();
        const response = await axios(request);

        expect(response.status).equal(200);

        const data: Campaigns = response.data;
        data.data.forEach(campaign => {
            expect(campaign.id).to.be.a('number');
            expect(campaign.name)
                .to.be.a('string')
                .to.have.lengthOf.within(1, 100);
            expect(campaign.status).to.be.valueOf(Status);
            expect(campaign.message_type).to.be.valueOf(MessageType);
            expect(lDateValidation(campaign.start_at)).to.be.true;
            checkNullableDate(campaign.real_start_at, 'long');
            checkNullableDate(campaign.finished_at, 'long');
            expect(lDateValidation(campaign.created_at)).to.be.true;

            expect(campaign.statistics.delivered).at.least(0);
            expect(campaign.statistics.sent).at.least(0);
        });

        expect(data.meta.page.limit).equal(50);
        expect(data.meta.page.offset).equal(0);
        expect(data.meta.page.total).at.least(0);
    });

    it("Default sort = id, default way = asc", async () => {
        const request = new GetCampaigns();
        const response = await axios(request);

        expect(response.status).equal(200);

        const data: Campaigns = response.data;
        let prevId = 0;

        data.data.forEach(campaign => {
            const id = campaign.id;
            expect(id > prevId).to.be.true;

            prevId = id;
        });
    });

    it("Default date range = 3 month", async () => {
        const _90_DAYS_UNIX = 2.3328e11

        const fRequest = new GetCampaigns().way('desc');
        const fResponse = await axios(fRequest);

        const fData : Campaigns = fResponse.data;
        const firstDate = fData.data[0].created_at;
        lDateValidation(firstDate);
        const firstDateUnix = new Date(firstDate).getTime();

        const sRequest = new GetCampaigns().way('asc');
        const sResponse = await axios(sRequest);

        const sData : Campaigns = sResponse.data;
        const lastDate = sData.data[0].created_at;
        lDateValidation(lastDate);
        const lastDateUnix = new Date(lastDate).getTime();

        const range = firstDateUnix - lastDateUnix;

        expect(firstDateUnix > lastDateUnix).to.be.true;
        expect(range < _90_DAYS_UNIX).to.be.true;
    });
});