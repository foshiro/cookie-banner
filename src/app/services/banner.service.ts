import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../environments/environment';
import { BannerResponse } from '../models/banner';

@Injectable()
export class BannerService {
  constructor(private http: HttpClient) {}

  getBanners(): Observable<BannerResponse> {
      return this.http.get<BannerResponse>(`${environment.API_URL}/getBanner`);
  }
}
