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

  ngOnInit() {
    this.getPeople();  
  }



}
