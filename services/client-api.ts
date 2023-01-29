import qs from "qs";
import {
  headerRequest,
  headerRequestAuth,
  headerFileRequestAuth,
} from "../helpers/common";

class ClientApi {
  private uri: string | undefined;

  constructor() {
    this.uri = process.env.NEXT_PUBLIC_API_URL;
  }

  private addParam(params: object) {
    return `?${qs.stringify(params)}`;
  }

  private getheader(value: string, token?: string) {
    switch (value) {
      case "reqAuth":
        return headerRequestAuth(token);
        break;

      case "fileReqAuth":
        return headerFileRequestAuth(token);
        break;

      default:
        return headerRequest;
        break;
    }
  }

  async req(
    endpoint: string,
    method: string,
    header: "req" | "reqAuth" | "fileReqAuth" = "req",
    params?: object,
    body?: any,
    token?: string
  ) {
    const _url = this.uri + endpoint + `${params ? this.addParam(params) : ""}`;

    const response = await fetch(_url, {
      method: method,
      headers: this.getheader(header, token),
      body: body
        ? header !== "fileReqAuth"
          ? JSON.stringify(body)
          : body
        : null,
    });

    // if (!response.ok) throw new Error(response.statusText);

    return response;
  }
}

const clientApi = new ClientApi();
export default clientApi;
