import {EventsService} from "../app/services/event.service";
import {NavController} from "ionic-angular";
import {OnInit} from "@angular/core";
import {HomePage} from "./home/home";
import {PrivateHomeComponent} from "./private-home/private-home.component";
export class CommonPage  implements OnInit {
    constructor(public navCtrl: NavController, public eventsService: EventsService) {

    }
    ngOnInit(): void {
        this.eventsService.on('nav:HomePage', (evt) => {
            this.navCtrl.push(HomePage, {});
        });
        this.eventsService.on('nav:PrivateHomeComponent', (evt) => {
            this.navCtrl.push(PrivateHomeComponent, {});
        });
    }

}