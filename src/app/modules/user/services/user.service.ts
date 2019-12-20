import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  formSubmit(data: any) {
    console.log( data );
  }
}
