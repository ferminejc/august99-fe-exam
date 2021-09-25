import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class SpacexService {
  spacexAPI = environment.api.spacex;

  constructor(private _httpClient: HttpClient) {}

  getCapsules(): Observable<any[]> {
    return this._httpClient.get<any[]>(this.spacexAPI);
  }
}
