import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {SignupComponent} from "../signup/signup.component";
import {UserService} from "../../app/services/user.service";
import {PrivateHomeComponent} from "../private-home/private-home.component";
import {User} from "../../app/model/user";
import {CommonPage} from "../commonPage";
import {EventsService} from "../../app/services/event.service";
import {ToastController} from 'ionic-angular';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage extends CommonPage {
    user = new User();

    constructor(public navCtrl: NavController, public eventsService: EventsService, private userService: UserService,
                public toastCtrl: ToastController) {
        super(navCtrl, eventsService);
    }

    login() {
        this.userService.login(this.user).subscribe(result => {
            if (result === true) {
                this.userService.getCurrentUser().subscribe(result => {
                    this.toastCtrl.create({
                        message: 'Login ok',
                        duration: 3000, position: 'top'
                    }).present();
                    this.navCtrl.push(PrivateHomeComponent, {});
                }, error => {
                    this.toastCtrl.create({
                        message: 'Mauvais couple login/mot de passe',
                        duration: 3000, position: 'top'
                    }).present();
                });
            }
        }, error => {
            this.toastCtrl.create({
                message: 'Mauvais couple login/mot de passe',
                duration: 3000, position: 'top'
            }).present();
        });
    }

    register() {
        this.navCtrl.push(SignupComponent, {});
    }
}
