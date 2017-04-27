import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {UserService} from "../../app/services/user.service";
import {PrivateHome} from "../private-home/private-home";
import {User} from "../../app/model/user";
import {CommonPage} from "../commonPage";
import {EventsService} from "../../app/services/event.service";
import {ToastController} from 'ionic-angular';
import {TranslateService} from '@ngx-translate/core';
import {ENV} from "../../config/environment.dev";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage extends CommonPage {
    user = new User();

    constructor(navCtrl: NavController, eventsService: EventsService, translate: TranslateService,
                public userService: UserService, public toastCtrl: ToastController) {
        super(navCtrl, eventsService, translate);

        if (localStorage.getItem('currentUser')) {
            this.getCurrentUser(false);
        }
    }

    private getCurrentUser(showToast: boolean) {
        this.userService.getCurrentUser().subscribe(result => {
            if (showToast) {
                this.toastCtrl.create({
                    message: 'Login ok',
                    duration: 3000, position: 'top'
                }).present();
            }
            this.navCtrl.push(PrivateHome, {'user': result});
        });
    }

    login() {
        this.userService.login(this.user).subscribe(result => {
            if (result === true) {
                this.getCurrentUser(true);
            }
        }, error => {
            this.toastCtrl.create({
                message: 'Mauvais couple login/mot de passe',
                duration: 3000, position: 'top'
            }).present();
        });
    }

    getLink(path: string) {
        return ENV.API_URL + (path ? '/' + path : '');
    }

}
