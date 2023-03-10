import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { RedefinicaoSenhaUsuarioServiceService } from './redefinicao-senha-usuario-service.service';

@Component({
  selector: 'app-redefinicao-senha-usuario',
  templateUrl: 'redefinicao-senha-usuario.component.html',
  styleUrls: ['redefinicao-senha-usuario.component.css']
})
export class RedefinicaoSenhaUsuarioComponent implements OnInit {
  redefinicaoUsuarioSenhaForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, 
    private redefinicaoSenhaUsuarioServiceService:RedefinicaoSenhaUsuarioServiceService,
    private router: Router,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void { 
     
    this.redefinicaoUsuarioSenhaForm = this.formBuilder.group({
      email:['',[Validators.required, Validators.email] ], 
    }) 
    
  }
  
 
   
  solicitarReset(){
    this.spinner.show()
    if(this.redefinicaoUsuarioSenhaForm.valid){ 
      const solicitaResetUsuario = this.redefinicaoUsuarioSenhaForm.getRawValue();
      this.redefinicaoSenhaUsuarioServiceService.solicitarResetService(solicitaResetUsuario).subscribe((res)=>{
     
        console.log(res)
         
          alert("Usuário encontrado! Token enviado para email!")
          this.spinner.hide();
       
       this.router.navigate(['home/ativausuario']); 
      },
      (error)=>{
       alert(error.statusText + "Usuário nao encontrado")
       this.spinner.hide();
      }
      )
    }else{
      alert("Dados invalidos")
    } 
  }

}
