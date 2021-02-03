import { Injectable } from '@angular/core';
import {http} from "../config/http.common";

@Injectable({
  providedIn: 'root'
})
export class TreeService {

constructor() { }

getAll() {
  return http.get("/trees");
}

findOne(id) {
  return http.get(`/trees/${id}`);
}

create(data) {
  return http.post("/trees", data);
}

update(id, data) {
  return http.put(`/trees/${id}`, data);
}

delete(id) {
  return http.delete(`/trees/${id}`);
}

}
