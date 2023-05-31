import apiClient from "../../../apiCLient";
import { useEffect } from "react";

export interface game {
  id: number;
  name: string;
}

export interface games {
  results: Array<game>;
}
class dataService {
  endpoint = "/games";

  Get() {
    apiClient.get(this.endpoint);

    const controller = new AbortController();

    const request = apiClient.get<games>(this.endpoint, {
      signal: controller.signal,
    });
    const cancel = () => controller.abort();
    return { request, cancel };
  }
}

export default new dataService();
