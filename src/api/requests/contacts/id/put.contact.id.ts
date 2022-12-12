import {BaseRequest} from "../../base.request";
import {Method} from "axios";

interface Contact {
    phone?: number;
    groups?: Array<number> | null;
    fields?: Array<Field>;
}

interface Field {
    id: number;
    value: string | number | sDate;
}

type sDate = string;

export class PutContact extends BaseRequest {
    url: string;
    method: Method;
    data: Contact;

    constructor(id: number | string) {
        super();
        this.url = this.baseUrl + `/api/contacts/${id}`;
        this.method = "PUT";

        this.data = {};
    }

    phone(phone: number) {
        this.data.phone = phone;
        return this;
    }

    groups(groups: Array<number>) {
        this.data.groups = groups;
        return this;
    }

    fields(fields: Array<Field>) {
        this.data.fields = fields;
        return this;
    }
}