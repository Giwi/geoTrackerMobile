import {Component} from '@angular/core';
import {Alert} from "../alert/alert";
import {NavController, NavParams} from "ionic-angular";
import {TranslateService} from '@ngx-translate/core';
import {Tracking} from "../tracking/tracking";
import {Settings} from "../settings/settings";
import {UserService} from "../../app/services/user.service";
import {CommonPage} from "../commonPage";
import {EventsService} from "../../app/services/event.service";

@Component({
    selector: 'app-private-home',
    templateUrl: './private-home.html'
})
export class PrivateHome extends CommonPage {
    private tab1: any;
    private tab2: any;
    private tab3: any;

    constructor(navCtrl: NavController, eventsService: EventsService, translate: TranslateService, params: NavParams, userService: UserService) {
        super(navCtrl, eventsService, translate);
        this.tab1 = Alert;
        this.tab2 = Tracking;
        this.tab3 = Settings;
        userService.user = params.get('user');
    }
}
