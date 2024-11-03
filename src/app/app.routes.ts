import { Routes } from '@angular/router';
import { RoomComponent } from './components/room/room.component';
import { CreaeditaroomComponent } from './components/room/creaeditaroom/creaeditaroom.component';

export const routes: Routes = [
    {
        path:'ambientes',component:RoomComponent,
        children:[
            {
                path:'nuevo',component:CreaeditaroomComponent
            }
        ]
    }
];
