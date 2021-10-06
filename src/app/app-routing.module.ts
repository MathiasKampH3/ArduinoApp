import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RoomComponent } from './Components/room/room.component';


const routes: Routes = [
  {path : '', component: AppComponent, children: [

    {
      path: 'room',
      component: RoomComponent
    }

  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
