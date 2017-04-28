import {Component} from '@angular/core';
import {Geolocation} from '@ionic-native/geolocation';
import {UserService} from "../../app/services/user.service";
import {User} from "../../app/model/user";

@Component({
    selector: 'page-tracking',
    templateUrl: 'tracking.html',
})
export class Tracking {

    user: User;
    coords: any;

    constructor(userService: UserService, geolocation: Geolocation) {
        this.user = userService.user;

        geolocation.watchPosition()
            .filter((p) => p.coords !== undefined)
            .subscribe((data) => {
                this.coords = data.coords;
            });
    }
}