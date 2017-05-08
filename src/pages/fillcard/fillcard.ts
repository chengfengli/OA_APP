import {Component} from '@angular/core';
import { AlertController } from 'ionic-angular';
@Component({
    selector:'fillcard',
    templateUrl:'fillcard.html'
})
export class FillCardPage{
    constructor(public alertCtrl: AlertController){
        
    }
}