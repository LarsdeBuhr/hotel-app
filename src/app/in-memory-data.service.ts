import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { Booking } from './booking';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb(){
    const bookings: Booking[] = [
      {
        id: 1,
        name: 'Lars',
        roomNumber: 100,
        startDate: new Date(),
        endDate: new Date('2022-12-20'),
      },
      {
       id: 2,
       name: 'Max',
       roomNumber: 10,
       startDate: new Date(),
       endDate: new Date('2022-12-23'),
     },
     {
       id: 3,
       name: 'Manu',
       roomNumber: 101,
       startDate: new Date(),
       endDate: new Date('2022-10-20'),
     },
     {
       id: 4,
       name: 'Anna',
       roomNumber: 12,
       startDate: new Date(),
       endDate: new Date('2023-12-20'),
     },
    
    ];
    return {bookings};
  }
}
