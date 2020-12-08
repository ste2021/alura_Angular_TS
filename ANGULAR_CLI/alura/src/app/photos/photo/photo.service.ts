import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

const API = "http://localhost:3000/flavio/photos";

@Injectable()
export class PhotoService {

    constructor(private http: HttpClient) {}

    listFromUser(userName: string) {
        return this.http
            .get<any[]>(API + '/' + userName + '/photos');
    }
}
