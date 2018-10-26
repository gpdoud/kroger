import { Injectable } from '@angular/core';

import { Friend } from './friend';

const friends = [
  { name: 'Ray', age: 64, bff: true },
  { name: 'Randy', age: 60, bff: true },
  { name: 'Frank', age: 55, bff: false }

];

@Injectable({
  providedIn: 'root'
})
export class FriendService {

  getFriends(): Friend[] {
    return friends;
  }

  constructor() { }
}
