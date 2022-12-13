import {BaseRequest} from "../base.request";
import {Method} from "axios";

interface Stoplist {
    per_page?: string | number;
    page?: string | number;
    type?: Type;
}

type Type = "sms" | "viber";

export class GetStoplist extends BaseRequest {
    url: string;
    method: Method;
    params: Stoplist;

    constructor() {
        super();
        this.url = this.baseUrl + `/api/stoplist`;
        this.method = "GET";

        this.params = {};
    }

    page(page: number) {
        this.params.page = page;
        return this;
    }

    perPage(per_page: number) {
        this.params.per_page = per_page;
        return this;
    }

    type(type: Type) {
        this.params.type = type;
        return this;
    }
}
