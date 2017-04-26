import {Component} from '@angular/core';
import {Hello} from "../hello/hello";

@Component({
    selector: 'app-private-home',
    templateUrl: './private-home.component.html'
})
export class PrivateHomeComponent {
    private tab1: any;
    private tab2: any;
    private tab3: any;
    constructor() {
        this.tab1 = Hello;
        this.tab2 = Hello;
        this.tab3 = Hello;
    }

}
