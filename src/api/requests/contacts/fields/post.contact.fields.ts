import {BaseRequest} from "../../base.request";
import {Method} from "axios";

interface Field {
    name?: string | any;
    type?: Type;
    description?: string | null;
    is_visible?: boolean | null;
}

type Type = "date" | "string" | "number";

export class PostContactFields extends BaseRequest {
    url: string;
    method: Method;
    data: Field;

    constructor() {
        super();
        this.url = this.baseUrl + `/api/contacts/fields`;
        this.method = "POST";

        this.data = {};
    }

    name(name: string | any) {
        this.data.name = name;
        return this;
    }

    type(type: Type) {
        this.data.type = type;
        return this;
    }

    description(description: string) {
        this.data.description = description;
        return this;
    }

    isVisible(visibility: boolean) {
        this.data.is_visible = visibility;
        return this;
    }
}