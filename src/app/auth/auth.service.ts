import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";

interface AccessToken {
  access_token: string;
}

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {
  }

  signin(login: any) {
    return this.http.post<AccessToken>(`${environment.apiUrl}/v1/signin`, login);
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('xsrfToken');
    return token !== undefined;
  }

  account() {
    const token = localStorage.getItem('xsrfToken');
    const headers = new HttpHeaders({'x-xsrf-token':token});
    return this.http.get(`${environment.apiUrl}/v1/secured/account`, { headers, withCredentials: true });
  }

  signout() {
    const token = localStorage.getItem('xsrfToken');
    const headers = new HttpHeaders({'x-xsrf-token':token});
    return this.http.get(`${environment.apiUrl}/v1/secured/signout`, { headers, withCredentials: true });
  }
}
