import {BaseRequest} from "../base.request";

interface Contact {
    phone?: number; // required
    groups?: number[];
    fields?: Field[];
}

interface Field {
    id: number;
    value: number | string;
}

export class StoreContact extends BaseRequest {
    url: string;
    method: string;
    data: Contact;

    constructor() {
        super();
        this.url = this.baseUrl + "/api/contacts";
        this.method = "POST";

        this.data = {};
    }

    phone(phone: number) {
        this.data.phone = phone;
        return this;
    }

    groups(groups: number[]) {
        this.data.groups = groups;
        return this;
    }

    fields(fields: Field[]) {
        this.data.fields = fields;
        return this;
    }
}
