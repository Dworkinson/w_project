import {BaseRequest} from "../base.request";
import {Method} from "axios";

interface Attachments {
    groups?: Array<number>;
    contacts?: Array<number>;
}

export class PostGroupsAttach extends BaseRequest {
    url: string;
    method: Method;
    data: Attachments;

    constructor() {
        super();
        this.url = this.baseUrl + "/api/groups/attach";
        this.method = "POST";

        this.data = {};
    }

    groups(groups: Array<number>) {
        this.data.groups = groups;
        return this;
    }

    contacts(contacts: Array<number>) {
        this.data.contacts = contacts;
        return this;
    }
}
