import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {Http, HttpModule} from "@angular/http";
import {PrivateHomeComponent} from "../pages/private-home/private-home.component";
import {ApiService} from "./services/api.service";
import {UserService} from "./services/user.service";
import {AuthenticationService} from "./services/authentication.service";
import {AuthGuard} from "./guards/auth.guard";
import {EventsService} from "./services/event.service";
import {ParamService} from "./services/param.service";
import {Hello} from "../pages/hello/hello";

export function createTranslateLoader(http: Http) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        PrivateHomeComponent,
        Hello
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [Http]
            }
        }),
        HttpModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
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
