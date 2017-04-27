import {Component} from '@angular/core';
import {UserService} from "../../app/services/user.service";
import {User} from "../../app/model/user";

@Component({
    selector: 'page-tracking',
    templateUrl: 'tracking.html',
})
export class Tracking {

    user: User;

    constructor(userService: UserService) {
        this.user = userService.user;
    }
}