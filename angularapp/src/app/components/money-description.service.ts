import { Observable } from 'rxjs';
import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoneyDescriptionService {
  public http: HttpClient;
  public baseUrl: string = environment.apiUrl;
  public controller: string = 'MoneyDescription';

  constructor(injector: Injector) { 
    this.http = injector.get(HttpClient);
  }

  public getMoneyDescription(amount: number): Observable<any> {
    return this.http.get(this.baseUrl + this.controller + '?amount=' + amount);
  }
}
