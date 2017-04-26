import {Injectable} from "@angular/core";
import {Http, Response}  from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

import {User} from '../model/user';
import {AuthenticationService} from "./authentication.service";
import {ApiService} from "./api.service";
import {ENV} from "../../config/environment.dev";
import {EventsService} from "./event.service";
import {ToastController} from "ionic-angular";

/**
 *
 */
@Injectable()
export class UserService extends ApiService {

    constructor(public toastCtrl: ToastController, public authenticationService: AuthenticationService,
                public eventsService: EventsService, public http: Http) {
        super(toastCtrl, authenticationService, eventsService);
    }

    /**
     *
     * @param user
     * @returns {Observable<boolean>}
     */
    login(user: User): Observable<boolean> {
        return this.authenticationService.login(user.username, user.password);
    }

    /**
     *
     */
    logout() {
        return this.authenticationService.logout();
    }

    /**
     *
     * @param user
     * @returns {Observable<R>}
     */
    register(user: User): any {
        return this.http.put(ENV.API_URL + '/api/1/user/register', {
            firstname: user.firstname,
            name: user.name,
            username: user.username,
            password: user.password
        })
            .map((response: Response) => {
                return super.extractData(response);
            });
    }

    /**
     *
     * @returns {Observable<R>}
     */
    getCurrentUser(): any {
        return this.http.get(ENV.API_URL + '/api/1/private/user', super.addHeaderToken())
            .map((response: Response) => {
                return super.extractData(response);
            });
    }

    getUserList() {
        return this.http.get(ENV.API_URL + '/api/1/private/user/all', super.addHeaderToken())
            .map((response: Response) => {
                return super.extractData(response);
            });
    }
}
