import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Mobile } from './mobile';

const api = '/api';

@Injectable()
export class MobileService {
  constructor(private http: HttpClient) {}
// getAll mobiles
  getMobiles() {
    return this.http.get<Array<Mobile>>(`${api}/mobiles`)
  }

  addMobile(mobile: Mobile) {
    return this.http.post<Mobile>(`${api}/mobile/`, mobile);
  }
// insert 1000 documents
  insertManyObjs(mobile: Mobile) {
    return this.http.post<Mobile>(`${api}/mobile/`, mobile);
  }
}
