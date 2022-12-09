import {BaseRequest} from "../base.request";

export class PostAuthToken extends BaseRequest {
    url: string;
    method: string;
    data: object;

    constructor(apiKey: string) {
        super();
        this.url = this.baseUrl + "/api/auth/login";
        this.method = "POST";

        this.headers.Authorization = null;

        this.data = {
            api_key: apiKey
        }
    }
}
