import {Component} from "@angular/core";
import {User} from "../../app/model/user";
import {UserService} from "../../app/services/user.service";

@Component({
    selector: 'page-alert',
    templateUrl: 'alert.html',
})
export class Alert {
    user: User;

    constructor(userService: UserService) {
        this.user = userService.user;
    }
}
