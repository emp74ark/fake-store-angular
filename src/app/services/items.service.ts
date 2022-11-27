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

  getAll(category: string, limit=5, sort='asc') {
    // todo: Error handling by catchError
    if (category.trim()){
      return this.http.get<Item[]>(`${PRODUCTS}/category/${category}?limit=${limit}&sort=${sort}`);
    }
    return this.http.get<Item[]>(`${PRODUCTS}?limit=${limit}&sort=${sort}`);
  }
  getSingle(id: number) {
    return this.http.get<Item>(`${PRODUCTS}/${id}`);
  }
  getCategories() {
    return this.http.get<string[]>(`${PRODUCTS}/categories`);
  }
}
