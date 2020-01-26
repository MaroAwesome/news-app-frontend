import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class NewsAPIsService {
  private url = "/api/";
  constructor(private http: HttpClient) {}
  getAll() {
    return this.http.get(this.url + "/getAll");
  }
  getByID(id) {
    return this.http.get(this.url + "/get/" + id);
  }
  insertNews(news) {
    return this.http.post(this.url + "/insertNews", news);
  }
}
