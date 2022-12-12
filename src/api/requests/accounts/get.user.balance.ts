import {BaseRequest} from "../base.request";
import {Method} from "axios";

export class GetUserBalance extends BaseRequest {
    url: string;
    method: Method;

    constructor() {
        super();
        this.url = this.baseUrl + "/api/accounts/balance";
        this.method = "GET";
    }
}
