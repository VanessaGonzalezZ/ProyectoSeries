import { Component, OnInit } from '@angular/core';

import { SerieService } from './services/serie.service';
import { GeneroService } from './services/genero.service';
import { Serie } from './models/serie';
import { Genero } from './models/genero';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [SerieService, GeneroService],
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Series';
  public series: Serie[] = [];
  public generos: Genero[] = [];

  serie = new Serie('','','','','');
  genero = new Genero('','','');

  constructor(private _serieService:SerieService,private _generoService:GeneroService){}
  ngOnInit(){
    this.getSeries();
    this.getGeneros();
  }

  //metodo para obtener los datos de las series y generos y mostrarlos en la pagina
  getSeries(){
    this._serieService.getSeries().subscribe((series:Serie[])=>{
      this.series = series;
    })
  }

  getGeneros(){
    this._generoService.getGeneros().subscribe((generos:Genero[])=>{
      this.generos = generos;
    })
  }

  //metodos para insertar una serie y genero desde formulario
  addSerie(){
    this._serieService.addSerie(this.serie).subscribe((res)=>{
      this.clearSerie();
      this.ngOnInit();
    },
    (err) =>{
      console.log(err);
    }
    );
  }

  addGenero(){
    this._generoService.addGenero(this.genero).subscribe((res)=>{
      this.clearGenero();
      this.ngOnInit();
    },
    (err) =>{
      console.log(err);
    }
    );
  }

  //metodo para limpiar el objeto serie
  clearSerie(){
    this.serie._id = '';
    this.serie.nombre = '';
    this.serie.temporadas = '';
    this.serie.sinopsis = '';
    this.serie.genero = '';
  }

  clearGenero(){
    this.genero._id = '';
    this.genero.generoC = '';
    this.genero.descripcion = '';
  }

  //metodo para editar
  editSerie(){
    this._serieService.editSerie(this.serie).subscribe((res)=>{
      this.clearSerie();
      this.ngOnInit();
    },
    (err)=>{
      console.log(err);
    }
    );
  }

  editGenero(){
    this._generoService.editGenero(this.genero).subscribe((res)=>{
      this.clearGenero();
      this.ngOnInit();
    },
    (err)=>{
      console.log(err);
    }
    );
  }

  //metodo para eliminar
  deleteSerie(){
    this._serieService.deleteSerie(this.serie._id).subscribe((res)=>{
      this.clearSerie();
      this.ngOnInit();
    },
    (err) => {
      console.log(err);
    }
    )
  }

  deleteGenero(){
    this._generoService.deleteGenero(this.genero._id).subscribe((res)=>{
      this.clearGenero();
      this.ngOnInit();
    },
    (err) => {
      console.log(err);
    }
    )
  }

  //metodo para resetear el formulario
  onSubmit(form: NgForm){
    form.resetForm();
  }

  //metodo para seleccionar un registro
  selectSerie(serie){
    this.serie = serie;
  }

  selectGenero(genero){
    this.genero = genero;
  }


  confirmDel()
  {
    if (window.confirm("Desea eliminar el registro?") == true)
    {
      this.deleteSerie();
    }else{
        console.log("Cancelado");
     }
  }
}
