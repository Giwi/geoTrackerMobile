import {Injectable} from '@angular/core';
import {ApiService} from "./api.service";
import {Http, Response} from "@angular/http";
import {AuthenticationService} from "./authentication.service";
import {Observable} from "rxjs";
import {ENV} from "../../config/environment.dev";
import {EventsService} from "./event.service";
import {ToastController} from "ionic-angular";
/**
 *
 */
@Injectable()
export class ParamService extends ApiService {

  constructor(public toastCtrl: ToastController,
              public authenticationService: AuthenticationService, public eventsService: EventsService, public http: Http) {
    super(toastCtrl, authenticationService, eventsService);
  }

  /**
   *
   * @returns {Observable<any>}
   */
  getRoles(): Observable<any[]> {
    return this.http.get(ENV.API_URL + '/api/1/private/param/roles', this.addHeaderToken())
      .map((response: Response) => {
        console.log(response);
        return this.extractData(response);
      });
  }
}
