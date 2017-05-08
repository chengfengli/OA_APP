import {Component} from '@angular/core';
import {HomePage} from '../home/home';
import {ApplyListPage} from '../apply-list/apply-list';
import {AgreeListPage} from '../agree-list/agree-list';
import {UserInfoPage} from '../userinfo/userinfo';
@Component({
    templateUrl:'tabs.html'
})
export class TabsPage{
    home:any=HomePage;
    applyList:any=ApplyListPage;
    agreeList:any=AgreeListPage;
    userInfo:any=UserInfoPage;
}