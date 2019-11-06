import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../servicio/categoria.service';
import { Categoria } from '../../clases/Categoria';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-alta-categoria',
  templateUrl: './alta-categoria.component.html',
  styleUrls: ['./alta-categoria.component.css']
})
export class AltaCategoriaComponent implements OnInit {
categoriaModel= new Categoria;
showAlertTrue: boolean = false;
  showAlertFalse: boolean = false;
  constructor(private formBuilder: FormBuilder,private categoriaService: CategoriaService) { }
  
  get nombre(){
    return this.categoriaForm.get('nombre');
  }

  categoriaForm = this.formBuilder.group({
    nombre: ['', Validators.required],
    
  });
  ngOnInit() {
  }


altaCategoria(){

  this.categoriaService.altaCategoria(this.categoriaModel.nombre).subscribe((response:any) => {
    if(response== true){
      this.showAlertTrue = true;
      console.log("Categoria agregada exitosamente");
    }else{
      this.showAlertFalse = true;
      console.log("Error al agregar Categoria");
    }
  });
}

}
