import Response from "../models/response";
import axios from "axios";


export default class BaseService {
    private static baseURL: string = "http://localhost:8000/api";

    private static config = {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        }
    };


    public static async getAll<T>(url: string): Promise<Response> {
        let res = await axios.get<Array<T>>(this.baseURL + url, this.config)
            .then((response: any) => {
                const result = response.data.data;

                if (result) {
                    return new Response(true, result as Array<T>, "Success", "");
                } else {
                    const msg = (result.messageList && result.messageList.length > 0) ? result.messageList[0].text : "Error";
                    return new Response(false, null, "Error", msg);
                }

            })
            .catch(function (error) {
                return new Response(false, null, "Error", error);
            });
        return res;
    }

    public static get<T>(url: string, param: any): Promise<Response> {
        let res = axios.get<T>(this.baseURL + url + `/${param}`)
            .then((response: any) => {
                const result = response.data.data;
                if (result) {
                    return new Response(true, result, "Success", "");
                } else {
                    const msg = (result.messageList && result.messageList.length > 0) ? result.messageList[0].text : "Error";
                    return new Response(false, null, "Error", msg);
                }
            })
            .catch(function (error) {
                return new Response(false, null, "Error", error);
            });
        return res;
    }

    public static delete(url: string, param: any): Promise<Response> {
        let res = axios.delete(this.baseURL + url, { data: param })
            .then(response => {
                const result = response.data;
                if (result) {
                    return new Response(true, result.data, "Success", "");
                } else {
                    const msg = (result.messageList && result.messageList.length > 0) ? result.messageList[0].text : "Error";
                    return new Response(false, null, "Error", msg);
                }
            })
            .catch(function (error) {
                return new Response(false, null, "Error", error);
            });
        return res;
    }

    public static create<T>(url: string, obj: T): Promise<Response> {

        let res = axios.post(this.baseURL + url, obj)
            .then(response => {
                const result = response.data;
                if (result) {
                    return new Response(true, result.data, "Success", "");
                } else {
                    const msg = (result.messageList && result.messageList.length > 0) ? result.messageList[0].text : "Error";
                    return new Response(false, null, "Error", msg);
                }
            })
            .catch(function (error) {
                return new Response(false, null, "Error", error);
            });
        return res;
    }

    public static update<T>(url: string, obj: T): Promise<Response> {

        let res = axios.put(this.baseURL + url, obj)
            .then(response => {
                const result = response.data;
                if (result) {
                    return new Response(true, result.data, "Success", "");
                } else {
                    const msg = (result.messageList && result.messageList.length > 0) ? result.messageList[0].text : "Error";
                    return new Response(false, null, "Error", msg);
                }
            })
            .catch(function (error) {
                return new Response(false, null, "Error", error);;
            });
        return res;
    }
}
