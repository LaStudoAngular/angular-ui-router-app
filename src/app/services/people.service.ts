import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }

  public getAllPeople() {
    return this.http.get<any>('../../assets/people.json').toPromise();
  }

  public getPerson(id) {
    function personMatchesParam(person) {
      return person.id === id;
    }
    return this.getAllPeople().then(people => people.find(personMatchesParam));
  }
}
