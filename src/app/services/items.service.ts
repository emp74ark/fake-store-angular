import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Item} from "../shared/interfaces";
import {PRODUCTS} from "./http.service.conf";

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(
    private http: HttpClient
  ) { }

  getAll(limit=5, sort='asc') {
    // todo: Error handling by catchError
    return this.http.get<Item[]>(`${PRODUCTS}?limit=${limit}&sort=${sort}`);
  }
  getSingle(id: number) {
    return this.http.get<Item>(`${PRODUCTS}/${id}`);
  }
  getCategories() {
    return this.http.get<string[]>(`${PRODUCTS}/categories`);
  }
  getCategoryItems(category: string, limit=10, sort='asc') {
    return this.http.get<Item[]>(`${PRODUCTS}/category/${category}?limit=${limit}&sort=${sort}`);
  }

}
