import {BaseRequest} from "../base.request";

export class GetTariffs extends BaseRequest {
    url: string;
    method: string;

    constructor() {
        super();
        this.url = this.baseUrl + "/api/accounts/tariff";
        this.method = "GET";
    }
}
