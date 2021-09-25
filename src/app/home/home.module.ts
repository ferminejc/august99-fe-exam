import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SpinnerComponent } from '../spinner/spinner.component';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { HttpClientModule } from '@angular/common/http';
import { SpacexService } from '../core/services/spacex.service';
import { TimeagoModule } from 'ngx-timeago';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, SpinnerComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    InfiniteScrollModule,
    HomeRoutingModule,
    TimeagoModule.forRoot(),
    Ng2SearchPipeModule,
    ReactiveFormsModule,
  ],
  providers: [SpacexService]
})
export class HomeModule { }
