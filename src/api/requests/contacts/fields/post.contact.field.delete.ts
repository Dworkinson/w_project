import {BaseRequest} from "../../base.request";
import {Method} from "axios";

type Ids = {ids?: [number]}

export class DeleteContactField extends BaseRequest {
    url: string;
    method: Method;
    data: Ids;

    constructor() {
        super();
        this.url = this.baseUrl + `/api/contacts/fields/delete`;
        this.method = "POST";

        this.data = {};
    }

    ids(ids: Ids) {
        this.data = ids;
        return this;
    }
}