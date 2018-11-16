import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';

export class HttpConst {
  static ServerPath: string = 'http://furthersoftware.com.tw:8015/api';
  static HttpOptions: any = {
    'Content-Type': 'application/json',
  }
}
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {


  //讀取
  optionDatas: any = [];
  selectedData: any;

  //建立Product Model
  createModel: any = {};

  constructor(private http: HttpClient, public toastController: ToastController) {

  }

  ngOnInit() {
    this.loadOptionData();
  }


  /**
   * 建立 Product
   */
  createProduct(): void {
    this.http.post(HttpConst.ServerPath + '/Products/PostCreate', this.createModel, HttpConst.HttpOptions).subscribe((x) => {
      this.successToast('建立成功!');
      this.refresh();
      this.createModel = {};

    });
  }

  deleteProdcut(item):void{
    if(item == null) {this.failToast('尚未選擇');return;};
    let id = item.id;
    this.http.delete(HttpConst.ServerPath + '/Products/Delete?id=' + id,HttpConst.HttpOptions).subscribe((x)=>{
      this.successToast('刪除成功!');
      this.refresh();
    })

  }


  /**
   * 讀取 Products
   */
  loadOptionData(): void {
    
    this.http.post(HttpConst.ServerPath + '/Products/LoadAll', null, HttpConst.HttpOptions).subscribe(x => {
      this.optionDatas = x;
    });
  }

  /**
   * 成功訊息
   */
  async successToast(title:string) {
    const toast = await this.toastController.create({
      message: title,
      duration: 2000
    });
    toast.present();
  }
  /**
   * 成功訊息
   */
  async failToast(title?:string) {
    if(title == null || title == undefined) title = '無法取得資料'; 
    const toast = await this.toastController.create({
      message: title,
      duration: 2000
    });
    toast.present();
  }

  /**
   * 重新整理
   */

  refresh(){
    this.selectedData = {};
    this.optionDatas = null;
    this.loadOptionData();

  }



}
