import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';
import { Person } from '../person';
import { log } from 'util';

@Component({
  selector: 'app-guestlist',
  templateUrl: './guestlist.component.html',
  styleUrls: ['./guestlist.component.css']
})

// executed when the component is loaded
export class GuestlistComponent implements OnInit {
  
  guests: Person[];
  filteredGuest: Person[] = [];

  constructor(private peopleService:PeopleService) { }

  getPeople(){
    this.peopleService.getPeople().subscribe(data => this.guests = data);
    // arrow function
    // subscribe(function(data) {
    //   return this.guests = data;
    //   };
    // );
    // data is coming from people.service.ts>getPeople()
  }



  findPeople(fn, ln){
    // clear the previous input and result
    this.filteredGuest.length = 0;

    // console.log(fn.value);
    // console.log(ln.value);
    this.peopleService.getPeople(fn.value, ln.value).subscribe(data => this.filteredGuest = data);
  }



  ngOnInit() {
    this.getPeople();  
  }

}
