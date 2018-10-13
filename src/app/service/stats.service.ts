import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { RoomsStats } from "../model/rooms-stats";
import { Observable } from "rxjs";
import { UsersStats } from "../model/users-stats";

@Injectable()
export class StatsService {

    constructor(private httpClient: HttpClient) {}

    getRoomsStats(): Observable<RoomsStats> {
        return this.httpClient.get<RoomsStats>('api/game-rooms/stats');
    }

    getUsersStats(): Observable<UsersStats> {
        return this.httpClient.get<UsersStats>('api/users/stats');
    }
}
