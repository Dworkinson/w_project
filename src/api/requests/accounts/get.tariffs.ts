import {BaseRequest} from "../base.request";
import {Method} from "axios";

export class GetTariffs extends BaseRequest {
    url: string;
    method: Method;

    constructor() {
        super();
        this.url = this.baseUrl + "/api/accounts/tariff";
        this.method = "GET";
    }
}
