import { GameRoomDescription } from '../../model/game-room-description';
import { Component, Input } from '../../../../../node_modules/@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RoomPrivacy } from '../../model/room-privacy';
import { ChatPolicy } from '../../model/chat-policy';
import { GameSettings } from '../../../game/model/game-settings';
import { HttpClient } from '../../../../../node_modules/@types/selenium-webdriver/http';
import { GameRoomService } from '../../service/game-room.service';
import { GameRoomSettings } from '../../model/game-rooms-settings';
import { HttpErrorResponse } from '../../../../../node_modules/@angular/common/http';
import { DontGetAngrySettings } from '../../../game/dont-get-angry/model/dont-get-angry-settings';

@Component({
    templateUrl: './game-room-create.component.html',
    styleUrls: ['./game-room-create.component.css']
})
export class GameRoomCreateComponent {

    private form: FormGroup;

    constructor(private gameRoomService: GameRoomService, private router: Router, formBuilder: FormBuilder) {
        this.form = formBuilder.group({
            areObserversAllowed: [true],
            privacy: [RoomPrivacy.PUBLIC, Validators.required],
            chatPolicy: [ChatPolicy.CHAT_ON, Validators.required],
            game: ['', Validators.required]
        });
    }

    onGameSubmit(gameSettings: DontGetAngrySettings): void {
        this.gameRoomService.create(new GameRoomSettings(
            this.form.get('areObserversAllowed').value,
            this.form.get('privacy').value,
            this.form.get('chatPolicy').value,
            gameSettings
        )).subscribe(
            roomResponse => this.router.navigateByUrl('game-rooms/' + roomResponse.body.roomId),
            (error: HttpErrorResponse) => {
                if (error instanceof ErrorEvent) {
                    this.router.navigateByUrl(this.router.parseUrl('error?error=' + error.error));
                } else {
                    console.log(error.error);
                }
            }
        );
    }
}
