import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RoomComponent } from './components/room/room.component';
import{MatToolbarModule} from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import{MatIconModule} from '@angular/material/icon'
import{RouterModule} from '@angular/router'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RoomComponent,MatToolbarModule,MatMenuModule,MatIconModule,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demoCRUDSI61';
}



