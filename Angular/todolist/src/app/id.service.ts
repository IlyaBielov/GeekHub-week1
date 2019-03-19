import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdService {

  constructor() { }

  get id() {
    const s = [];
    const hexDigits = '0123456789abcdef';
    for (let i = 0; i < 10; i++) {
      s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    const uuid = s.join('');
    return uuid;
  }
}
