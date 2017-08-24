import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StoredPage } from '../stored/stored';


@Component({
  selector: 'page-input',
  templateUrl: 'Input.html'
})
export class InputPage {

  systolicbp:number;
  diastolicbp:number;
  sys=[];
  dia=[];

  constructor(public navCtrl: NavController) {

  }

    submitBp(){

      
     
      this.sys.push(this.systolicbp)
      this.dia.push(this.diastolicbp)

      let bp = {
        systolic: this.sys,
        diastolic: this.dia
      }
  
        this.navCtrl.push(StoredPage, bp);
         console.log("bp submitted");
         console.log(this.systolicbp);
         console.log(this.sys);
         console.log(this.diastolicbp);
         console.log(this.dia);
        }

        resetbp(){
          this.sys=[]
          this.dia=[]
          }
    

}