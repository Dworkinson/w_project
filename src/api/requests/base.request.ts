import {AxiosRequestConfig, AxiosRequestHeaders} from "axios";
import {config} from "../../helpers/envController";
import * as tokens from "../../data/tokens.json";


export class BaseRequest implements AxiosRequestConfig {
    baseUrl: string;
    headers: AxiosRequestHeaders;
    validateStatus: any;

    constructor() {
        this.baseUrl = config.baseUrl;
        this.headers = {
            'Content-Type': 'application/json',
        };

        this.headers.Authorization = 'Bearer ' + tokens[config.env][config.mode].token;
        this.validateStatus = false;
    }
}
