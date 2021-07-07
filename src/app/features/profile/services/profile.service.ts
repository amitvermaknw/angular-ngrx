import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ProfileService {

    constructor(private http: HttpClient) { }

    getRandomProfile() {
        return this.http.get('https://randomuser.me/api/?results=10');
    }

}
