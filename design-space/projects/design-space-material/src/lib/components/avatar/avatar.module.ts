import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from './avatar/avatar.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [AvatarComponent],
  imports: [
    BrowserModule,
    CommonModule
  ],
  exports: [AvatarComponent]
})
export class AvatarModule { }
