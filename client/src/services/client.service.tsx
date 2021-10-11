import http from "./base.service";
import Cliente from "../models/client";

class ClientDataService {
  getAll() {
    return http.get("/Cliente");
  }

  create(data: Cliente) {
    return http.post("/Cliente", data);
  }

  update(data: Cliente, id: number) {
    return http.put(`/Cliente/${id}`, data);
  }

  delete(id: number) {
    return http.delete(`/Cliente/${id}`);
  }
}

export default new ClientDataService();
