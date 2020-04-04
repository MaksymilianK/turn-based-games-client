import { Component, OnInit } from '@angular/core';

import { CurrentUserService } from '../../core/service/current-user.service';
import { RoomsStats } from '../../model/rooms-stats';
import { StatsService } from '../../service/stats.service';
import { UsersStats } from '../../model/users-stats';

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    private roomsStats: RoomsStats;
    private usersStats: UsersStats;

    constructor(public currentUserService: CurrentUserService, private statsService: StatsService) {}

    ngOnInit(): void {
        this.statsService.getRoomsStats().subscribe(
            stats => this.roomsStats = stats,
            error => console.log(error)
        );

        this.statsService.getUsersStats().subscribe(
            stats => this.usersStats = stats,
            error => console.log(error)
        );
    }
}
