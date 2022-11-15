import {BaseRequest} from "../../base.request";

export class StopCampaign extends BaseRequest {
    url: string;
    method: string;

    constructor(id: number) {
        super();
        this.url = this.baseUrl + `/api/campaigns/${id}/stop`;
        this.method = "PATCH";
    }
}