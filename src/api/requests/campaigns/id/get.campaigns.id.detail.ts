import {BaseRequest} from "../../base.request";

export class CampaignsDetail extends BaseRequest {
    url: string;
    method: string;

    constructor(id: number) {
        super();
        this.url = this.baseUrl + `/api/campaigns/${id}/detail`;
        this.method = "GET";
    }
}