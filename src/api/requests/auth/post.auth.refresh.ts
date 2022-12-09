import {BaseRequest} from "../base.request";

export class PostAuthToken extends BaseRequest {
    url: string;
    method: string;
    data: object;

    constructor() {
        super();
        this.url = this.baseUrl + "/api/auth/refresh";
        this.method = "POST";
    }
}
