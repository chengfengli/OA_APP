import {Component} from '@angular/core';
import { AlertController } from 'ionic-angular';
@Component({
    selector:'overtime',
    templateUrl:'overtime.html'
})
export class OverTimePage{
    constructor(public alertCtrl: AlertController){

    }
}