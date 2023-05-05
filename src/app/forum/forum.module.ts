import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForumRoutingModule } from './forum-routing.module';
import { ForumComponent } from './forum.component';
import { FormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { BestForumComponent } from './best-forum/best-forum.component';
import { AaddforumComponent } from './aaddforum/aaddforum.component';
import { ForumService } from '../core/service/forum.service';
import { MessageService } from 'primeng/api';
@NgModule({
  declarations: [
    ForumComponent,
    BestForumComponent,
    AaddforumComponent,
  ],
  imports: [
    CommonModule,
    ForumRoutingModule,FormsModule,HttpClientModule
  ],
  providers:[ForumService,MessageService]
})
export class ForumModule { }
