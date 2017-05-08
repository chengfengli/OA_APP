import { Camera } from '@ionic-native/camera';
import { OverTimePage } from './../overtime/overtime';
import { NavController, AlertController, ToastController,ActionSheetController } from 'ionic-angular';
import { Component } from '@angular/core';
import { LeavePage } from "../leave/leave";
import { FillCardPage } from "../fillcard/fillcard";
@Component({
    selector:'home',
    templateUrl:'home.html'
})
export class HomePage{
    photoUrl = 'assets/images/logo.png';
    constructor(public navCtrl:NavController,public alertCtrl:AlertController,public toastCtrl: ToastController,
                public actionSheetCtrl:ActionSheetController,public camera:Camera){

    }
    /**加班 */
    overTimeFun(){
        this.navCtrl.push(OverTimePage);
    }
    /**请假 */
    leaveFun(){
        this.navCtrl.push(LeavePage);
    }
    /**补卡 */
    fillCardFun(){
        this.navCtrl.push(FillCardPage);
    }
    /**微信打卡 */
    weCharFun(){
        this.navCtrl.push(OverTimePage);
    }
    /**撤销 */
    revokeFun(){
        this.alertCtrl.create({
            title: '提示',
            message:"确定撤销此申请吗？",
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
                            message:'撤销成功',
                            duration:2000
                        }).present();
                    }
                }
            ]
        }).present();
    }
    /**同意 */
    agree(){
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
    refuse(){
        this.alertCtrl.create({
            title: '提示',
            message:"确定拒绝此申请吗？",
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
                            message:'拒绝成功',
                            duration:2000
                        }).present();
                    }
                }
            ]
        }).present();
    }

    openPhoto(sourceType){
        var options = {
            quality: 50,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            saveToPhotoAlbum:true,
            sourceType:sourceType,
            correctOrientation: true
        }
        this.camera.getPicture(options).then((imageData) => {
            this.photoUrl=imageData;
        }, (err) => {
            alert( err.toString());
        });
    }

    setPhote(){
        this.actionSheetCtrl.create({
            buttons:[
                {
                    text:'相册',
                    icon:'ios-images-outline',
                    handler:()=>{
                        this.openPhoto(0);
                    }
                },
                {
                    text:'相机',
                    icon:'ios-camera-outline',
                    handler:()=>{
                        this.openPhoto(this.camera.PictureSourceType.CAMERA);
                    }
                }
            ]
        }).present()
    }


}
