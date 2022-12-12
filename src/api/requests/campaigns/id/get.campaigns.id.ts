import {BaseRequest} from "../../base.request";
import {Method} from "axios";

export class CampaignsInfo extends BaseRequest {
    url: string;
    method: Method;

    constructor(id: number) {
        super();
        this.url = this.baseUrl + `/api/campaigns/${id}`;
    }
}