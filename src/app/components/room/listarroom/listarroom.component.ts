import { Component, OnInit } from '@angular/core';
import{MatTableDataSource, MatTableModule} from '@angular/material/table'
import { Room } from '../../../models/Room';
import { RoomService } from '../../../services/room.service';

@Component({
  selector: 'app-listarroom',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './listarroom.component.html',
  styleUrl: './listarroom.component.css',
})
export class ListarroomComponent implements OnInit {
  dataSource:MatTableDataSource<Room>=new MatTableDataSource()

  displayedColumns:string[]=['c1','c2','c3']

  constructor(private rS:RoomService){}
  ngOnInit():void{

    this.rS.list().subscribe((data)=> {
      this.dataSource=new MatTableDataSource(data)

    });
    this.rS.getList().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data)
    })

  }

}
