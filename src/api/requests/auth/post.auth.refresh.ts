import {BaseRequest} from "../base.request";
import {Method} from "axios";

export class PostAuthToken extends BaseRequest {
    url: string;
    method: Method;
    data: object;

    constructor() {
        super();
        this.url = this.baseUrl + "/api/auth/refresh";
        this.method = "POST";
    }
}
