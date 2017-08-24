
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-stored',
  templateUrl: 'stored.html',
})
export class StoredPage {

  public NewSystolic;
  public NewDiastolic;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.NewSystolic = navParams.get('systolic');
  this.NewDiastolic = navParams.get('diastolic');
  }

  ionViewDidLoad() {
    console.log(this.navParams.get('systolic'));
    console.log(this.navParams.get('diastolic'));
    }

}

