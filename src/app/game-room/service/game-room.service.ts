import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Page } from '../../shared/model/page';
import { Game } from '../../game/game';
import { Observable } from 'rxjs';
import { GameRoomDescription } from '../model/game-room-description';
import { PageRequest } from '../../shared/model/page-request';
import { GameRoomSettings } from '../model/game-rooms-settings';

@Injectable()
export class GameRoomService {

    constructor(private httpClient: HttpClient) {}

    getPage(game: Game, pageOptions: PageRequest): Observable<Page<GameRoomDescription>> {
        return this.httpClient.get<Page<GameRoomDescription>>('api/game-rooms', {params: {
            game: game, size: pageOptions.size.toString(), page: pageOptions.page.toString()
        }});
    }

    create(roomSettings: GameRoomSettings): Observable<HttpResponse<{roomId: number}>> {
        return this.httpClient.post<HttpResponse<{roomId: number}>>('api/game-rooms', roomSettings);
    }
}
