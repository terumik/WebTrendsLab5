import { Injectable } from '@angular/core';
import { Person } from './person';
import { Observable, of } from 'rxjs';
import { log } from 'util';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private people:Person[] = [
    new Person(1, 'Anna', 'Willson', new Date('1990-12-11')),
    new Person(2, 'John', 'Doe', new Date('1970-01-23')),
    new Person(3, 'Anna', 'Doe', new Date('2017-06-07'))
  ];
  private filteredGuest:Person[] = [];

  getPeople(fn?:string, ln?:string):Observable <Person[]>{
    if (fn==undefined&&ln==undefined) {
      return of(this.people);
    } 
    else{
      
      if(fn !== undefined){
        let fnMatch = this.people.filter(function(val){return val.firstName==fn});
        fnMatch.forEach(elm => {
          // console.log(elm);
          this.filteredGuest.push(elm);
        });
      }
      if(ln !== undefined){
        let lnMatch = this.people.filter(function(val){return val.lastName==ln});
        lnMatch.forEach(elm => {
          // console.log(elm);
          this.filteredGuest.push(elm);
        });
      }    
      console.log(this.filteredGuest);
      
      return of(this.filteredGuest);
    }

  }


  constructor() {
  }

}
