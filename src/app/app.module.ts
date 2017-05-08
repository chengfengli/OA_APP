import { UserInfoPage } from './../pages/userinfo/userinfo';
import { OverTimePage } from './../pages/overtime/overtime';
import { LeavePage } from './../pages/leave/leave';
import { FillCardPage } from './../pages/fillcard/fillcard';
import { ApplyListPage } from './../pages/apply-list/apply-list';
import { AgreeListPage } from './../pages/agree-list/agree-list';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Camera } from '@ionic-native/camera';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    AgreeListPage,
    ApplyListPage,
    FillCardPage,
    LeavePage,
    OverTimePage,
    UserInfoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    AgreeListPage,
    ApplyListPage,
    FillCardPage,
    LeavePage,
    OverTimePage,
    UserInfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},Camera
  ]
})
export class AppModule {}
