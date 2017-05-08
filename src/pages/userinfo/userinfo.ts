import {Component} from '@angular/core';
import { AlertController, ModalController, NavParams, ToastController } from 'ionic-angular';
@Component({
    selector:'userinfo',
    templateUrl:'userinfo.html'
})
export class UserInfoPage{
    infomation="kaoqin";
    kaoqin_data=[];
    constructor(public alertCtrl: AlertController,public params:NavParams,modalCtrl:ModalController,public toastCtrl:ToastController){
        for(let i=1;i<=30;i++){
            let data={date:"2017-02-"+i,am:"9:20",pm:"18:05",status:"迟到"};
            this.kaoqin_data.push(data);
        }
    }

    xiangqing(){
        let alert = this.alertCtrl.create({
            title: '<span>2017-02-02</span>星期一<span>迟到</span>',
            subTitle: "<table>"+
                        "<tr>"+
                            "<td>打卡:09：19-18:20</td>"+
                            "<td>迟到时数:0.5</td>"+
                        "</tr>"+
                        "<tr>"+
                            "<td>加班工时:0</td>"+
                            "<td>标准工时:0</td>"+
                        "</tr>"+
                        "<tr>"+
                            "<td>实际工时:8</td>"+
                            "<td>早退时数:0</td>"+
                        "</tr>"+
                        "<tr>"+
                            "<td>请假时长:8</td>"+
                            "<td>请假描述:都是水电费</td>"+
                        "</tr>"+
                    "</table>"
        });
        alert.present();
    }

    editLove(){
        this.alertCtrl.create({
            inputs: [
                {
                    name: 'title',
                    placeholder: '兴趣爱好'
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
                            message:data.title,
                            duration:2000
                        }).present();
                    }
                }
            ]
        }).present();
    }

    editTaboo(){
        this.alertCtrl.create({
            inputs: [
                {
                    name: 'title',
                    placeholder: '个人禁忌'
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
                            message:data.title,
                            duration:2000
                        }).present();
                    }
                }
            ]
        }).present();
    }
}
