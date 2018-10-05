import { Component } from '@angular/core';

import { CurrentUserService } from '../../service/current-user.service';

@Component({
    selector: 'core-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {

    constructor(private currentUserService: CurrentUserService) {}
}
