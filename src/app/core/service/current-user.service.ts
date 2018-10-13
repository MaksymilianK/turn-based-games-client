import { ActivationStart, Router, NavigationStart } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from '../model/user';

@Injectable({providedIn: 'root'})
export class CurrentUserService {

    private _current: User = null;

    constructor(private httpClient: HttpClient, private router: Router) {
        this.onNavigationStart();
    }

    onNavigationStart(): void {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                this.httpClient.get<User>('api/users/current').subscribe(
                    current => {this._current = current; console.log(current)},
                    error => {this._current = null; console.log(error);}
                );
            }
        });
    }

    get current() {
        return this._current;
    }
}
