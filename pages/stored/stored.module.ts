import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StoredPage } from './stored';

@NgModule({
  declarations: [
    StoredPage,
  ],
  imports: [
    IonicPageModule.forChild(StoredPage),
  ],
  exports: [
    StoredPage
  ]
})
export class StoredPageModule {}
