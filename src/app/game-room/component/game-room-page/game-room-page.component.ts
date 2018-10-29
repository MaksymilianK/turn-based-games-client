import { Component, OnInit } from '@angular/core';
import { GameRoomService } from '../../service/game-room.service';
import { ActivatedRoute, Router, UrlTree } from '@angular/router';
import { Page } from '../../../shared/model/page';
import { GameRoomDescription } from '../../model/game-room-description';
import { Game } from '../../../game/game';
import { HttpErrorResponse } from '@angular/common/http';
import { PageEvent } from '@angular/material';
import { PageRequest } from '../../../shared/model/page-request';

@Component({
    templateUrl: './game-room-page.component.html',
    styleUrls: ['./game-room-page.component.css']
})
export class GameRoomPageComponent implements OnInit {

    private pageOptions: PageRequest = new PageRequest(16, 1);

    private game: Game;

    private roomPage: Page<GameRoomDescription>;

    constructor(private roomService: GameRoomService, private activatedRoute: ActivatedRoute, private router: Router) {}

    ngOnInit(): void {
        this.activatedRoute.paramMap.subscribe(params => {
            const game: string = params.get('game').replace('-', '_').toUpperCase();
            if (!Object.keys(Game).includes(game)) {
                this.router.navigateByUrl('game-rooms');
            }

            this.game = <Game> game;
            this.load();
        });
    }

    private reload(event: PageEvent): void {
        this.pageOptions.page = event.pageIndex;
        this.pageOptions.size = event.pageSize;
        this.load();
    }

    private load(): void {
        this.roomService.getPage(this.game, this.pageOptions).subscribe(
            roomPage => this.roomPage = roomPage,
            (error: HttpErrorResponse) => {
                console.log('-----------------' + error.error);
                let url = this.router.parseUrl('error?error=' + error.error);
                this.router.navigateByUrl(url);
            });
    }
}
