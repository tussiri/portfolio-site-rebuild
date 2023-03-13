import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from './core/core.module';
import { VideoBackgroundComponent } from './core/video-background/video-background.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactFormComponent } from './portfolio/contact-form/contact-form.component';
import { ContactService } from './core/services/contact.service';





@NgModule({
  declarations: [AppComponent, VideoBackgroundComponent, ContactFormComponent,],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScullyLibModule,
    NgbModule,
    CoreModule,
    ReactiveFormsModule,

  ],
  providers: [ContactService],
  bootstrap: [AppComponent],
})
export class AppModule { }
