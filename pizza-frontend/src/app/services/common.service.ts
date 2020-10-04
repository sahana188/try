import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from '../../environments/environment';

@Injectable()

export class CommonService {
    apiUrl = environment.apiUrl;
    url: string;

    constructor(private http: HttpClient) { }
    header = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  
    setUrl(resourceUrl: string) {
        this.url = this.apiUrl + resourceUrl;
    }
    getUrl() {
        return this.url
    }
    get() {
        return this.http.get(this.url);
    }
    post(data) {
        return this.http.post(this.url, JSON.stringify(data), { headers: this.header });
    }
    update(id:any, data)
    {
         return this.http.put(this.url +'/'+id , JSON.stringify(data), {headers: this.header});
    }
}
