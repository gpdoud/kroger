import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../users/user.class';

@Pipe({
  name: 'sortUsers'
})
export class SortUsersPipe implements PipeTransform {

  transform(users: User[], property?: string): User[] {
    let sortProperty = 'LastName';
    if (property != null) {
      sortProperty = property;
    }
    console.log('Sort users by: ', sortProperty);
    return users.sort(compareFn);

    function compareFn(a: User, b: User) {
      if (a[sortProperty] === b[sortProperty]) {
        return 0;
      }
      return (a[sortProperty] > b[sortProperty]) ? 1 : -1;
    }
  }

}
