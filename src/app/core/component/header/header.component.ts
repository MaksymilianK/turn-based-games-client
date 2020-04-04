import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { CurrentUserService } from '../../service/current-user.service';
import { UserService } from '../../../user/service/user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'core-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {

    constructor(public currentUserService: CurrentUserService, private userService: UserService, private router: Router) {}

    logout(): void {
        this.userService.logOut().subscribe(text => {this.router.navigate([''])});
    }
}
