import {Component} from "@angular/core";
import {UserService} from "../../app/services/user.service";
import {NavController, ToastController} from "ionic-angular";
import {User} from "../../app/model/user";
import {HomePage} from "../home/home";
import {EventsService} from "../../app/services/event.service";
import {CommonPage} from "../commonPage";

/**
 *
 */
@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html'
})
export class SignupComponent extends CommonPage {
    user = new User();

    constructor(public navCtrl: NavController, public eventsService: EventsService, private userService: UserService,
                public toastCtrl: ToastController) {
        super(navCtrl, eventsService);
    }

    register() {
        this.userService.register(this.user).subscribe(() => {
            this.toastCtrl.create({
                message: 'Votre compte a été créé',
                duration: 3000, position: 'top'
            }).present();
            this.user = new User();
            this.navCtrl.push(HomePage, {});
        }, error => this.userService.handleError(error));
    }

}
