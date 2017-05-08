import { LeavePage } from './../leave/leave';
import {Component} from '@angular/core';
import { AlertController, NavController, ToastController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { OverTimePage } from "../overtime/overtime";
import { FillCardPage } from "../fillcard/fillcard";
@Component({
    selector:'agree-list',
    templateUrl:'agree-list.html'
})
export class AgreeListPage{
    agree="agreewill";
    constructor(public alertCtrl: AlertController,public actionSheet:ActionSheetController,public navCtrl:NavController,public toastCtrl:ToastController){
        
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

    /**同意 */
    agreeFun(){
        this.alertCtrl.create({
            title: '提示',
            message:"同意此申请吗？",
            buttons: [
                {
                    text: '取消',
                    handler: () => {
                        
                    }
                },
                {
                    text: '确定',
                    handler: () => {
                        this.toastCtrl.create({
                            message:'成功',
                            duration:2000
                        }).present();
                    }
                }
            ]
        }).present();
    }
    /**拒绝 */
    refuseFun(){
        this.alertCtrl.create({
            title: '拒绝理由',
            inputs: [
                {
                    name: 'title',
                    placeholder: '填写拒绝理由'
                },
            ],
            buttons: [
                {
                    text: '取消',
                    handler: (data) => {
                        
                    }
                },
                {
                    text: '保存',
                    handler: (data) => {
                        
                        this.toastCtrl.create({
                            message:'拒绝理由'+data.title,
                            duration:2000
                        }).present();
                    }
                }
            ]
        }).present();
    }
}