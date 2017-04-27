import {Component} from '@angular/core';
import {UserService} from "../../app/services/user.service";
import {User} from "../../app/model/user";

@Component({
    selector: 'page-settings',
    templateUrl: 'settings.html',
})
export class Settings {

    user: User;

    constructor(userService: UserService) {
        this.user = userService.user;
    }
}
