import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, RouterModule, NgbModule, HttpClientModule],
  exports: [HeaderComponent],
})
export class CoreModule {}

/*
This module will use the HttpClientModule to fetch data from the JSON files you created earlier.
It will also use a couple of ng - bootstrap components from NgbModule and the RouterModule for routing.
You will also need to add them to the imports of the CoreModule. */

/** */
