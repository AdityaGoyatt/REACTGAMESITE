import apiClient from "./apiClient";

class dataService {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  Get<T>() {
    apiClient.get(this.endpoint);
  }
}
