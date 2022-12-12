import {BaseRequest} from "../../base.request";
import {Method} from "axios";

export class StopCampaign extends BaseRequest {
    url: string;
    method: Method;

    constructor(id: number) {
        super();
        this.url = this.baseUrl + `/api/campaigns/${id}/stop`;
        this.method = "PATCH";
    }
}