import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomComponent } from './Components/room/room.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RoomService } from './Services/room.service';



@NgModule({
  declarations: [
    AppComponent,
    RoomComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,

  ],
  providers: [RoomService, RoomComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
