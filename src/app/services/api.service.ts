import {Injectable} from "@angular/core";
import {Response, Headers, RequestOptions}  from '@angular/http';
import 'rxjs/add/operator/map';

import {AuthenticationService} from "./authentication.service";
import {EventsService} from "./event.service";
import {ToastController} from "ionic-angular";
/**
 * ApiService
 */
@Injectable()
export class ApiService {
    constructor(public toastCtrl: ToastController, public authenticationService: AuthenticationService, public eventsService: EventsService) {
    }

    extractData(res: Response): any {
        return res.json();
    }

    /**
     *
     * @param error
     * @returns {string}
     */
    handleError(error: any): String {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        if (error.status === 401) {
            this.authenticationService.logout();
            this.eventsService.broadcast('nav:HomePage');
            return;
        }
        if (error.status === 403) {
            this.toastCtrl.create({
                message: 'You can not access this area',
                duration: 3000, position: 'top'
            }).present();
            this.eventsService.broadcast('nav:PrivateHome');
            return;
        }
        let errMsg = (error.message) ? error.message : error.status ? error.statusText : 'Server error';
        console.error(error); // log to console instead
        if (error._body && JSON.parse(error._body)) {
            console.log(JSON.parse(error._body));
        }
        this.toastCtrl.create({
            message: 'Une erreur s\'est produite <br />' + errMsg,

            duration: 3000, position: 'top'
        }).present();
        return errMsg;
    }

    /**
     *
     * @returns {RequestOptions}
     */
    addHeaderToken(): RequestOptions {
        let headers = new Headers({'Authorization': 'Bearer ' + this.authenticationService.token});
        return new RequestOptions({headers: headers});
    }
}
