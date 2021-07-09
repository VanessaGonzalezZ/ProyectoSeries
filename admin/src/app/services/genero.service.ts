import { Injectable } from '@angular/core';

import { Genero } from '../models/genero';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  public url: string;

  public headers = new HttpHeaders({
    'Content-Type':'application/json'
  });

  constructor(private _http:HttpClient) {
    this.url = 'http://localhost:3977/api/';
   }

   //metodos que interactuan con la API

   //metodo que obtiene el listado de registros
   getGeneros(){
     return this._http.get(this.url+'generos',{headers:this.headers});
   }

   //metodo que envia un objeto para insertarlo en la BD
   addGenero(genero: Genero){
     let params = JSON.stringify(genero);
     return this._http.post(this.url+'saveG',params,{headers:this.headers});
   }

   //metodo que envia un objeto para modificarlo
   editGenero(genero: Genero){
     let params = JSON.stringify(genero);
     let id = genero._id;

     return this._http.put(this.url+'genero/'+id,params,{headers:this.headers});
   }

   //metodo para enviar el id de un objeto que deseamos eliminar
   deleteGenero(id:string){
     return this._http.delete(this.url+'genero/'+id,{headers:this.headers});
   }


}
