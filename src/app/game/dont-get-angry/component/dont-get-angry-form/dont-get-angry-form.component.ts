import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BoardSize } from '../../model/board-size';
import { GameSettings } from '../../../model/game-settings';
import { DontGetAngrySettings } from '../../model/dont-get-angry-settings';

@Component({
    selector: 'dont-get-angry-form',
    templateUrl: './dont-get-angry-form.component.html',
    styleUrls: ['./dont-get-angry-form.component.css']
})
export class DontGetAngryFormComponent {

    private form: FormGroup;

    @Output()
    private submitForm: EventEmitter<DontGetAngrySettings> = new EventEmitter();

    constructor(formBuilder: FormBuilder) {
        this.form = formBuilder.group({
            boardSize: [BoardSize.MEDIUM, Validators.required],
            maxPlayers: [4, [Validators.required, Validators.min(2), Validators.max(4)]],
            playerTime: [15, [Validators.required, Validators.min(1), Validators.max(30)]]
        });
    }

    onSubmit(): void {
        this.submitForm.emit(new DontGetAngrySettings(
            (<BoardSize> this.form.get('boardSize').value).valueOf(),
            <number> this.form.get('maxPlayers').value,
            <number> this.form.get('playerTime').value * 60
        ));
    }
}
