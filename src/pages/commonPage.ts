import {EventsService} from "../app/services/event.service";
import {NavController} from "ionic-angular";
import {OnInit} from "@angular/core";
import {TranslateService} from '@ngx-translate/core';
import {HomePage} from "./home/home";
import {PrivateHome} from "./private-home/private-home";

export class CommonPage implements OnInit {
    constructor(public navCtrl: NavController, public eventsService: EventsService, translate: TranslateService) {
        translate.setDefaultLang('fr');
        translate.use(navigator.language.split('-')[0]);
    }

    ngOnInit(): void {
        this.eventsService.on('nav:HomePage', (evt) => {
            this.navCtrl.push(HomePage, {});
        });
        this.eventsService.on('nav:PrivateHome', (evt) => {
            this.navCtrl.push(PrivateHome, {});
        });
    }

}