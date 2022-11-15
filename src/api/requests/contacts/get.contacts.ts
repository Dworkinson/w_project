import {BaseRequest} from "../base.request";

interface ContactsRequest {
    page?: number | null;
    per_page?: number | null;
    groups?: number[] | null;
}

export class GetContacts extends BaseRequest {
    url: string;
    method: string;
    params: ContactsRequest;

    constructor() {
        super();
        this.url = this.baseUrl + "/api/contacts";
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

    groups(groups: number[]) {
        this.params.groups = groups;
        return this;
    }
}