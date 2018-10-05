import { ActivationStart, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from '../model/user';

@Injectable()
export class CurrentUserService {

    private _current: User = null;

    constructor(private httpClient: HttpClient, private router: Router) {
        this.onNavigationStart();
    }

    onNavigationStart(): void {
        this.router.events.subscribe(event => {
            if (event instanceof ActivationStart) {
                this.httpClient.get<User>('api/users/current').subscribe(
                    current => this._current = current,
                    error => this._current = null
                );
            }
        });
    }

    get current() {
        return this._current;
    }
}
