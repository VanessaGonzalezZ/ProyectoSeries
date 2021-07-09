import { Injectable } from '@angular/core';

import { Serie } from '../models/serie';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  public url: string;

  public headers = new HttpHeaders({
    'Content-Type':'application/json'
  });

  constructor(private _http:HttpClient) {
    this.url = 'http://localhost:3977/api/';
   }

   //metodos que interactuan con la api

   //metodo que obtiene el listado de resgistros
   getSeries(){
      return this._http.get(this.url+'series',{headers:this.headers});
   }



   //metodo que envia un objeto para insertarlo en la BD
   addSerie(serie: Serie){
     //convertimos el objeto serie (ts) a un objeto JSON
     let params = JSON.stringify(serie);
     //hacemos la peticion
     return this._http.post(this.url+'saveS',params,{headers:this.headers});
   }

   //metodo que envia un objeto para modificarlo
   editSerie(serie: Serie){
     let params = JSON.stringify(serie);
     let id = serie._id;
     
     return this._http.put(this.url+'serie/'+id,params,{headers:this.headers});
   }

   //metodo [ara enviar el id de un objeto que deseamos eliminar
   deleteSerie(id: string){
     return this._http.delete(this.url+'serie/'+id,{headers:this.headers});
   }

  
  }
  