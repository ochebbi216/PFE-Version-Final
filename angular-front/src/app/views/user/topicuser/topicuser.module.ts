import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicuserComponent } from './topicuser/topicuser.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TopicuserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class TopicuserModule { }
