import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Client } from './client';
import { AuthResponse } from './auth.response';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  initializedStorage: boolean = false;
  AUTH_SERVER_ADDRESS: string = 'https://localhost:8080';

  constructor(
    private httpClient: HttpClient,
    private storage: Storage
  ) { 
    this.initializeStorage();
  }

  async initializeStorage() {
    if (!this.initializedStorage) {
      await this.storage.create();
      this.initializedStorage = true;
    }
  }

  isInitializedStorage() {
    return this.initializedStorage;
  }

  private getOptions(client: Client) {
    const base64UserAndPassword = window.btoa(`${client.emailClient}:${client.passwordClient}`);
    const basicAccess = `Basic ${base64UserAndPassword}`;

    const headers = new HttpHeaders({
      'Authorization': basicAccess,
      'Content-Type': 'application/json'
    });

    return { headers };
  }

  register(user: Client): Observable<AuthResponse> {
    return this.httpClient.post<AuthResponse>(
      `${this.AUTH_SERVER_ADDRESS}/api/clients`,
      user,
      this.getOptions(user)
    ).pipe(
      tap(async (res: AuthResponse) => {
        if (res.client) {
          await this.storage.set("token", res.access_token);
        }
      })
    );
  }

  login(user: Client): Observable<AuthResponse> {
    return this.httpClient.post<AuthResponse>(
      `${this.AUTH_SERVER_ADDRESS}/api/clients/login-users`,
      user,
      this.getOptions(user)
    ).pipe(
      tap(async (res: AuthResponse) => {
        if (res.client) {
          await this.storage.set("token", res.access_token);
        }
      })
    );
  }
}