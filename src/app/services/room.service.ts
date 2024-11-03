import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Room } from '../models/Room';
import { Subject } from 'rxjs';
const base_url = environment.base;
@Injectable({
  providedIn: 'root',
})
export class RoomService {
  private url = `${base_url}/habitaciones`;
  private listaCambio= new  Subject<Room[]>();

  constructor(private http: HttpClient) {}
  list() {
    return this.http.get<Room[]>(this.url)
  }
  insert(ro:Room){
    return this.http.post(this.url,ro);
  }

  setList(listarNueva:Room[]){
    this.listaCambio.next(listarNueva);

  }
  getList(){
    return this.listaCambio.asObservable();
  }
}
