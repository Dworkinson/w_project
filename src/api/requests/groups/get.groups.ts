import {BaseRequest} from "../base.request";
import {Method} from "axios";

export class GetGroups extends BaseRequest {
    url: string;
    method: Method;
    params: {
        page?: string | number;
        per_page?: string | number;
    }

    constructor() {
        super();
        this.url = this.baseUrl + "/api/groups";
        this.method = "GET";

        this.params = {};
    }

    page(page: number | string) {
        this.params.page = page;
        return this;
    }

    perPage(per_page: number | string) {
        this.params.per_page = per_page;
        return this;
    }
}
