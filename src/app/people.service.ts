import { Injectable } from '@angular/core';
import { Person } from './person';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private people:Person[] = [
    new Person(1, 'Terumi', 'Kusaka', new Date('1989-03-20')),
    new Person(2, 'John', 'Doe', new Date('1970-01-23')),
    new Person(3, 'Anna', 'Wilson', new Date('2017-06-07'))
  ];

  getPeople():Observable <Person[]>{
    return of(this.people);
  }


  constructor() {
  }

}
