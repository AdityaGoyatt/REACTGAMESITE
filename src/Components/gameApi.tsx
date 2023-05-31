import apiClient from "../../../apiCLient";

class dataService {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  Get<T>() {
    apiClient.get(this.endpoint);
  }
}
