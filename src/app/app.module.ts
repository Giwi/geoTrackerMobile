import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {HttpModule} from "@angular/http";
import {SignupComponent} from "../pages/signup/signup.component";
import {PrivateHomeComponent} from "../pages/private-home/private-home.component";
import {ApiService} from "./services/api.service";
import {UserService} from "./services/user.service";
import {AuthenticationService} from "./services/authentication.service";
import {AuthGuard} from "./guards/auth.guard";
import {EventsService} from "./services/event.service";
import {ParamService} from "./services/param.service";
import {Hello} from "../pages/hello/hello";

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        SignupComponent,
        PrivateHomeComponent,
        Hello
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        HttpModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        SignupComponent,
        PrivateHomeComponent,
        Hello
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        ApiService,
        UserService,
        AuthenticationService,
        AuthGuard,
        EventsService,
        ParamService
    ]
})
export class AppModule {
}
