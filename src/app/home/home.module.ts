import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { HttpClientModule } from '@angular/common/http';
import { SpacexService } from '../core/services/spacex.service';
import { TimeagoModule } from 'ngx-timeago';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    InfiniteScrollModule,
    HomeRoutingModule,
    TimeagoModule.forRoot(),
  ],
  providers: [SpacexService]
})
export class HomeModule { }
