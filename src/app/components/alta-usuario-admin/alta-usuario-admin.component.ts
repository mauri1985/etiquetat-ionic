import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clases/Usuario';
import { UsuarioService } from 'src/app/servicio/usuario.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-alta-usuario-admin',
  templateUrl: './alta-usuario-admin.component.html',
  styleUrls: ['./alta-usuario-admin.component.css']
})
export class AltaUsuarioAdminComponent implements OnInit {
  usuarioModel = new Usuario;
  showAlertTrue: boolean = false;
  showAlertFalse: boolean = false;
  constructor(private formBuilder: FormBuilder,private usuarioService: UsuarioService) { }
   
  get nombreUser(){
    return this.registerAdminForm.get('nombreUser');
  }

  get apellidoUser(){
    return this.registerAdminForm.get('apellidoUser');
  }

  get emailUser(){
    return this.registerAdminForm.get('emailUser');
  }

  get contraseniaUser(){
    return this.registerAdminForm.get('contraseniaUser');
  }


  registerAdminForm = this.formBuilder.group({
    nombreUser: ['', Validators.required],
    apellidoUser: ['', Validators.required],
    emailUser: ['', { 
    validators: [Validators.required, Validators.email]
    }],
    contraseniaUser: ['', Validators.required],
    rol:['', Validators.required]
  });
  
  
  ngOnInit() {
  }


  altaUsuario(){
      this.usuarioService.RegistroUsuarioAdmin(this.usuarioModel).subscribe((response:any) => {
        if(response== true){
          this.showAlertTrue = true;
          console.log("Usuario Registrado exitosamente");
        }else{
          this.showAlertFalse = true;
          console.log("Error al registrar usuario");
        }
      });
    }

}
