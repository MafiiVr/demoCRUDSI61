import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { Room } from '../../../models/Room';
import { RoomService } from '../../../services/room.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creaeditaroom',
  standalone: true,
  imports: [MatFormFieldModule,MatInputModule,MatSelectModule,FormsModule,MatButtonModule,ReactiveFormsModule],
  templateUrl: './creaeditaroom.component.html',
  styleUrl: './creaeditaroom.component.css'
})

export class CreaeditaroomComponent implements OnInit {
  form:FormGroup=new FormGroup({});
  room:Room = new Room()

  listaUbicaciones:{value:string,viewValue:string}[]=[
    {value:'Sotano',viewValue:'Sotano'},
    {value:'Piso 1',viewValue:'Piso 1'},
    {value:'Piso 2',viewValue:'Piso 2'},
  ]

  constructor(
    private rS:RoomService, 
    private formBuilder:FormBuilder, 
    private router:Router
  ){}
  ngOnInit(): void {
    this.form =this.formBuilder.group({
      hambiente:['',Validators.required],
      hubicacion:['',Validators.required]

    })
  }
  aceptar():void {
    if(this.form.valid){
      this.room.nameRoom=this.form.value.hambiente,
      this.room.ubicationRoom=this.form.value.hubicacion;
      this.rS.insert(this.room).subscribe(d=>{
        this.rS.list().subscribe(d=>{
          this.rS.setList(d)
        })
      })

    }
    this.router.navigate([''])

  }


}
