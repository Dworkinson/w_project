import {BaseRequest} from "../base.request";

export class GetUserBalance extends BaseRequest {
    url: string;
    method: string;

    constructor() {
        super();
        this.url = this.baseUrl + "/api/accounts/balance";
        this.method = "GET";
    }
}
