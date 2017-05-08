import {Component} from '@angular/core';
import { AlertController, NavController, ActionSheetController } from 'ionic-angular';
import { LeavePage } from "../leave/leave";
import { OverTimePage } from "../overtime/overtime";
import { FillCardPage } from "../fillcard/fillcard";

@Component({
    selector:'apply-list',
    templateUrl:'apply-list.html'
})
export class ApplyListPage{
    apply="applying";

    constructor(public alertCtrl: AlertController,public actionSheet:ActionSheetController,public navCtrl:NavController){
        
    }
    /**申请 */
    applyFun(){
        this.actionSheet.create({
            title: '选择申请类型',
            buttons: [
                {
                    text: '请假申请',
                    handler: () => {
                        this.navCtrl.push(LeavePage);
                    }
                },{
                     text: '加班申请',
                     handler: () => {
                         this.navCtrl.push(OverTimePage);
                     }
                 },{
                     text: '补卡申请',
                     handler: () => {
                         this.navCtrl.push(FillCardPage);
                     }
                 }
             ]
         }).present();
    }

    /**撤销 */
    revoke(){
        this.alertCtrl.create({
            title: '提示',
            subTitle: '确定撤销吗？',
            buttons: ['确定']
        }).present();
    }

    xiangqing(){
        let html = "<table>"+
                        "<tr>"+
                            "<td>请假理由:</td>"+
                        "</tr>"+
                        "<tr>"+
                            "<td>拒绝理由:</td>"+
                        "</tr>"+
                    "</table>";
        let alert = this.alertCtrl.create({
            title: '<span>事假</span>2017-02-02<span>拒绝</span>',
            subTitle: html
        });
        alert.present();
    }
}