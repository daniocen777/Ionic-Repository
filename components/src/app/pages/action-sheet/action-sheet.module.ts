import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActionSheetPageRoutingModule } from './action-sheet-routing.module';

import { ActionSheetPage } from './action-sheet.page';
import { ComponentsModule } from 'src/app/components/components.module';

import { ActionSheet, ActionSheetOptions } from '@ionic-native/action-sheet/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActionSheetPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ActionSheetPage]
})
export class ActionSheetPageModule { }
