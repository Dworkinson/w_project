import {BaseRequest} from "../../base.request";

export class CampaignsInfo extends BaseRequest {
    url: string;
    method: string;

    constructor(id: number) {
        super();
        this.url = this.baseUrl + `/api/campaigns/${id}`;
    }
}